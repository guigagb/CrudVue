export default {
  twoWay: true, // this transformation applies back to the vm
  bind: function () {
    this.handler = function () {
      this.set('1')
      // this.set(this.el.value.split('/').reverse().join('/'))
    }.bind(this)
    this.el.addEventListener('input', this.handler)
  },
  unbind: function () {
    this.el.removeEventListener('input', this.handler)
  },
}
