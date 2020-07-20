import Moment from "moment";

/**
 *  转小写
 */
let lower = value => value.toLowerCase();

/**
 * 转大写
 */
let upper = value => value.toUpperCase();

/**
 * 日期格式化
 */
let dateFormat = (data, format) => {
  return Moment(data).format(format);
};

export { lower, upper, dateFormat };
