import {
  isString,
  isBoolean,
  isFunction,
  isUndefined,
  isNull,
  isArray
} from '../src/index.js'

describe('Validators data_types', () => {
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true)
    })

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false)
      expect(isString(true)).toBe(false)
      expect(isString([])).toBe(false)
      expect(isString({})).toBe(false)
      expect(isString(() => {})).toBe(false)
      expect(isString(undefined)).toBe(false)
      expect(isString(null)).toBe(false)
    })
  })

  describe('isBoolean', () => {
    it('should return true for booleans', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
    })

    it('should return false for non-booleans', () => {
      expect(isBoolean('abc')).toBe(false)
      expect(isBoolean(123)).toBe(false)
      expect(isBoolean([])).toBe(false)
      expect(isBoolean({})).toBe(false)
      expect(isBoolean(() => {})).toBe(false)
      expect(isBoolean(undefined)).toBe(false)
      expect(isBoolean(null)).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => {})).toBe(true)
    })

    it('should return false for non-functions', () => {
      expect(isFunction('abc')).toBe(false)
      expect(isFunction(123)).toBe(false)
      expect(isFunction(true)).toBe(false)
      expect(isFunction([])).toBe(false)
      expect(isFunction({})).toBe(false)
      expect(isString(undefined)).toBe(false)
      expect(isString(null)).toBe(false)
    })
  })

  describe('isUndefined', () => {
    it('should return true for undefineds', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    it('should return false for non-undefineds', () => {
      expect(isUndefined('abc')).toBe(false)
      expect(isUndefined(123)).toBe(false)
      expect(isUndefined(true)).toBe(false)
      expect(isUndefined([])).toBe(false)
      expect(isUndefined({})).toBe(false)
      expect(isUndefined(() => {})).toBe(false)
      expect(isUndefined(null)).toBe(false)
    })
  })

  describe('isNull', () => {
    it('should return true for nulls', () => {
      expect(isNull(null)).toBe(true)
    })

    it('should return false for non-nulls', () => {
      expect(isNull('abc')).toBe(false)
      expect(isNull(123)).toBe(false)
      expect(isNull(true)).toBe(false)
      expect(isNull([])).toBe(false)
      expect(isNull({})).toBe(false)
      expect(isNull(() => {})).toBe(false)
      expect(isNull(undefined)).toBe(false)
    })
  })

  describe('isArray', () => {
    it('should return true for arrays', () => {
      expect(isArray([])).toBe(true)
    })

    it('should return false for non-arrays', () => {
      expect(isArray('abc')).toBe(false)
      expect(isArray(123)).toBe(false)
      expect(isArray(true)).toBe(false)
      expect(isArray({})).toBe(false)
      expect(isArray(() => {})).toBe(false)
      expect(isArray(undefined)).toBe(false)
      expect(isArray(null)).toBe(false)
    })
  })
})
