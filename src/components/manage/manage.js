import asideComp from '@/components/common/aside/aside.vue'
import headerComp from '@/components/common/header/header.vue'
import mainComp from '@/components/common/main/main.vue'
export default {
  components: {
    asideComp,
    headerComp,
    mainComp
  },
  data () {
    return {
      childMes: ''
    }
  },
  methods: {
    valueUp (mes) {
      this.childMes = mes
    },
    listenChild (mes) {
      this.childMes = mes
    }
  }
}
