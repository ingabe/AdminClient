<template>  
    <div>
        <nav class="navbar navbar-default">
            <div>
                <ul class="nav navbar-nav">
                    <router-link :to="{ name: 'Groups'}" active-class="active">
                        <div class="barButton">Groups ({{groups.length}})</div>
                    </router-link>
                    <router-link :to="{ name: 'Agents'}" active-class="active">
                        <div class="barButton">Agents</div>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    
import {mapGetters} from 'vuex';
        
export default {
    computed  : {
        ...mapGetters(['groups'])
    }
}
</script>

<style lang="scss" scoped>  

    .barButton {
        float: left;
        padding: 15px 30px 10px 30px;            
    }

</style>

<!--<template> 
    <div>
        <div class="upperBar">        
            <router-link :to="{ name: 'Groups'}" active-class="active">
                <div class="barButton">Groups</div>
            </router-link>
            <router-link to="{ name: 'Agents'}" active-class="active"> 
                <div class="barButton">Agents</div>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'NavPane',
  data () {
    return {
      message: 'NavPane'
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>    

    .upperBar {
        width: 100%;
        height: 100%;
        background-color: grey;

        .barButton {
            float: left;
            padding: 15px 30px 10px 30px;            
        }
    }

</style>-->
