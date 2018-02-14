'use strict'

const underTest = require('../bot')

describe('Chatbot', () => {
  it('should export a function', () => {
    expect(typeof underTest).toBe('function')
  })

  it('should return "Hello from Spaceman bot" text', () => {
    expect(underTest()).toBe('Hello from Spaceman bot')
  })
})
