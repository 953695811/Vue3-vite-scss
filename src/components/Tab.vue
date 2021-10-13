<template>
  <div class="container">
    <div class="tab_item" v-for="item in list" :key="item.id" @click="handler(item)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
// import About from './About.vue';
export default {
  components: {}, // 注册组件
  setup(props, { emit }) {
    // props为父组件传值：props.msg，emit给父组件传值：emit('hahaha','我是子组件值')
    const data = reactive({
      list: [
        { id: 1, name: "首页", path: "/home" },
        { id: 2, name: "关于", path: "/about" },
      ],
    });
    const methodName = {
      handler(item) {
        this.$router.push({
          path: item.path,
        });
      },
    };
    onBeforeMount(() => {}); // 挂载前
    onMounted(() => {}); // 挂载后
    onBeforeUpdate(() => {}); // 更新前
    onUpdated(() => {}); // 更新后
    watch(
      () => [data.num], // 可写多个 --- 监听的值
      ([newV1], [oldV1]) => {
        console.log(oldV1); // 原来的值
        console.log(newV1); // 变化后的值
      }
    );
    const comput = {
      // 可写多个
      cp1: computed(() => {
        return data.num - 1; // 数据处理
      }),
    };
    return {
      // 返回数据和方法
      ...toRefs(data),
      ...methodName,
      ...comput,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 50px;
  display: flex;
  justify-content: center;
  > .tab_item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #888;
    padding: 0 40px;
    cursor: pointer;
  }
}
</style>
