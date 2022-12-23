/**
 * 设置列自适应宽度
 */

const getCellWidth = (cell) => {
    if (/.*[\u4e00-\u9fa5]+.*$/.test(cell)) {
        return cell.length * 2.1
    }
    return cell.length * 1.5
}

const getColumnWidth = (data) => {
    const colWidth = []
    for (const row of data) {
        row.forEach((cell, index) => {
            colWidth[index] = Math.max(colWidth[index] || 0, getCellWidth(cell))
        })
    }
    return colWidth
}

export default getColumnWidth
