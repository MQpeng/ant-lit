export const TitleCase = (str: string) => {
  let tmp = str.toLowerCase();

  //第一种方法
  tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1);

  //第二种方法
  // tmp = tmp.slice(0,1).toUpperCase() + tmp.slice(1)

  //第三种方法
  // tmp = tmp.substring(0,1).toUpperCase() + tmp.substring(1)

  return tmp;
};
