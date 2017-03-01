<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  name: 'Agents',
  data () {
    return {
        message: this.$t("message.agents")
    }
  }
}
</script>
