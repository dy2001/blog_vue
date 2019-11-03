<template>
  <div id="app">
    <div class="main">
      <div class="left_div">
        <keep-alive>
        <my/>
         </keep-alive>
      </div>
      <div class="right_div">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import My from './components/my.vue'
export default {
  name:'app',
  data(){
    return{
      
    }
  },
  components:{
    My 
  }
}
</script>
<style lang="less" scoped>
*{
  margin: 0px;
  padding: 0px;
}
.size{
  font-size: 22px;
  font-family:'Microsoft YaHei';
  color:#99a9bf
}
.main{
  display: flex;
  flex-flow: row;
}
.left_div {
  width: 100%;
  height: auto;
  min-height: 200px;
  order: 1;
  flex:2;
  /*border-right: 0.5px solid #99a9bf */
}
.right_div {
  width: 100%;
  height: auto;
  min-height: 500px;
  order: 2;
  flex:3;
}
@media all and (max-width:1200px)
{
  .main{
    display: flex;
    flex-flow: column;
  }
}

</style>
<style>
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
  scrollbar-arrow-color: red;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  scrollbar-arrow-color: red;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
