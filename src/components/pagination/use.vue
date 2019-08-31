
<template>
  <nav>
    <ul class="pagination">
      <li :class="{'disabled': current == 1}">
        <a @click="setCurrent(current - 1)">«</a>
      </li>
      <li :class="{'disabled': current == 1}">
        <a @click="setCurrent(1)">首页</a>
      </li>
      <li v-for="(p,index) in grouplist" :class="{'active': current == p.val}" :key="index">
        <a @click="setCurrent(p.val)">{{ p.text }}</a>
      </li>
      <li :class="{'disabled': current == pageSize}">
        <a @click="setCurrent(pageSize)">尾页</a>
      </li>
      <li :class="{'disabled': current == pageSize}">
        <a @click="setCurrent(current + 1)">»</a>
      </li>
      <li class="other">
        <input type="text" v-model="to_current" />
        <span @click="setCurrent(to_current)">跳转</span>
      </li>
      <li class="other">每页{{count}}条 共{{total}}条数据</li>
    </ul>
  </nav>
</template>
<script >
export default {
  data() {
    return {
      current: this.currentPage,
      to_current: "" //跳转到
    };
  },
  props: {
    total: {
      // 数据总条数
      type: Number,
      default: 0
    },
    // 每页显示条数
    count: {
      type: Number,
      default: 10
    },
    currentPage: {
      // 当前页码
      type: Number,
      default: 1
    },
    pagegroup: {
      // 分页条数
      type: Number,
      default: 9,
      coerce: function(v) {
        v = v > 0 ? v : 5;
        return v % 2 === 1 ? v : v + 1;
      }
    }
  },
  computed: {
    pageSize: function() {
      // 总页数
      return Math.ceil(this.total / this.count);
    },
    grouplist: function() {
      // 获取分页页码
      var len = this.pageSize,
        temp = [],
        list = [],
        count = Math.floor(this.pagegroup / 2),
        center = this.current;
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({ text: this.pageSize - len, val: this.pageSize - len });
        }
        return temp;
      }
      while (len--) {
        temp.push(this.pageSize - len);
      }
      var idx = temp.indexOf(center);
      idx < count && (center = center + count - idx);
      this.current > this.pageSize - count && (center = this.pageSize - count);
      temp = temp.splice(center - count - 1, this.pagegroup);
      do {
        var t = temp.shift();
        list.push({
          text: t,
          val: t
        });
      } while (temp.length);
      if (this.pageSize > this.pagegroup) {
        this.current > count + 1 &&
          list.unshift({ text: "...", val: list[0].val - 1 });
        this.current < this.pageSize - count &&
          list.push({ text: "...", val: list[list.length - 1].val + 1 });
      }
      return list;
    }
  },
  methods: {
    setCurrent: function(idx) {
      if (this.current != idx && idx > 0 && idx < this.pageSize + 1) {
        this.current = Number(idx);

        this.$emit("pagechange", this.current);
      }
    }
  }
};
</script>

<style lang="less">
@base-color: rgb(24, 104, 13); //主色
@font-size: 12px; //字体大小
.pagination {
  overflow: hidden;
  display: table;
  margin: 0 auto;
  list-style: none;
  height: 50px;
  cursor: pointer;
  font-size: @font-size;

  li {
    float: left;
    height: 30px;
    border-radius: 5px;
    margin: 3px;
    color: #666;

    & :hover {
      background: @base-color;
      color: white;

      a {
        color: #fff;
      }
    }
    a {
      display: block;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      text-decoration: none;
    }
  }
  .active {
    background: @base-color;

    a {
      color: #fff;
    }
  }
  .other {
    height: 30px;
    line-height: 30px;
    & :hover {
      background: white;
      color: #666;
    }
    input {
      outline: none; //去除鼠标点击效果
      padding: 3px;
      //   height: 25px !important;
      width: 50px;
      text-align: center;
    }
    i {
      color: @base-color;
    }
    span {
      width: 50px;
      text-align: center;
      border: 1px solid #1c4e08;
      height: 23px;
      line-height: 23px !important;
      display: block;
      float: right;
      margin-top: 2px;
      background: #18680d;
      color: white;
    }
  }
}
</style>