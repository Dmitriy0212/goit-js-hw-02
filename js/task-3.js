'use strict';
function getElementWidth(content, padding, border) {
  let newContent = Number.parseFloat(content);
  let newPadding = Number.parseFloat(padding);
  let newBorder = Number.parseFloat(border);
  let totalWidth =
    Number(newContent) + Number(newPadding) * 2 + Number(newBorder) * 2;
  return totalWidth;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

console.log(Number(null));

