const separateWords = (str) => {
  return str.split(/\s+/);
};
console.log(separateWords("Hello world"));

export const TakeFirstLetterOfStringOfArray = (array) =>
  array.map((item) => item[0]);

console.log(TakeFirstLetterOfStringOfArray(["abc", "def", "ghi"]));

export const Capitalize = (str) => str[0].toUpperCase() + str.slice(1);
console.log(Capitalize("abc asasd"));

export const CapitalizeAll = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.substr(1).toLowerCase()
  );

console.log(CapitalizeAll("abc asasd"));
