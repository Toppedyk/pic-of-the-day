<template>
<div class="media">

  <div class="media-body" v-if="pic.media == 'video'">
    <iframe :src="pic.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h5 class="mt-0">{{pic.title}}</h5>
    <p>{{pic.explanation}}</p>
    <p>{{pic.date}}</p>
  </div>
    <div class="media-body" v-else>
      <img :src="pic.url" alt="">
    <h5 class="mt-0">{{pic.title}}</h5>
    <p>{{pic.explanation}}</p>
    <p>{{pic.date}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'MediaElement',
  props: {
    pic: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img{
  height:50vh;
  width:50vh;
}
</style>
