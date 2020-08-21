export default {
  // 数据字典
  dictionaryData: {
    // 查询列表
    list: '/form_manage/api/dictionary/listDictionaryDataByClassificationId',
    // 插入数据
    insert: '/form_manage/api/dictionary/insertDictionary',
    // 按照ID删除
    deleteById: '/form_manage/api/dictionary/deleteDictionaryById',
    // 更新
    updateById: '/form_manage/api/dictionary/updateDictionary',
    // 按照ID查一条
    getById: '/form_manage/api/dictionary/getDictionaryDataById'
  },
  // 数据字典分类
  dictionaryClassification: {
    // 查询列表
    list: '/form_manage/api/dictionary/listDictionaryClassification',
    // 查询树
    listTree: '/form_manage/api/dictionary/listDictionaryClassificationTree',
    // 插入数据
    insert: '/form_manage/api/dictionary/insertDictionaryClassification',
    // 按照ID获取
    getById: '/form_manage/api/dictionary/getDictionClassificationById',
    // 按照ID删除
    deleteById:
      '/form_manage/api/dictionary/deleteDictionaryClassificationById',
    // 更新一条数据
    updateById: '/form_manage/api/dictionary/updateDictionClassification'
  },
  tableInfo: {
    listTableInfoData: '/form_manage/api/table/listTableInfoData',
    listTables: '/form_manage/api/table/listTableInfos',
    listColumnInfos: '/form_manage/api/table/listColumnInfos'
  },
  // 常用字段
  commonlyUsedField: {
    insert: '/form_manage/api/commonly/insertCommonlyUsedField',
    select: '/form_manage/api/commonly/listCommonlyUsedField',
    delete: '/form_manage/api/commonly/deleteCommonlyUsedFieldById'
  }

}
