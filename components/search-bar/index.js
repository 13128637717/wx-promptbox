Component({
  properties: {
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '搜索提示词、场景或功能...'
    },
    focus: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onInput(event) {
      this.triggerEvent('input', { value: event.detail.value })
    },
    onConfirm(event) {
      this.triggerEvent('confirm', { value: event.detail.value })
    },
    onClear() {
      this.triggerEvent('clear')
    }
  }
})
