<template>
  <div class="Results">
    <MediaElement :pic="state.picture"/>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import MediaElement from './MediaElementComponent'
export default {
  name: 'results',
  setup () {
    const state = reactive({
      picture: computed(() => AppState.picture)
    })
    return {
      state
    }
  },
  components: {
    MediaElement
  }
}
</script>

<style lang="scss" scoped>
</style>
