Component({
  properties: {
    prompt: {
      type: Object,
      value: {}
    },
    showHeat: {
      type: Boolean,
      value: true
    },
    timeText: {
      type: String,
      value: ''
    },
    brief: {
      type: Boolean,
      value: false
    },
    showMore: {
      type: Boolean,
      value: false
    },
    plain: {
      type: Boolean,
      value: false
    },
    last: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onTap() {
      const prompt = this.data.prompt || {}
      this.triggerEvent('select', { id: prompt.id || '' })
    },
    onMore() {
      const prompt = this.data.prompt || {}
      this.triggerEvent('more', { id: prompt.id || '' })
    }
  }
})
