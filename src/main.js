/**
 * https://github.com/dtjohnson/xlsx-populate#xlsx-populate
 * https://github.com/dtjohnson/xlsx-populate/blob/master/README.md#style-reference
 */
import XlsxPopulate from 'xlsx-populate/browser/xlsx-populate'
import columnMap from './utils/ColumnMap.js'
import saveAs from './utils/SaveAs.js'

const main = async (options) => {
    const {
        name,
        dataConfig,
        dataSource,
        stripe,
        border,
        wrapText,
        rowHeight,
        columnWidth,
        verticalAlignment,
        horizontalAlignment,
    } = options

    // 创建表格
    const workbook = await XlsxPopulate.fromBlankAsync()
    const sheet = workbook.sheet(0)
    const sheetContent = []
    if (Array.isArray(dataConfig)) {
        // 数组类型配置
        sheetContent[0] = dataConfig.map(({ label }) => label)
        sheetContent.push(
            ...dataSource.map((item) => {
                return dataConfig.map(({ prop, setValue }) => {
                    return setValue
                        ? setValue(item?.[prop]) || ''
                        : item?.[prop] || ''
                })
            })
        )
    } else {
        // 对象类型配置
        sheetContent[0] = Object.values(dataConfig)
        sheetContent.push(
            ...dataSource.map((item) => {
                return Object.keys(dataConfig).map((key) => item?.[key] || '')
            })
        )
    }
    sheet
        .range(`A1:${columnMap[sheetContent[0].length]}${sheetContent.length}`)
        .value(sheetContent)

    // 设置表格样式
    for (let i = 1; i <= sheetContent.length; i++) {
        rowHeight && sheet.row(i).height(rowHeight)
        for (let j = 1; j <= sheetContent[0].length; j++) {
            sheet.cell(`${columnMap[j]}${i}`).style({
                ...(border && {
                    border,
                }),
                ...(wrapText && {
                    wrapText
                }),
                verticalAlignment: verticalAlignment || 'center',
                horizontalAlignment: horizontalAlignment || 'left',
            })
            if (i === 1) {
                columnWidth && sheet.column(columnMap[j]).width(columnWidth)
                sheet.cell(`${columnMap[j]}${i}`).style({
                    bold: true,
                    fill: 'f0f0f0',
                })
            }
            // 斑马纹
            if (stripe && (i + 1) % 2 === 0) {
                sheet.cell(`${columnMap[j]}${i}`).style({
                    fill: 'f0f0f0',
                })
            }
        }
    }

    // 导出
    const fileBlob = await workbook.outputAsync({ type: 'blob' })
    const fileName = name ? `${name}.xlsx` : `${new Date().getTime()}.xlsx`
    saveAs(fileBlob, fileName)
}

export { main }
