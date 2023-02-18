function arrayToList(array) {
  var list = null;

  for (i = array.length - 1; i >= 0; i--) list = { value: array[i], rest: list };

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node; node = node.rest) array.push(node.value);

  return array;
}

function prepend(value, rest) {
  return { value: value, rest: rest };
}

function nth(list, n) {
  if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}
