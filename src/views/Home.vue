<template>
  <div class="home">
    <div class="list">
      <div v-for="o in bloglist" :key="o.id">
        <el-card class="box-card">
            <el-link :underline="false" @click="go_v(o.id)"><h2 class="size aa">{{o.title}}</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </el-link :underline="false">
          <h4 class="size">
            {{o.abstr}}
          </h4>
          <h5 style="float:right;" class="size">{{o.category}}------{{o.createTime.substring(0,10)}}</h5>
        </el-card>
        <br />
      </div>
    </div>
    <div style="width:90%;margin: auto;">
      <el-button  icon="el-icon-arrow-left" @click="addpage()">上一页</el-button>
      <el-button  style="float:right" @click="reducepage()">下一页<i class="el-icon-arrow-right el-icon--right" ></i></el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
export default {
  name: "home",
  data() {
    return {
      bloglist:{},
      page:this.$route.query['page'],
      categoryid:this.$route.query['id']
    };
  },
  methods:{
    getblog(){
      if (this.categoryid == "home") {
        axios
        .get("http://localhost:5000/api/BlogInfo/GetBlog?page="+this.page+"&size=5")
        .then(response => {
          this.bloglist = response.data.data;
        });
      }else {
        axios
        .get("http://localhost:5000/api/BlogInfo/GetBlogByCategoryId?page="+this.page+"&size=5&categoryid="+this.categoryid)
        .then(response => {
          this.bloglist = response.data.data;
        });
      }
    },
    addpage(){
      if((parseInt(this.$route.query['page'])-1)>=1){
        this.$router.push({
          name: "home",
          query: {
            id: this.$route.query['id'],
            page:this.$route.query['page']-1
          }
        });
      }
    },
    reducepage(){
      this.$router.push({
          name: "home",
          query: {
            id: this.$route.query['id'],
            page:parseInt(this.$route.query['page'])+1
          }
        });
    },
    go_v(blogid){
      this.$router.push({
          name: "v",
          path:'/v/',
          query: {
            id: blogid
          }
        });
    }
  },
  mounted(){
    this.getblog();
  },
  watch:{
    $route(to,from){
      this.categoryid=this.$route.query['id']
      this.page=this.$route.query['page']
      this.getblog()
    }
  },
  components: {}
};
</script>
<style scoped>
.list {
  width: 90%;
  margin: auto;
}
.size {
  font-family: "Microsoft YaHei";
  color: #7a7e86;
}
.aa:hover {
  color: #55585e;
}
</style>
