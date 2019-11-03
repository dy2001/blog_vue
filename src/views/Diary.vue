<template>
  <div>
      <div v-for="o in diarylist" :key="o.id"> 
          <el-card class="box-card">
              <h3>{{o.content}}</h3>
              <br />
              <span style="float:right;padding:5px">{{o.createTime.substring(0,10)}}</span>
            </el-card>
            <br/>
      </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
     data(){
        return{
            diarylist:{}
        }
    },
    methods:{
        getdiarylist(){
            axios
            .get("http://localhost:5000/api/Diary/Diary")
            .then(response => {
            this.diarylist = response.data.data;
            });
        }
    },
     mounted(){
         this.getdiarylist();
    }
}
</script>

<style>
</style>