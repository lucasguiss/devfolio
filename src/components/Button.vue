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
  border-color:#d6ba5e;
  width: auto;
  height: 30px;
  border-radius: 2px;
  cursor: pointer;
  background-color: #3F3F3F;
  min-width: 100px;
}

.text {
  display: inline-block;
  color: #d6ba5e;
  padding: 5px;
}

.text:hover {
  color: #ffd447;
}
</style>
