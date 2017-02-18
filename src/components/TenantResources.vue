<template> 
    <div class="container">        
        <div class="upperNavBar"> 
            <nav-pane></nav-pane>
        </div>
        <div class="contentPane">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavPane from './NavPane'

export default {
  name: 'TenantResources',
  data () {
    return {
      message: 'TenantResources'
    }
  },
  components: {
    NavPane
  }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;

        .upperNavBar{
            position: absolute;
            top: 0;
            left: 0;
            height: 45px;
            width: 100%;
            background-color: grey;
        }

        .contentPane{
            position: absolute;
            top: 45px;
            left: 0;
            height: 100%;
            width: 100%;
        }
    }
</style>
