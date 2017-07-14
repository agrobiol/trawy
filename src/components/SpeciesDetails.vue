<template>
  <div>
    <p v-if="row.details"><strong>Informacje</strong>: {{ row.details }}</p>
    <p v-if="row.detailsHabitat"><strong>Występowanie</strong>: {{ row.detailsHabitat }}</p>
    <p v-if="row.detailsRemoval"><strong>Zwalczanie</strong>: {{ row.detailsRemoval }}</p>
    <!--
    <el-row :gutter="20">
      <el-col :span="12">
      </el-col>
      <el-col :span="12">
        <el-carousel height="600px" indicator-position="none" arrow="never" :autoplay="true">
          <el-carousel-item v-for="(image, key) in row.images" :key="key">
            <div style="text-align:center;">
              <img :src="getImgUrl(image)" class="image"/>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    -->
  </div>
</template>

<script>
export default {
  name: 'species-details',
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
