import { notification } from './store.js'

function parseLegacyOptions (options) {
  return typeof options === 'number' ? { timeout: options } : options
}

export function send (message, type = 'default', options) {
  notification.set({ type, message, options: parseLegacyOptions(options) })
}

export function danger (message, options) {
  send(message, 'danger', options)
}

export function warning (message, options) {
  send(message, 'warning', options)
}

export function info (message, options) {
  send(message, 'info', options)
}

export function success (message, options) {
  send(message, 'success', options)
}
