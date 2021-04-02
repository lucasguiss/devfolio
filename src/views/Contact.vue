<template>
  <div class="contact">
    <Header />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Contact',
  components: {
    Header,
  },
});
</script>
<style scoped>
.contact {
  width: 100%;
  height: 100%;
}
</style>
