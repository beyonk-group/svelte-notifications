import { notification } from './store.js'

export const send = (message, type = 'default', timeout) =>
  notification.set({ type, message, timeout })

export const danger = (msg, timeout) =>
  send(msg, 'danger', timeout)

export const warning = (msg, timeout) =>
  send(msg, 'warning', timeout)

export const info = (msg, timeout) =>
  send(msg, 'info', timeout)

export const success = (msg, timeout) =>
  send(msg, 'success', timeout)
