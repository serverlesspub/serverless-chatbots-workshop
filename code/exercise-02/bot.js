'use strict'

module.exports = (message, log = console.log) => {
  log(message)
  return 'Hello from Spaceman bot' + ((message && message.text) ? `, you sent "${message.text}"` : '')
}

