export const isString = value => typeof value === 'string'
export const isBoolean = value => typeof value === 'boolean'
export const isFunction = value => typeof value === 'function'
export const isUndefined = value => typeof value === 'undefined'

export const isNull = value => value === null
export const isArray = value => Array.isArray(value)

console.log(isUndefined(undefined))
