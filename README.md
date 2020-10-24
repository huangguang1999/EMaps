# EMaps

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/huangguang1999/EMaps/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/logo.png)

基于 Vue + Element UI + openlayers 的地图大数据分析系统解决方案；

优点：

1. 学习成本低，基本做到开箱即用
2. 内容形式多样，基本满足所有需求



[简体中文](https://github.com/huangguang1999/EMaps/blob/master/master/README.md) | [English](https://github.com/huangguang1999/EMaps/blob/master/README_EN.md)



## 项目截图

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/20200930184145.png)

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/2.png)



## 赞赏

如果对你有帮助的话请作者喝杯咖啡吧~

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/zf.png)



## 特别鸣谢

[vue](https://github.com/vuejs/vue)

[vue-manage-system](https://github.com/lin-xin/vue-manage-system)

[element](https://github.com/ElemeFE/element)

[incubator-echarts](https://github.com/apache/incubator-echarts)

[openlayers](https://github.com/openlayers/openlayers)

[juejin](https://juejin.im/)



## 前言

该方案作为一套多功能的地图大数据模板，适用于绝大部分的地图、图表、交通、大数据等系统（Web Management System）开发。基于 vue.js，使用 vue-cli3 脚手架，引用 Element UI 组件库，方便开发快速简洁好看的组件。



## 功能

-   [x] Element UI
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 静态地图
-   [ ] 动态地图
-   [ ] 分析报告



## 下载步骤

```javascript
// 把模板下载到本地
git clone https://github.com/huangguang1999/EMaps   

// 进入模板目录
cd EMaps

// 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn
npm install 

// 开启服务器，浏览器访问 http://localhost:8080
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```



## 其他注意事项

### 一、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分四步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
{
    // 富文本编辑器组件
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve)
},
```

第二步：删除引入该组件的文件。在目录 src/components/page/ 删除 VueEditor.vue 文件。

第三步：删除该页面的入口。在目录 src/components/common/Sidebar.vue 中，找到该入口，删除下面这段代码。

```js
{
	index: 'editor',
	title: '富文本编辑器'
},
```

第四步：卸载该组件。执行以下命令：
npm un vue-quill-editor -S

完成。

### 二、如何切换主题色呢？

第一步：打开 src/main.js 文件，找到引入 element 样式的地方，换成浅绿色主题。

```javascript
import 'element-ui/lib/theme-default/index.css'; // 默认主题
// import './assets/css/theme-green/index.css';       // 浅绿色主题
```

第二步：打开 src/App.vue 文件，找到 style 标签引入样式的地方，切换成浅绿色主题。

```javascript
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";     /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

第三步：打开 src/components/common/Sidebar.vue 文件，找到 el-menu 标签，把 background-color/text-color/active-text-color 属性去掉即可。



## License

[MIT](https://github.com/huangguang1999/EMaps/blob/master/LICENSE)