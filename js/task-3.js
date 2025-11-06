'use strict';
function getElementWidth(content, padding, border) {
  const newContent = Number.parseFloat(content);
  const newPadding = Number.parseFloat(padding);
  const newBorder = Number.parseFloat(border);
  const totalWidth =
    Number(newContent) + Number(newPadding) * 2 + Number(newBorder) * 2;
  return totalWidth;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
