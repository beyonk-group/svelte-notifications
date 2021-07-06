import { notification } from './store.js'

function parseLegacyOptions (options) {
  return typeof options === 'number' ? { timeout: options } : options
}

export function send (message, type = 'default', options) {
  notification.set({ type, message, options: parseLegacyOptions(options) })
}

export function danger (msg, options) {
  send(msg, 'danger', options)
}

export function warning (msg, options) {
  send(msg, 'warning', options)
}

export function info (msg, options) {
  send(msg, 'info', options)
}

export function success (msg, options) {
  send(msg, 'success', options)
}
