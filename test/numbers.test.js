import {
  isNumber,
  isU8,
  isU16,
  isU32,
  isI8,
  isI16,
  isI32
} from '../src/index.js'

describe('Validators numbers', () => {
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

  describe('isU8', () => {
    it('should return true for unsigned 8-bit integers', () => {
      expect(isU8(42)).toBe(true)
    })

    it('should return false for non-unsigned 8-bit integers', () => {
      expect(isU8(-42)).toBe(false)
      expect(isU8(256)).toBe(false)
    })
  })

  describe('isU16', () => {
    it('should return true for unsigned 16-bit integers', () => {
      expect(isU16(42)).toBe(true)
    })

    it('should return false for non-unsigned 16-bit integers', () => {
      expect(isU16(-42)).toBe(false)
      expect(isU16(65536)).toBe(false)
    })
  })

  describe('isU32', () => {
    it('should return true for unsigned 32-bit integers', () => {
      expect(isU32(42)).toBe(true)
    })

    it('should return false for non-unsigned 32-bit integers', () => {
      expect(isU32(-42)).toBe(false)
      expect(isU32(4294967296)).toBe(false)
    })
  })
  describe('isI8', () => {
    it('should return true for signed 8-bit integers', () => {
      expect(isI8(42)).toBe(true)
      expect(isI8(-42)).toBe(true)
      expect(isI8(127)).toBe(true)
      expect(isI8(-128)).toBe(true)
    })

    it('should return false for non-signed 8-bit integers', () => {
      expect(isI8(128)).toBe(false)
      expect(isI8(-129)).toBe(false)
      expect(isI8(3.14)).toBe(false)
      expect(isI8('abc')).toBe(false)
    })
  })

  describe('isI16', () => {
    it('should return true for signed 16-bit integers', () => {
      expect(isI16(42)).toBe(true)
      expect(isI16(-42)).toBe(true)
      expect(isI16(32767)).toBe(true)
      expect(isI16(-32768)).toBe(true)
    })

    it('should return false for non-signed 16-bit integers', () => {
      expect(isI16(32768)).toBe(false)
      expect(isI16(-32769)).toBe(false)
      expect(isI16(3.14)).toBe(false)
      expect(isI16('abc')).toBe(false)
    })
  })

  describe('isI32', () => {
    it('should return true for signed 32-bit integers', () => {
      expect(isI32(42)).toBe(true)
      expect(isI32(-42)).toBe(true)
      expect(isI32(2147483647)).toBe(true)
      expect(isI32(-2147483648)).toBe(true)
    })

    it('should return false for non-signed 32-bit integers', () => {
      expect(isI32(2147483648)).toBe(false)
      expect(isI32(-2147483649)).toBe(false)
      expect(isI32(3.14)).toBe(false)
      expect(isI32('abc')).toBe(false)
    })
  })
})
