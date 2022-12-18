/**
 * 合并单元格处理
 * https://github.com/dtjohnson/xlsx-populate/#rangemerged--boolean
 *
 * 单元格合并说明：
 * 如当前有一行：['测试', null, null, null, '测试']
 * 则合并将会从当前数组的 0 开始到 3
 * 本方法将数组中记录的位置映射为单元格区域 并执行合并操作
 */
import columnMap from './ColumnMap'

const mergeRange = (sheet, sheetContent) => {
    var mergeRangeList = []
    sheetContent.forEach((row, rowIndex) => {
        let nullRangeList = []
        row.forEach((cell, cellIndex) => {
            if (cell === null) {
                if (!nullRangeList.length) {
                    // 添加合并单元格开始位置
                    nullRangeList.push(`${columnMap[cellIndex]}${rowIndex + 1}`)
                }
                nullRangeList.push(`${columnMap[cellIndex + 1]}${rowIndex + 1}`)
                if (cellIndex + 2 > row.length) {
                    // 执行到每行末尾时
                    mergeRangeList.push(nullRangeList)
                    nullRangeList = []
                }
            } else if (nullRangeList.length) {
                mergeRangeList.push(nullRangeList)
                nullRangeList = []
            }
        })
    })
    mergeRangeList.forEach((item) => {
        sheet.range(`${item[0]}:${item[item.length - 1]}`).merged(true)
    })
}

export default mergeRange
