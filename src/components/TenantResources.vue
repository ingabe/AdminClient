<template> 
    <div class="container">        
        <div class="upperNavBar"> 
            <nav-pane></nav-pane>
        </div>
        <div class="contentPane">
            <loading-component v-if="loading"></loading-component>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import NavPane from './NavPane'
import loadingComponent from './basicComponents/loading.component'

export default {
  name: 'TenantResources',
  data () {
    return {
      message: 'TenantResources'
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  components: {
    NavPane,
    loadingComponent
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
            right: 0;
            bottom: 0;
        }
    }
</style>
