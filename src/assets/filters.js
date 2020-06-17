import Moment from "moment";

/**
 *  转小写
 * @param value
 * @returns {string}
 */
let lower = value => value.toLowerCase();

/**
 * 转大写
 * @param value
 * @returns {string}
 */
let upper = value => value.toUpperCase();

/**
 * 日期格式化
 * @param data
 * @param format
 * @returns {string}
 */
let dateFormat = (data, format) => {
  return Moment(data).format(format);
};

export { lower, upper, dateFormat };
