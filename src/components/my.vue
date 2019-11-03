<template>
  <div>
    <div class="headimg">
      <br />
      <el-image :src="src" class="headimg"></el-image>
    </div>
    <br />
    <h2 style="color:#7a7e86;text-align:center">dy2001</h2>
    <center>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=1377525604&auto=1&height=32"></iframe>
    </center>
    <br />
    <div style=" margin: 20px;">
      <span class="size">{{yiyan.str}}</span>
      <br />
      <span class="size" style="float:right;">—{{yiyan.name}}</span>
    </div>
    <br />
    <el-divider></el-divider>
    <div class="category">
      <el-button type="text">
        <span class="size aa" @click="go_v('home')">首页</span>
      </el-button>
      <el-button type="text">
        <span class="size aa" @click="go_diary()">我的日记</span>
      </el-button>
      <el-button type="text" v-for="o in categorys" :key="o.id">
        <span class="size aa" @click="go_v(o.id)">{{o.categoryName}}</span>
      </el-button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "my",
  data() {
    return {
      src: "https://www.thiswaifudoesnotexist.net/example-10001.jpg",
      yiyan: {
        name: "",
        str: ""
      },
      categorys: {}
    };
  },
  methods: {
    getyiyan() {
      let url;
      Math.floor(Math.random() * 10) >= 5
        ? (url = "https://international.v1.hitokoto.cn/?c=a")
        : (url = "https://international.v1.hitokoto.cn/?c=b");
      axios.get(url).then(response => {
        this.yiyan.name = response.data.creator;
        this.yiyan.str = response.data.hitokoto;
      });
    },
    getcategory() {
      axios
        .get("http://localhost:5000/api/Category/Category")
        .then(response => {
          this.categorys = response.data.data;
        });
    },
    go_diary(){
        this.$router.push({path:'/diary/'});
    },
    go_v(id) {
      if (id == "home") {
          this.$router.push({
          name: "home",
          query: {
            id: 'home',
            page:1
          }
        });
      } else {
        this.$router.push({
          name: "home",
          query: {
            id: id,
            page:1
          }
        });
      }
    }
  },
  mounted() {
    this.getyiyan();
    this.getcategory();
  }
};
</script>

<style scoped>
.headimg {
  width: 100px;
  border-radius: 90px;
  margin: auto;
}
.category {
  text-align: center;
}
.size {
  font-size: 22px;
  font-family: "Microsoft YaHei";
  color: #7a7e86;
}
.aa:hover {
  color: #55585e;
}
</style>