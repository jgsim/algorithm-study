exports.ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

exports.linkConcat = (node) => {
  let str = "";
  while (node) {
    str += node.val;
    node = node.next;
  }

  return str;
};

exports.arrayResult = (array) => {
  if (!Array.isArray(array)) return "";
  return JSON.stringify(array);
};
