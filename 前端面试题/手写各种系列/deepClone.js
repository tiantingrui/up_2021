// 深拷贝实现

const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = (obj, hash = new WeakMap()) => {
  if (obj.constructor === Date) {
    // 日期对象则返回一个新的日期对象
    return new Date(obj);
  }
  if (obj.constructor === RegExp) {
    // 正则对象则返回一个新的正则对象
    return new RegExp(obj);
  }
  // 如果循环引用了就要 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj);
  // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  // 继承原型链
  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] =
      isComplexDataType(obj[key]) && typeof obj[key] !== "function"
        ? deepClone(obj[key], hash)
        : obj[key];
  }
  return cloneObj;
};
