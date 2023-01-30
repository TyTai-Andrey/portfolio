import { map } from 'lodash';

export const numberInPrice = (num: number | string): string => {
  const str = String(num);
  const result = [];
  const length = str.length;
  if (length <= 3) return str;
  result.push(numberInPrice(str.slice(0, length - 3)));
  result.push(str.slice(length - 3));
  return result.join(' ');
};

export const formatPhone = (value: string) => {
  const v = map(new Array(11), (_, idx) => value?.[idx] ?? '');

  let result = ``;

  if (v[0]) {
    result += `+${v[0]}`;
  }
  if (v[1]) {
    result += ` (${v[1]}`;
  }
  if (v[2]) {
    result += v[2];
  }
  if (v[3]) {
    result += v[3];
  }
  if (v[4]) {
    result += `) ${v[4]}`;
  }
  if (v[5]) {
    result += v[5];
  }
  if (v[6]) {
    result += v[6];
  }
  if (v[7]) {
    result += `-${v[7]}`;
  }
  if (v[8]) {
    result += v[8];
  }
  if (v[9]) {
    result += `-${v[9]}`;
  }
  if (v[10]) {
    result += v[10];
  }
  return result;
};
