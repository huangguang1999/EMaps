# vue-manage-system

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/releases">
    <img src="https://img.shields.io/github/release/lin-xin/vue-manage-system.svg" alt="GitHub release">
  </a>
  <a href="https://lin-xin.gitee.io/example/work/#/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/logo.png)

Map big data analysis system solution based on Vue + Element UI + openlayers;

advantage:

1. Low learning cost, basically ready to use out of the box
2. Various forms of content, basically satisfying all needs



[简体中文](https://github.com/huangguang1999/EMaps/blob/master/master/README.md) | [English](https://github.com/huangguang1999/EMaps/blob/master/master/README_EN.md)



## Project screenshot

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/20200930184145.png)

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/2.png)



## Praise

If it helps you, please have a cup of coffee~

![](https://gitee.com/huangguang1999/blog-image/raw/master/img/zf.png)



## Special thanks

[vue](https://github.com/vuejs/vue)

[vue-manage-system](https://github.com/lin-xin/vue-manage-system)

[element](https://github.com/ElemeFE/element)

[incubator-echarts](https://github.com/apache/incubator-echarts)

[openlayers](https://github.com/openlayers/openlayers)

[juejin](https://juejin.im/)



## Preface

As a set of multifunctional map big data templates, this solution is suitable for the development of most maps, charts, traffic, big data and other systems (Web Management System). Based on vue.js, use vue-cli3 scaffolding and reference Element UI component library to facilitate the development of fast, concise and beautiful components.



## Function

-   [x] Element-UI
-   [x] Login/Logout
-   [x] Dashboard
-   [ ] Static map
-   [ ] Dynamic map
-   [ ] analysis report



## Installation steps

```javascript
// Clone templates
git clone https://github.com/lin-xin/vue-manage-system.git	

// Enter template directory
cd vue-manage-system	

// Install project dependencies. After the installation is complete, 
// the installation fails. Use cnpm or yarn
npm install						

// Turn on the server and visit http://localhost:8080 in the browser
npm run serve

// Execute the build command, the generated dist folder can be accessed under the server
npm run build
```



## Notice

### 一、If I don't want to use some components, how can I delete it?

For example, I don't want to use the Vue-Quill-Editor component, I need to take four steps.

The first step to remove the component of the routing. Enter 'src/router/index.js' and delete the code below.

```JavaScript
{
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve)
},
```

Second,delete the component files. Enter 'src/components/page/' and delete 'VueEditor.vue' file.

The third step is to delete the entry. Enter 'src/components/common/Sidebar.vue' and delete the code below.

```js
{
	index: 'editor',
	title: '富文本编辑器'
},
```

Finally, uninstall this component.
npm un vue-quill-editor -S

Complete!

### 二、How to switch themes?

The first step to enter 'src/main.js' and change into green theme.

```javascript
import 'element-ui/lib/theme-default/index.css'; // default theme
// import '../static/css/theme-green/index.css';       // green theme
```

The second step to enter 'src/App.vue' and change into green theme.

```javascript
@import "../static/css/main.css";
@import "../static/css/color-dark.css";     /*深色主题*/
/*@import "../static/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

Finally,enter 'src/components/common/Sidebar.vue' and find el-menu Tags,delete 'background-color/text-color/active-text-color'。



## License

[MIT](https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE)
