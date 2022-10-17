const tabs = num => {
  let tabsString = '';

  Array(num)
    .fill('  ')
    .forEach(tab => {
      tabsString += tab;
    });

  return tabsString;
};

const getNestedNumbersTags = numbers => {
  if (numbers.length === 0) return '';

  let result = '';

  numbers.forEach((num, index) => {
    if (isNaN(parseInt(num))) result += '';

    result += index < numbers.length - 1 ? `<${num}>\n${tabs(num)}` : `<${num}>`;
  });

  numbers.reverse().forEach(num => {
    if (isNaN(parseInt(num))) result += '';

    result += `\n${tabs(num - 1)}</${num}>`;
  });

  console.log(result);
};

getNestedNumbersTags([1, 2, 3]);
