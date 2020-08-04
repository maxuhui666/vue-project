import Moment from 'moment'

/**
 *  转小写
 */
const lower = value => value.toLowerCase()

/**
 * 转大写
 */
const upper = value => value.toUpperCase()

/**
 * 日期格式化
 */
const dateFormat = (data, format) => {
  return Moment(data).format(format)
}

export { lower, upper, dateFormat }
