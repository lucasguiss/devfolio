<template>
  <div class="btn" @click="redirect">
    <div class="text">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    redirect(): void {
      this.$router.push({
        path: this.path,
      });
    },
  },
});
</script>
<style>
.btn {
  display: inline-block;
  border: 2px solid;
  border-color: #875aed;
  width: auto;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  background-color: #f5f5f5;
  min-width: 100px;
}

.text {
  display: inline-block;
  color: #875aed;
  padding: 5px;
}

.text:hover {
  color: #48298f;
}
</style>
