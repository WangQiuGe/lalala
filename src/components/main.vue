<template>
  <div>
    <el-container >
      <div class='k'>
        <Banner></Banner>
      </div>
      <el-container>
        <div class="l">
          <Header></Header>
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from './header.vue'
import Banner from './banner.vue'
import Footer from './footer.vue'
export default {
  name: 'Main',
  components: {
    Header,
    Banner,
    Footer
  }
}
</script>
<style >
.l {
  width: 100%;
}
</style>
