<!--
 * @Description: 
 * @Author: sunjun
 * @Date: 2023-03-25 08:36:10
 * @LastEditors: sunjun
 * @LastEditTime: 2023-05-18 08:03:30
-->
<template>
  <div>
    <div ma4 class="template-component"><el-button>组件按钮</el-button></div>
  </div>
</template>

<script lang="ts">
import { componentProps } from "./props";
import { defineComponent } from "vue-demi";
import  ElementUI  from "zdby-element-demi";
console.log(ElementUI)
export default defineComponent({
  name: "SelectVarDialog",
  components:{
    ElButton:ElementUI.Button
  },
  props: componentProps,
  setup() {},
});
</script>

