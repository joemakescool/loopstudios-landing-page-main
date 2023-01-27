<template>
  <div
      class="creations__button"
      @mouseenter="mouseEntersButton"
      @mouseleave="mouseLeavesSocialIcons"
  >
    <div class="creations__button--top"></div>
    <div class="creations__button--bottom"></div>
    <div class="creations__button--left"></div>
    <div class="creations__button--right"></div>
    <div class="creations__button--background"></div>

    <button>SEe All</button>
  </div>
</template>

<script>
import { mouseEntersButton, mouseLeavesSocialIcons } from "../javascript/buttonAnimations";

export default {
  name: "CreationsButton",
  methods: {
    mouseEntersButton,
    mouseLeavesSocialIcons
  }
  // put all animations here!
}
</script>

<style scoped>

</style>
