<template>
   <div 
      class="entry-container mb-3 pointer" 
      @click="$router.push({ name: 'entry', params: { id: 10 }})"
   >
      <div class="entry-title d-flex">
         <span class="text-success fs-5 fw-bold">1234</span>
         <span class="mx-1 fs-5">1234</span>
         <span class="mx-2 fw-light">1234</span>
      </div>
      <div class="entry-description">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus sequi error totam sapiente eum tempore omnis aliquid libero doloribus explicabo quas itaque, laudantium consequuntur minus possimus temporibus. Quos, nobis?
      </div>
   </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss">
.entry-container {
   border-bottom: 1px solid #2c3e50;
   transition: 0.2s all ease-in;

   &:hover {
      background-color: lighten($color: grey, $amount: 45);
   }

   .entry-description {
      font-size: 12px;
   }
}
</style>