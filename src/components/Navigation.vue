<template>
  <ul class="navigation navigation--footer">
    <li
        @mouseenter="mouseEnters"
        @mouseleave="mouseLeaves"
    >
      About
      <div class="bottom"></div>
    </li>

    <li
        @mouseover="mouseEnters"
        @mouseleave="mouseLeaves"
    >
      Careers
      <div class="bottom"></div>
    </li>

    <li
        @mouseover="mouseEnters"
        @mouseleave="mouseLeaves"
    >
      Events
      <div class="bottom"></div>
    </li>

    <li
        @mouseover="mouseEnters"
        @mouseleave="mouseLeaves"
    >
      Products
      <div class="bottom"></div>
    </li>

    <li
        @mouseover="mouseEnters"
        @mouseleave="mouseLeaves"
    >
      Support
      <div class="bottom"></div>
    </li>
  </ul>
</template>

<script>
import { mouseEnters, mouseLeaves } from "../javascript/navAnimations";

export default {
name: "Navigation",
  methods: {
    mouseEnters,
    mouseLeaves
  }
}
</script>

<style scoped>

li {
position: relative;
}

.bottom {
  position: absolute;
  background-color: aliceblue;
  height: .3rem;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 1rem;
  align-self: center;
}

</style>
