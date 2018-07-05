export default {
  data () {
    return {
      common: common,
      defaultOpenedMenus: ['1'],
      uniqueOpened: true   
    }
  },
  methods: {
    hasPermission (permissions) {
      if (typeof (this.$account.roles) === 'undefined' || this.$account.roles.length == 0) {
        return false
      }
      let hasPermission = this.$account.roles
        .some(r => permissions.indexOf(r) > -1)
      return hasPermission
    },
    handleopen (key, keyPath) {
    },
    handleclose (key, keyPath) {
    },
    handleselect(key, keyPath) {
    }

  }
}
