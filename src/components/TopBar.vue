<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
<!--    <b-navbar-brand href="/">Frontend</b-navbar-brand>-->
    <router-link tag="b-navbar-brand" to="/">Frontend</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-nav>
<!--      <router-link tag="b-nav-item" :to="{ name: 'about'}">Resume</router-link>-->
      <router-link tag="b-nav-item" :to="{ name: 'scg'}">SCG</router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>

</style>
