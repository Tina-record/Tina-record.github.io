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

  return {
    compact,
    add,
    sum,
    join,
  };
})();
