# gupo-xlsx-populate

## Todo

- 实现基本用法 使用简单配置导出源数据为文件
- 实现高级用法 
    + 自定义表格内容
    + 自定义表格样式
    + 提供原始库方法  
- 实现多行纵向、横向合并单元格

## options
| 参数名称                | 类型            | 描述      |
| ------------------- | ------------- | ------- |
| name                | String        | 导出的表格名称 |
| dataConfig          | Object、Array  | 数据源配置   |
| dataSource          | Array         | 数据源     |
| stripe              | Boolean       | 是否为斑马纹  |
| border              | Boolean       | 是否带有边框  |
| wrapText            | Boolean       | 是否换行    |
| rowHeight           | String、Number | 行高      |
| columnWidth         | String、Number | 列宽      |
| verticalAlignment   | String        | 单元格垂直居中 |
| horizontalAlignment | String        | 单元格水平居中 |

## dataConfig (Array)
| 参数名称     | 类型       | 描述     |
| -------- | -------- | ------ |
| label    | String   | 表头名称   |
| prop     | String   | 数据配置   |
| setValue | Function | 数据配置方法 |