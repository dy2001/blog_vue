<template>
  <div>
        <h1 class="size">{{bloginfo.title}}</h1>
         <span style="" class="size">{{bloginfo.category}}</span>——
         <span style="" class="size">{{bloginfo.createTime.substring(0,10)}}</span>
    <div>
        <div class="v_content" v-html="bloginfo.content"></div>
    </div>
    
  </div>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            blogid:this.$route.query['id'],
            bloginfo:{}
        }
    },
    methods:{
        getbloginfo(){
        axios
        .get("http://localhost:5000/api/BlogInfo/GetBlogById?id="+this.blogid)
        .then(response => {
          this.bloginfo = response.data.data;
        });
        }
    },
     mounted(){
        this.getbloginfo();
    }
}
</script>

<style scoped>
.size {
  font-family: "Microsoft YaHei";
  color: #7a7e86;
}
</style>