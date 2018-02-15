'use strict'

const underTest = require('../bot')

describe('Chatbot', () => {
  it('should export a function', () => {
    expect(typeof underTest).toBe('function')
  })

  it('should return greeting message with imput text', () => {
    expect(underTest({ text: 'text' }, () => {})).toBe('Hello from Starman bot, you sent "text"')
    expect(underTest({ text: '😀' }, () => {})).toBe('Hello from Starman bot, you sent "😀"')
    expect(underTest({ text: 'Some slightly longer text' }, () => {})).toBe('Hello from Starman bot, you sent "Some slightly longer text"')
  })

  it('should return just greeting if message text is not provided or empty', () => {
    expect(underTest({}, () => {})).toBe('Hello from Starman bot')
    expect(underTest({ text: '' }, () => {})).toBe('Hello from Starman bot')
  })

  it('should log first argument', () => {
    const consoleMock = jasmine.createSpyObj('consoleMock', {
      log: () => {}
    })

    underTest({ text: 'hello' }, consoleMock.log)
    expect(consoleMock.log).toHaveBeenCalledWith({ text: 'hello' })
  })
})
