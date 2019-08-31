<template>
  <v-pagination :total="total" :current-page="currentPage" @pagechange="pagechange"></v-pagination>
</template>

<script >
import pagination from "./use";
export default {
  data() {
    return {
      total: 200, // 记录总条数
      count: 10, // 每页显示条数
      currentPage: 1 // 当前的页数
    };
  },
  methods: {
    pagechange: function(currentPage) {
      console.log(currentPage); //获取到父组件传的值
    }
  },
  components: {
    "v-pagination": pagination
  }
};
</script>