/**
 * 数据格式转换
 */
const dataFormat = (data) => {
    if (data === null || data === undefined) return ''
    if (Array.isArray(data)) return data.join('、')
    return data.toString()
}

export default dataFormat
