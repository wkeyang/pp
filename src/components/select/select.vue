<template>
  <div class="selects">

    <div class="select">
      <div class="select-head">
        <span class="select-head-cont">{{select_data.name}}</span>
        <span class="select-icon">▼</span>
      </div>
      <ul class="option">
        <li class="option-item" @click="changeSite(item)" v-for="(item,index) in selects" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div @click="sees" class="see">查看</div>
  </div>
</template>

<script>
export default {
  name: "selects",
  data() {
    return {
      select_data: {
          name:"",  //回显的名字
          value:'', //可能传给后台的值
      }, //回显的数据
      selects:[
          {
              name:'第一个',
              value:1
          },
            {
              name:'第二个',
              value:2
          },
            {
              name:'第三个',
              value:3
          },
            {
              name:'第四个',
              value:4
          }
      ],// 下拉框数据
    };
  },
  methods: {
      //点击每个选项的时候 获取所点击的值
    changeSite(res) {
      this.select_data.name = res.name;
      this.select_data.value = res.value;
    },
    // 查看
    sees(){
      alert('他的值是-------------'+this.select_data.value)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
// @import "../common.less";
@base-color:#02540e;  // 基础色
@button-height:45px;   //按钮高度
// @base-color:red;
.select {
  position: relative;
  width: 200px;
  text-align: center;
  height: @button-height;
  line-height: @button-height;
  background: white;
  border: 1px solid @base-color;
  color: white;
  display: block;
  float: left;
  cursor: pointer;
}
.select-head {
  overflow: hidden;
  /*width: 90px;*/
  height: 40px;
  font-size: 14px;
  color: #202020;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 40px;
}
.select-head .select-head-cont {
  float: left;
  padding-right: 10px;
}
.select-head .select-icon {
  float: right;
  /* color: @base-color; */
}
.select:hover .option {
  display: block;
}

.option {
  position: absolute;
  left: 0;
  top: 30px;
  font-size: 14px;
  width: 100%;
  color: #63666e;
  background: #ffffff;
  line-height: 25px;
  display: none;
  z-index: 20000;
  padding: 10px 0;
  text-align: left;

  border: 1px solid @base-color;
}
.option-item {
  border-bottom: 0.5px solid rgba(197, 197, 197, 0.27);
  padding: 5px;
  text-indent: 8px;
}
.option-item:last-child {
  //   border: none;
}
.option-item:hover {
  background: @base-color;
  color: white;
}
// 查看
.see{
width: 80px;
height: @button-height;
line-height: @button-height;
float: left;
background: @base-color;
color: white;
cursor: pointer;
}
</style>
