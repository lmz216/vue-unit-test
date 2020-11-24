<template>
  <div class="hello">
    <el-table :data="arr"   style="width: 100%" >
      <el-table-column prop="time" label="调用时间"> </el-table-column>
      <el-table-column prop="state" label="状态"> </el-table-column>
    </el-table>
    <el-button  @click=" () => { this.$router.back(); } "  class="back" >返回</el-button>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
        arr:[],
    };
  },
//   computed: {
//     ...mapState(['arr'])
//   },
  mounted() {
      this.arr=JSON.parse(this.$route.query.arr);
  },
  methods: {},
};
</script>

<style scoped>
.hello {
  width: 80%;
  margin: 0 auto;
}
.back {
  margin-top: 50px;
}
</style>
