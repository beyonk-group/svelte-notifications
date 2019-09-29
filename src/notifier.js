import { notification } from './store.js'

export function send (message, type = 'default', timeout) {
  notification.set({ type, message, timeout })
}

export function danger (msg, timeout) {
  send(msg, 'danger', timeout)
}

export function warning (msg, timeout) {
  send(msg, 'warning', timeout)
}

export function info (msg, timeout) {
  send(msg, 'info', timeout)
}

export function success (msg, timeout) {
  send(msg, 'success', timeout)
}