<template>
  <div class="home-page container-fluid">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-success" @click="getPicture">Search</button>
      </div>
      <div class="col">
        <Pictures/>
      </div>
    </div>
  </div>
</template>

<script>
import { picturesService } from '../services/PicturesService'
import Pictures from '../components/PicturesComponent'
import { reactive } from 'vue'
export default {
  name: 'HomePage',
  setup () {
    const state = reactive({

    })
    return {
      state,
      async getPicture () {
        try {
          await picturesService.getPicture()
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    Pictures
  }
}
</script>

<style lang="scss" scoped>

</style>
