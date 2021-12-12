<template>
  <div>Current user is: {{ user }}</div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    console.log('beforeCreate')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  setup() {
      console.log('setup')
  },
  mounted() {
    console.log('mounted')
  },
  data() {
    return {
      user: 'John Doe'
    }
  }
}
</script>
