<template>
  <div>
      <transition name="fade">
          <h2 v-if="show">hello world</h2>
      </transition>
      <button @click="show = !show">button</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(){
        const show = ref(false);

        return{
            show
        }
    }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease-in;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 2s ease-out;
}
</style>