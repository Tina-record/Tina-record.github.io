var tina_record = (function () {
  function compact(ary) {
    let result = [];
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i]);
      }
    }
    return result;
  }

  function add(augend, addend) {
    return augend + addend;
  }

  function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }

  function join(array, string) {
    let str = String(string);
    let result = "";
    for (let i = 0; i < array.length - 1; i++) {
      result += array[i] + str;
    }
    return (result += array[array.length - 1]);
  }

  function indexOf(array, value, startIndex = 0) {
    for (let i = startIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }

  function lastIndexOf(array, value, startIndex = array.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }

  function slice(array, startIndex, endIndex) {
    let result = [];
    if (startIndex < 0) return (startIndex += array.length);
    if (endIndex < 0) return (endIndex += array.length);
    for (let i = startIndex; i < endIndex; i++) {
      result.push(array[i]);
    }
    return result;
  }

  function identity(value) {
    return value;
  }

  function map(collection, mapper = identity) {
    let result = [];
    if (collection.constructor == Array || collection.constructor == Object) {
      for (let key in collection) {
        result.push(mapper(collection[key], key, collection)); // 对于对象，分别为：属性值，属性名称，对象；对于数组，分别为：元素，下标(索引)，数组
      }
    } else {
      return "第一个参数类型要求为：Aarray 和 Object";
    }
    return result;
  }

  function groupBy(array, predicate) {
    var result = {};
    for (let i = 0; i < array.length; ++i) {
      let key = predicate(array[i], i, array);
      if (!Array.isArray(result[key])) {
        result[key] = [];
      }
      result[key].push(array[i]);
    }
    return result;
  }

  return {
    compact,
    add,
    sum,
    join,
    indexOf,
    lastIndexOf,
    slice,
    identity,
    map,
    groupBy,
  };
})();
