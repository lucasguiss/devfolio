<template>
  <div class="header">
    <div class="buttons">
      <div class="btn-space" v-for="button in buttons" :key="button.text">
        <Button :text="$t(button.text)" :path="button.path" />
      </div>
    </div>
    <div class="internationalization">
        <Internationalization/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import Internationalization from '@/components/Internationalization.vue';
import { ButtonProps } from '@/types';

export default defineComponent({
  name: 'Header',
  components: {
    Button,
    Internationalization,
  },
  data() {
    return {
      buttons: [
        {
          text: 'header.buttons.about',
          path: '/about-me',
        } as ButtonProps,
        {
          text: 'header.buttons.projects',
          path: '/projects',
        } as ButtonProps,
        {
          text: 'header.buttons.contact',
          path: '/contact',
        } as ButtonProps,
      ] as Array<ButtonProps>,
    };
  },
});
</script>
<style scoped>
.header {
  background-color: #202020;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
}

.btn-space {
  display: inline-block;
  padding-left: 20px;
}

.buttons {
  float: left;
}

.internationalization {
    float: right;
    padding: 5px;
}
</style>
