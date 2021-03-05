<template>
<div class="creations">

  <div class="creations__header">

    <div class="creations__header__title">
      <h1>OUR Creations</h1>
    </div>

    <CreationsButton></CreationsButton>

  </div>
  <ThePhotoGallery></ThePhotoGallery>

</div>
</template>

<script>
import ThePhotoGallery from "@/components/ThePhotoGallery";
import CreationsButton from "@/components/CreationsButton";

export default {
name: "TheCreations",
  components: {
    ThePhotoGallery, CreationsButton
  }
}
</script>

<style scoped>

</style>
