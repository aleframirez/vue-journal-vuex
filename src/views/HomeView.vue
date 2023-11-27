<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDayBook" class="btn btn-primary">asdf</button>
    <button @click="goToDayBook" class="btn btn-secondary">asdf</button>
    <button @click="goToDayBook" class="btn btn-success">asdf</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goToDayBook() {
        this.$router.push({ name: 'no-entry'})
      }
    }
  }
</script>
