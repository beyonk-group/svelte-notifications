/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    package: {
      exports: filepath => {
        return filepath === 'index.js' || filepath.endsWith('.json')
      }
    }
  }
}

export default config
