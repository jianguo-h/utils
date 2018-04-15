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