<template>
  <div class="test">
    <h1>test:{{ count1 }}</h1>
    <div>count value *2 = {{doublecount}}</div>
    <div>count value *2 = {{count1 *2}}</div>
    <button @click="add">+</button>
  </div>
</template>

<script>
import {ref, computed, watch,getCurrentInstance} from "vue"

export default {
setup() {
  
  const count1 = ref(1)
  const add = () =>{
    count1.value ++
  }
  const doublecount = computed(() => count1.value * 2)
  watch(() =>count1.value, val =>{console.log(`count1 is ${val}`)})
  const { ctx } = getCurrentInstance()
  console.log(ctx.$router.currentRoute.value)
  return{
    count1,
    doublecount,
    add
  }

}
}
</script>

<style></style>
