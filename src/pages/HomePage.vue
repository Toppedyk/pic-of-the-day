<template>
  <div class="home-page container-fluid">
    <div class="row">
      <div class="col-4" >
        <button type="button" title="Search for a picture" class="btn btn-success m-3" @click="getPicture(state.picDate)">Search</button>
        <label for="start">Search date:</label>
        <input type="date" id="start" name="trip-start"
       v-model="state.picDate"
       min="2018-01-01" max="2021-04-20">

      </div>
      <div class="col-4">
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
      picDate: ''
    })
    return {
      state,
      async getPicture (query) {
        try {
          await picturesService.getPicture(query)
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
