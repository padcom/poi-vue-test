import Vue from 'vue'

import App from '@/App.vue'

describe('Component: App', () => {
  let app = null

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
    app = new Vue({
      el: '#app',
      render: h => h(App)
    })
  })

  it('will work', () => {
    const header = document.querySelector('h1')
    header.click()

    return Vue.nextTick().then(() => {
      expect(header.innerText).to.equal('Clicked!!!')
    })
  })
})
