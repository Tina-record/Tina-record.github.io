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

  function indexOf(array, valule, startIndex = 0) {
    for (let i = startIndex; i < array.length; i++) {
      if (array[i] == valule) {
        return i;
      }
    }
    return -1;
  }

  function lastIndexOf(array, valule, startIndex = array.length - 1) {
    for (let i = startIndex; i >= 0; i--) {
      if (array[i] == valule) {
        return i;
      }
    }
    return -1;
  }
  function slice(array, startIndex, endIndex) {
    let result = [];
    for (let i = startIndex; i < endIndex; i++) {
      result.push(array[i]);
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
  };
})();
