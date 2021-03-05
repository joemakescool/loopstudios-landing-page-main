<template>
  <div class="home">
<!--    maybe playce these into a grid witha grid gap-->
    <TheHeader></TheHeader>
    <TheAbout></TheAbout>
    <TheCreations></TheCreations>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/layout/TheHeader";
import TheAbout from "@/components/TheAbout";
import TheCreations from "@/components/TheCreations";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheAbout,
    TheCreations,
    TheFooter
  }
}
</script>
