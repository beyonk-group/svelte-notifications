<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Notifications

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-notifications.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-notifications)

Svelte Notifications component

* v3 compatible, but pending docs update!

## Demo

[Svelte Notifications Demo](https://svelte.technology/repl?version=2.15.2&gist=381a8e97686c28ccface39c3f005116e)

## Usage

### To use within a Svelte application:

```bash
npm i -D @beyonk/svelte-notifications
```

```js
import Notifications from '@beyonk/svelte-notifications'

export default {
	components: {
    Notifications
  }
}
```

## Usage

```jsx
<Notifications ref:notifications />

<script>
  import Notifications from '@beyonk/svelte-notifications'

  export default {
    methods: {
      notify () {
        const { notifications } = this.refs
        const message = 'bad things!'
        const displayTimeMs = 7000
        notifications.danger(message, displayTimeMs)
      }
    },

    components: {
      Notifications
    }
  }
</script>
```

You can call multiple types of notification:

```js
notifications.show(message, displayTimeMs)
notifications.danger(message, displayTimeMs),
notifications.warning(message, displayTimeMs),
notifications.info(message, displayTimeMs),
notifications.success(message, displayTimeMs)
```

and you can customise the colours:

```jsx
<Notifications ref:notifications {timeout} {themes} />

<script>
  import Notifications from '@beyonk/svelte-notifications'

  export default {
    data () {
			return {
        timeout: 10000, // set a default timeout
				themes: { // These are the defaults
					danger: '#bb2124',
					success: '#22bb33',
					warning: '#f0ad4e',
					info: '#5bc0de',
					default: '#aaaaaa' // relates to simply '.show()'
				}
			}
		},

    methods: {
      notify () {
        const { notifications } = this.refs
        const message = 'bad things!'
        const displayTimeMs = 7000
        notifications.danger(message, displayTimeMs)
      }
    },

    components: {
      Notifications
    }
  }
</script>
```

### To use within a regular JS application:

```jsx
<div id="notifications"></div>

import Notifications from '@beyonk/svelte-notifications'

const notifications = new Notifications({
  target: document.getElementById('#notifications'),
  data: {
    // any of the configuration from above
  }
})

notifications.danger('oh no!', 7000)
```

## Credits

* Original code by [Antony Jones](https://github.com/antony)
* Animation and performance improvements by jg.