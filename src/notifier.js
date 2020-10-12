import { notification } from './store.js'

export const send = (message, options) =>
  notification.set({ message, options })

export const danger = (msg, options) =>
  send(msg, { type: 'danger', ...options })

export const warning = (msg, options) =>
  send(msg, { type: 'warning', ...options })

export const info = (msg, options) =>
  send(msg, { type: 'info', ...options })

export const success = (msg, options) =>
  send(msg, { type: 'success', ...options })
