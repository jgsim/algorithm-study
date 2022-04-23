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
