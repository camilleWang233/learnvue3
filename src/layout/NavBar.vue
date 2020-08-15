<template>
  <div id="nav_container">
    <ul class="test">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/about">作品列表</router-link></li>
      <li><router-link to="/callback">关于我</router-link></li>
      <li>
        <a @click="show_list">下拉菜单</a>
        <ul class="sub_bar">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
