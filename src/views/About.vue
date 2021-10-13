<template>
  <div class="about">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="text1">welcome to about</div>
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
      num: 1,
    });
    const methodName = {
      handler() {
        console.log(this.num++);
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
.about {
  width: 500px;
  height: 300px;
  margin: 100px auto;
  text-align: center;

  > .text1 {
    margin-top: 20px;
    font-size: 18px;
    color: #666;
  }
}
</style>
