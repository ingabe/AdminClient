<template> 
  <div>
    <h1>{{message}}</h1>
    <form novalidate @submit.stop.prevent="submit">
      
      <md-input-container>
        <label>User Name</label>
        <md-input placeholder="User Name"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>Old Password</label>
        <md-input placeholder="Old Password"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>New Password</label>
        <md-input placeholder="New Password"></md-input>
      </md-input-container>

    </form>
  </div>
</template>

<script>
import VueMaterial from 'vue-material'

export default {
  name: 'ChangePassword',
  data () {
    return {
      message: 'ChangePassword',
      initialValue: 'My initial value'
    }
  },
  components: {
    VueMaterial
  }
}
</script>
