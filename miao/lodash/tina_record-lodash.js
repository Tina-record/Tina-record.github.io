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

  return {
    compact,
    add,
    sum,
  };
})();
