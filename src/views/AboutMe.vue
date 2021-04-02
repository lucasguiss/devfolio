<template>
  <div class="about">
    <Header />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'AboutMe',
  components: {
    Header,
  },
});
</script>
<style scoped>
.about {
  width: 100%;
  height: 100%;
}
</style>
