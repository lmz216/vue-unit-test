<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button v-if="visibale" class="go" @click="goHistory">查看历史记录</el-button>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to You",
      timeData:null,
      arr:[],
      visibale:false,
    };
  },
  computed: {
    // ...mapGetters(['arr'])
  },
  mounted() {
    this.getInterval();
  },
  methods: {
    //  ...mapActions( ["increment"]),
     //当前时间转化为时分秒
     timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      let nowTime = year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss ;
      return nowTime;
    },
    //获取接口
    getAxiosx() {
      let form={
        time:this.timeFormate(new Date()),
        state:'失败'
      }
      this.$axios
        .get("https://api.github.com/")
        .then((res) => {
          this.msg=JSON.parse(JSON.stringify(res.data));
          form.state='成功'
        })
        .catch((erro) => {
          console.log(erro);
        });
        this.arr.push(form)
        // this.increment(this.arrData);
    },
    //设定一个定时器
    getInterval(){
      if(this.timeData==null){
        this.timeData=setInterval(() => {
          this.getAxiosx();
          this.visibale=true;
        }, 5000);
      }
    },
    //去历史记录页面
    goHistory(){
      this.$router.push({
        name:'history',
        query:{
          'arr':JSON.stringify(this.arr),
        }
      });
    }
  },
  beforeDestroy(){
    clearInterval(this.timeData);　　// 清除定时器
    this.timeData= null;
  },
};
</script>

<style scoped>
.go{
  margin-top: 50px;
}
h1,
h2 {
  font-weight: normal;
  font-size: 14px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
