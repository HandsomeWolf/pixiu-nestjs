// 通用的转换为布尔值的函数
export function toBoolean({ value }): boolean {
  return value === 1;
}

// 通用的转换为可选值的函数
export function toOptionalValue({ value }) {
  return value !== null ? value : undefined;
}

// 通用的转换为可选数组的函数
export function toOptionalArray({ value }) {
  return value.length !== 0 ? value : undefined;
}
