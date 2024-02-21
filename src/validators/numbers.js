import { range } from '../utils/index.js'

export const isNumber = value => typeof value === 'number'

export const isU8 = number => range(number, 0, 255)
export const isU16 = number => range(number, 0, 65535)
export const isU32 = number => range(number, 0, 4294967295)

export const isI8 = number => range(number, -128, 127)
export const isI16 = number => range(number, -32768, 32767)
export const isI32 = number => range(number, -2147483648, 2147483647)
