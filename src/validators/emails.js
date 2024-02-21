export const isEmail = value => {
  const pattern = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
  return pattern.test(value)
}
