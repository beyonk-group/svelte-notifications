
import { notification } from './store.js'
import { tick } from 'svelte'

async function toaster (node, sessionKey) {
  const unsubscribe = notification.subscribe(value => {
    if (!value) { return }
    node.dispatchEvent(
      new CustomEvent('notify', { detail: value })
    )
    notification.set()
  })

  await tick()
  try {
    const existing = JSON.parse(
      sessionStorage.getItem(sessionKey)
    )
    for (const n of existing) {
      notification.set(n)
    }
  } catch (e) {

  } finally {
    sessionStorage.removeItem(sessionKey)
  }

  return {
    destroy () {
      unsubscribe()
    }
  }
}

export {
  toaster
}
