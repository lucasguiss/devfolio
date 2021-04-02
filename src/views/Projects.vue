<template>
  <div class="projects">
    <Header />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Projects',
  components: {
    Header,
  },
});
</script>
<style scoped>
.projects {
  width: 100%;
  height: 100%;
}
</style>
