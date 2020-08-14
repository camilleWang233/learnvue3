website

技术栈：vue3.0
- @vue/cli4.5+ :如果需要改变配置,根路径下创建vue.config.js，里面写配置

- 页面整体布局：[header页首 nav导航 main动态刷新的主体]
- 导航：el-ui ,vueRouter(新版)
- 页面：页面布局+页面逻辑+数据
- 单个作品数据结构

### Layout
 - layout
 - Header.vue 
 - Nav.vue
 - Main.vue

vue3.0+ webpack：学习一下 



elemnet-UI
axios


8.14
- [1] vue3有什么不同：响应式/模板/对象式组件声明方式
- [2]setup()放data数据/生命周期/自定义函数

- [3]reactive声明单一变量 const x = reactive（[json]）
- [4]ref声明基础数据(normal obj) const x = ref（0/'cat'）
*[3][4]都要import，
取值/修改值[3]直接取变量，[4]要变量.value
- [5]isRef(is that a normal obj?) and toRefs(reactive-->ref)
- [6]生命周期(need import)
- [7]箭头函数
        normalFun(a){
          if(a<0){
            a++;
          }
        }

        const normalFun = (a=>{
            if(a<0){
            a++;
          }
        }) 
- [8]return放在最后，把所有声明的东西都return出去
- [9]去掉this.否则会undefined
- [10]解构
    1.写法（看es6）
          function aaa(){
            return{
              a:1;
              b:2:
            }
          }
          let {a,b} = aaa();
    2.重新赋值
         let {a:3,b:5} = aaa();
- [11]去掉下划线：text-decoration:none;

8.13

- [ 1] 俩按钮居中显示display：lineblock
- [ 2] 绑定属性语法糖：v-for  :for
属性有很多比如class id style等
- [ 3] 基础数据类型，各走各的路
- [ 4] 引用数据类型（对象）牵一发而动全身
- [ 5] 响应式开发和引用数据类型有关吗？好像无关
- [ 6] 双向绑定@: 表单和component


