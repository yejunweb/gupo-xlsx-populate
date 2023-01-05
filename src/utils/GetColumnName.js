/**
 * 列名元素集
 */
const columnDataset = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

/**
 * 十进制的数化为k进制的数（取k取余法）
 */
const radixTransform = (num, k) => {
    let y = []
    while (num > 0) {
        let s = Math.floor(num / k)
        let _y = num % k
        if (s == 0) {
            y.push(num)
            num = 0
        } else {
            y.push(_y)
            num = s
        }
    }
    return y.reverse()
}

/**
 * 获取列名
 */
const getColumnName = (colIndex) => {
    if (colIndex < 0) {
        return ''
    }
    let colNames = []
    // 等于0和大于25的colIndex
    let isAdd1 = colIndex > 25 || colIndex < 1
    // 10进制转26进制
    let kArray = radixTransform(colIndex + (isAdd1 ? 1 : 0), 26)
    for (let i = 0; i < kArray.length; i++) {
        colNames.push(columnDataset[kArray[i] - (isAdd1 ? 1 : 0)] || '')
    }
    return colNames.join('')
}

export { columnDataset, radixTransform, getColumnName }
