<template>
  <div>
      <h1>{{message}}</h1>
  </div>
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            message: this.$t("message.homePage")
        }
    },
    components: {
    }
}

</script>
