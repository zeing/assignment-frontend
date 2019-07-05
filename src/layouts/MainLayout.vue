<template>
  <div>
    <TopBar/>
    <slot></slot>
    <Footer/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'mainLayout',
  components: {
    TopBar,
    Footer
  }
}
</script>
