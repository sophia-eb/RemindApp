export const list2str = cityList => {
  const array = [];
  for (let i = 0; i < cityList.length; i++) {
    if (array.indexOf(cityList[i]) === -1) {
      array.push(cityList[i]);
    }
  }
  return array.join(",");
};

export const str2list = str => {
  const res = str?.split(",");
  return res || [];
};
