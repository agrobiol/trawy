<template>
  <div>
    <el-carousel height="768px">
      <el-carousel-item v-for="(image, key) in row.images" :key="key">
        <div style="text-align:center;">
          <img :src="getImgUrl(image)" class="image"/>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'species-images',
  props: {
    row: Object
  },
  methods: {
    getImgUrl (img) {
      var images = require.context('../assets/media/species/', false, /\.jpg$/)
      return images('./' + img)
    }
  }
}
</script>
