import { isEmail } from '../src/index.js'

describe(' Validators emails', () => {
  describe('isEmail', () => {
    it('should return true for emails', () => {
      expect(isEmail('c0ntact100opps@gmail.com')).toBe(true)
    })

    it('should return false for non-emails', () => {
      expect(isEmail('abc')).toBe(false)
      expect(isEmail(123)).toBe(false)
      expect(isEmail(true)).toBe(false)
      expect(isEmail([])).toBe(false)
      expect(isEmail({})).toBe(false)
      expect(isEmail(() => {})).toBe(false)
      expect(isEmail(undefined)).toBe(false)
      expect(isEmail(null)).toBe(false)
    })
  })
})
