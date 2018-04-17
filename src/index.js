/*
 * 将数字转化为百分比
 * @param val 传入的值
 * @param bit 固定小数的位数, default: 2
 */
/*export */const toPercent = (val, bit = 2) => {
  const num = Number(val);
  if(typeof val === 'boolean') {
    throw new Error('val type is boolean');
  }
  else if(isNaN(num)) {
    throw new Error('param val has an err, val is ' + val);
  }
  if(isNaN(Number(bit))) {
    throw new Error('param bit must be number');
  }
  return (num * 100).toFixed(bit) + '%';
}

/*
 * 固定数值的小数位数
 * @param val 传入的值
 * @param bit 固定小数的位数
 */
/*export */const toDecimal = (val, bit) => {
  const num = Number(val);
  if(typeof val === 'boolean') {
    throw new Error('val type is boolean');
  }
  else if(isNaN(num)) {
    throw new Error('param val has an err, val is ' + val);
  }
  if(isNaN(Number(bit))) {
    throw new Error('param bit must be number');
  }
  return num.toFixed(bit);
}

/*
 * 判断一个值得基本类型
 * @param val 传入的值
 */
/*export */const getType = (val) => {
  const string = Object.prototype.toString.call(val);
  const start = string.indexOf(' ') + 1;
  const end = string.length - 1;
  return string.slice(start, end).toLowerCase();
}

/*
 * 深度克隆
 * @param obj 要克隆的对象
 */
const deepClone = (obj) => {
  let target;
  const type = getType(obj);
  if(type === 'array') {
    target = obj.map(item => item);
  }
  else if(type === 'object') {
    target = {};
    for(const [key, val] of Object.entries(obj)) {
      target[key] = val;
    }
  }
  else {
    target = obj;
  }
  return target;
}

/*
 * 合并多个对象
 * @param 参数个数不定, 每个参数为一个对象
 */
const merge = (...args) => {
  console.log('>>> args', args);
}

/*
 * 格式化日期
 * @param date Date实例 or 数值 or 字符串数值
 */
const formatDate = date => {
  let year, month, day;
  const type = getType(date);
  if(!['date', 'string', 'number'].includes(type)) {
    throw new Error('date type must be Date instance or number or string number');
  }
  if(['string', 'number'].includes(type)) {
    date = Number(date);
    if(Number.isNaN(date)) {
      throw new Error('date value has an error' + date);
    }
    date = new Date(date);
  }
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  month = month < 10 ? ('0' + month) : month;
  day = day < 10 ? ('0' + day) : day;

  return year + '-' + month + '-' + day;
}

/*
 * 判断年份是否为闰年
 * @param year 年份
 */
const isLeapYear = year => {
  const type = getType(year);
  year = Number(year)
  if(['string', 'number'].includes(type)) {
    throw new Error('year type must be number or string number');
  }
  if(Number.isNaN(year)) {
    throw new Error('year value has an error' + year);
  }
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

/*
 * 获取浏览器版本信息
 */
const getBrowserVersion = () => {
  let browser = '';
  const ua = window.navigator.userAgent.toLowerCase();
  if(ua.includes('chrome') && ua.includes('safari') && !ua.includes('edge')) {
    browser = 'chrome';
  }
  else if(ua.includes('firefox')) {
    browser = 'firefox';
  }
  else if(ua.includes('opera')) {
    browser = 'opera';
  }
  else if(ua.includes('edge')) {
    browser = 'edge';
  }
  else if(ua.includes('safari') && !ua.includes('chrome')) {
    browser = 'safari';
  }
  else if((ua.includes('compatible') && ua.includes('msie')) || ua.includes('trident')) {
    browser = 'ie';
  }
  // 如果是 ie 浏览器则判断其版本
  if(browser === 'ie') {
    let ieVersion = 0;
    if(ua.includes('gecko') && !ua.includes('mise')) {
      const num = ua.match(/trident\/([\w.]+)/);
      ieVersion = num[1] === '7.0' ? 11 : 9;
    }
    else {
      ieVersion = parseInt(ua.match(/msie ([\d.]+)/)[1]);
    }
    browser += ieVersion;
  }
  return browser;
}