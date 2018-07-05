export default {
  data () {
    return {
      version: window.version,
      isDevelop: false
    }
  },
  mounted () {
    var developMode = localStorage.getItem('developMode')
    if (developMode == 'true') {
      this.isDevelop = true
    }
  }
}
