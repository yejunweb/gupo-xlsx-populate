# gupo-xlsx-populate

基于[xlsx-populate](https://github.com/dtjohnson/xlsx-populate)进行封装，通过简单的调用方式实现导出Excle文件

[![npm package](https://img.shields.io/npm/v/gupo-xlsx-populate.svg)](https://npmjs.org/package/gupo-xlsx-populate)
[![npm downloads](http://img.shields.io/npm/dm/gupo-xlsx-populate.svg)](https://npmjs.org/package/gupo-xlsx-populate)

## 安装

### yarn
```
yarn add gupo-xlsx-populate
```
### npm
```
npm install gupo-xlsx-populate
```

## 举个栗子

```
import ExportExcel from "gupo-xlsx-populate";

ExportExcel({
  dataConfig: {
    rule_id: "规则ID",
    name: "规则名称",
    des: "规则描述",
  },
  dataSource: [
    {
      rule_id: 4045,
      name: "被申请机构名称是否存在验证",
      des: "被申请机构名称是否存在验证",
    },
    {
      rule_id: 4046,
      name: "被申请机构名称是否null验证",
      des: "被申请机构名称是否null验证",
    },
  ],
  stripe: true,
  border: true,
  rowHeight: 30,
  columnWidth: 30,
});
```

## API参考

| 参数名称                | 类型           | 描述                                       |
| ------------------- | ------------ | ---------------------------------------- |
| name                | String       | 导出的表格名称，默认时间戳                            |
| dataConfig          | Object、Array | 数据源配置                                    |
| dataSource          | Array        | 数据源                                      |
| stripe              | Boolean      | 是否为斑马纹，默认`'false'`                       |
| border              | Boolean      | 是否带有边框，默认`'false'`                       |
| wrapText            | Boolean      | 是否换行，默认`'false'`                         |
| rowHeight           | Number       | 行高，默认自适应                                 |
| columnWidth         | Number       | 列宽，默认自适应                                 |
| verticalAlignment   | String       | 单元格垂直居中，可选值： `'top'`, `'center'`, `'bottom'`, `'justify'`, `'distributed'`，默认`'center'` |
| horizontalAlignment | String       | 单元格水平居中，可选值： `'left'`, `'center'`, `'right'`, `'fill'`, `'justify'`, `'centerContinuous'`, `'distributed'`，默认`'left'` |

### dataConfig[Array]
| 参数名称     | 类型       | 描述                                       |
| -------- | -------- | ---------------------------------------- |
| label    | String   | 表头名称                                     |
| prop     | String   | 数据配置                                     |
| setValue | Function | 数据配置方法                                   |
| ...      | ...      | 支持传入xlsx-populate所支持的样式显示，[参考文档](https://github.com/dtjohnson/xlsx-populate/blob/master/README.md#style-reference) |