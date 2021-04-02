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
          path: '',
        } as ButtonProps,
        {
          text: 'header.buttons.projects',
          path: '',
        } as ButtonProps,
        {
          text: 'header.buttons.contact',
          path: '',
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
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn-space {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}

.buttons {
  float: left;
}

.internationalization {
    float: right;
    padding: 5px;
}
</style>
