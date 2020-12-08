var tina = function () {
  function compact(ary) {
    let result = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

  function add(augend, addend) {
    return augend + addend;
  }

  return {
    compact,
    add,
  }
}()
