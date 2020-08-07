/**
 * 用于统一存储各种下拉框的值
 */
export default {
  // 字段数据类型下拉框的枚举值
  dataType: [
    { fieldType: 'varchar', typeTitle: '字符串' },
    { fieldType: 'int', typeTitle: '整数' },
    { fieldType: 'decimal', typeTitle: '小数' },
    { fieldType: 'datetime', typeTitle: '时间' },
    { fieldType: 'text', typeTitle: '长字符串' }
  ]
}
