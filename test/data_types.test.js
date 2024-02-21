import {
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isArray
} from '../src/index.js'

describe('Validators', () => {
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
    })
  })

  describe('isNumber', () => {
    it('should return true for numbers', () => {
      expect(isNumber(42)).toBe(true)
      expect(isNumber(3.14)).toBe(true)
    })

    it('should return false for non-numbers', () => {
      expect(isNumber('abc')).toBe(false)
      expect(isNumber(true)).toBe(false)
      expect(isNumber([])).toBe(false)
      expect(isNumber({})).toBe(false)
      expect(isNumber(() => {})).toBe(false)
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
    })
  })

  describe('isFunction', () => {
    it('should return true for functions', () => {
      expect(isFunction(() => {})).toBe(true)
    })

    it('should return false for non-functions', () => {
      expect(isFunction('abc')).toBe(false)
      expect(isFunction(123)).toBe(false)
      expect(isFunction([])).toBe(false)
      expect(isFunction({})).toBe(false)
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
    })
  })
})
