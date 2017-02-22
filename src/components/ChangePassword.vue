<template> 
  <div>
    <h1>{{message}}</h1>
    <form novalidate @submit.stop.prevent="submit" class="changePasswordForm">
      
      <md-input-container>
        <label>User Name</label>
        <md-input placeholder="User Name" v-model="userName"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>Old Password</label>
        <md-input placeholder="Old Password" v-model="oldPassword"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>New Password</label>
        <md-input placeholder="New Password" v-model="newPassword"></md-input>
      </md-input-container>

      <md-button class="md-raised md-primary">Change Password</md-button>

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
  props: {
    userName: String,
    oldPassword: String,
    newPassword: String
  },
  components: {
    VueMaterial
  }
}
</script>

<style lang="scss" scoped>  

    .changePasswordForm {
         margin:auto;
         width: 400px;
    }

</style>