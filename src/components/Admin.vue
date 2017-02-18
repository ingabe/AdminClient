<template>
    <div class="admin">
      <div class="leftPane">
        <router-link :to="{ name: 'Home'}" active-class="active">
          <div class="logoContainer"></div>
        </router-link>
        <router-link :to="{ name: 'TenantResources'}" active-class="active">
          <div class="tenantResources"></div>
        </router-link>
        <router-link :to="{ name: 'ChangePassword'}" active-class="active">
          <div class="changePassword"></div>
        </router-link>
      </div>
      <div class="adminMain"> 
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Admin'
}

</script>

<style lang="scss" scoped>

  .admin {
    width: 100%;

    .leftPane {
      position: absolute;
      top: 0;
      left:0;
      width: 50px;
      height: 100%;
      background-color: black;
    
      .logoContainer{
        margin: 10px 5px 40px 5px;
        position: relative;
        width: 40px;
        height: 40px;
        background-image: url(../assets/logo.png);
        background-size: 35px 35px;
        background-repeat: no-repeat;
      }

      .tenantResources{
        margin: 10px 5px 40px 5px;
        width: 40px;
        height: 40px;
        background-image: url(../assets/tenantResources.png);
        background-size: 35px 35px;
        background-repeat: no-repeat;
      }

      .changePassword{
        margin: 10px 5px 40px 5px;
        width: 40px;
        height: 40px;
        background-image: url(../assets/changePassword.png);
        background-size: 35px 35px;
        background-repeat: no-repeat;
      }
    }

    .adminMain {
      position: absolute;
      top: 0;
      left: 50px;    
      width: 100%;
      height: 100%;
    }
  }

</style>
