<template> 
  <div>
    <h1>{{message}}</h1>
    <form novalidate @submit.stop.prevent="submit" class="changePasswordForm">
      
      <md-input-container>
        <label>{{ $t('changePassword.userName') }}</label>
        <md-input placeholder="User Name" v-model="userName"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>{{ $t('changePassword.oldPassword') }}</label>
        <md-input placeholder="Old Password" v-model="oldPassword"></md-input>
      </md-input-container>
      
      <md-input-container>
        <label>{{ $t('changePassword.newPassword') }}</label>
        <md-input placeholder="New Password" v-model="newPassword"></md-input>
      </md-input-container>

      <md-button class="md-raised md-primary">{{ $t('changePassword.changePassword') }}</md-button>

    </form>
  </div>
</template>

<script>

export default {
  name: 'ChangePassword',
  data () {
    return {
        message: this.$t("changePassword.changePassword")
    }
  },
  props: {
    userName: String,
    oldPassword: String,
    newPassword: String
  }
    }

</script>

<style lang="scss" scoped>  

  .changePasswordForm {
        margin:auto;
        width: 400px;
  }

</style>