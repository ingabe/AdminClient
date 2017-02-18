import Vue from 'vue'
import Admin from 'src/components/Admin'

describe('Admin.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Admin)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.Admin h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
