import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.edab848f.js";const g=JSON.parse('{"title":"vue3、tsx、arco-design","description":"vue3 vite4 tsx","frontmatter":{"title":"vue3、tsx、arco-design","description":"vue3 vite4 tsx","date":20230402,"tags":["vue"]},"headers":[],"relativePath":"posts/vue3Tsx.md","lastUpdated":1680589065000}'),e={name:"posts/vue3Tsx.md"},p=l(`<p>文章结尾附源码</p><h3 id="vue3、typescript、pinia、arco-design" tabindex="-1"><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">vue3</a>、<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">typescript</a>、<a href="https://pinia.vuejs.org/zh/" target="_blank" rel="noreferrer">pinia</a>、<a href="https://arco.design/" target="_blank" rel="noreferrer">Arco Design</a> <a class="header-anchor" href="#vue3、typescript、pinia、arco-design" aria-label="Permalink to &quot;[vue3](https://cn.vuejs.org/)、[typescript](https://www.typescriptlang.org/)、[pinia](https://pinia.vuejs.org/zh/)、[Arco Design](https://arco.design/)&quot;">​</a></h3><p>完全使用tsx，基本涵盖了vue3常用写法，欢迎补充</p><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li><strong>TypeScript</strong> - 代码完全使用 TypeScript 书写。</li><li><strong>Pinia</strong></li><li><strong>Arco Design</strong> - 字节翻版ant-design，vue组件库。</li><li><strong>@vueuse/core</strong> - 实用函数集</li><li><strong>mitt</strong> - mitt封装eventBus hooks</li></ul><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><ul><li>npm run</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm:</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn:</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">代码提交:</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lit-staged</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lint-staged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">风格修复完成后:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fix(): bug修复</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">详细参照commitlint.config</span></span></code></pre></div><h2 id="已安装三方组件库" tabindex="-1">已安装三方组件库 <a class="header-anchor" href="#已安装三方组件库" aria-label="Permalink to &quot;已安装三方组件库&quot;">​</a></h2><ul><li>@vueuse/core（实用函数集）</li><li>@arco-design/web-vue (字节)</li><li>gsap（javascript动画库）</li><li>mitt（实现vue取消的eventbus（发布与订阅功能））</li><li><a href="https://github.com/anncwb/vite-plugin-imagemin#options" target="_blank" rel="noreferrer">vite-plugin-imagemin 图片压缩</a><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;resolutions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;bin-wrapper&quot;: &quot;npm:bin-wrapper-china&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li>unplugin-vue-components (按需导入组件)</li><li>vite-plugin-style-import （按需导入样式）</li><li>vite-plugin-compression （开启GZIP压缩）</li><li>vite-plugin-cdn-import （cdn引入）</li><li>@vitejs/plugin-legacy (传统浏览器支持)---&gt;对vue3来说无意义，Proxy决定了vue3不支持ie11，但对react或其他可通过此实现支持</li><li>mockjs、vite-plugin-mock</li></ul><h2 id="踩坑记录" tabindex="-1">踩坑记录 <a class="header-anchor" href="#踩坑记录" aria-label="Permalink to &quot;踩坑记录&quot;">​</a></h2><ol><li>enmu type ts作用域与js作用域冲突<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&#39;no-shadow&#39;: &#39;off&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">   &#39;@typescript-eslint/no-shadow&#39;: &#39;error&#39;,</span></span></code></pre></div></li><li>tsx中的transtion、KeepAlive、动态组件创建（SFC写法无需考虑）</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Transition, KeepAlive, createVNode } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Transition name=&quot;fade&quot; mode=&quot;out-in&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;div key={route.path} style={{ height: &#39;100%&#39; }}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {route.meta.ignoreCache ? (</span></span>
<span class="line"><span style="color:#A6ACCD;">          createVNode(Component)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ) : (</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;KeepAlive include={cacheList.value}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            {createVNode(Component)}</span></span>
<span class="line"><span style="color:#A6ACCD;">          &lt;/KeepAlive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        )}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Transition&gt;</span></span></code></pre></div><ol start="3"><li>v-slots两种写法（SFC写法无需考虑）<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">举例1：</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;a-button v-slot={{ default:() =&gt; VNode, title:() =&gt; VNode }} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">举例2：</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;a-button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   {{</span></span>
<span class="line"><span style="color:#A6ACCD;">      default: () =&gt;  VNode,</span></span>
<span class="line"><span style="color:#A6ACCD;">      title: () =&gt;  VNode,</span></span>
<span class="line"><span style="color:#A6ACCD;">   }}</span></span>
<span class="line"><span style="color:#A6ACCD;">   &lt;/a-button&gt;</span></span></code></pre></div></li><li>tsx中的scoped作用域<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">一、vite内置.module方案，js形式导入css，生成附带随机变量的class</span></span>
<span class="line"><span style="color:#A6ACCD;">  定义使用*.module.less</span></span>
<span class="line"><span style="color:#A6ACCD;">     .layout {</span></span>
<span class="line"><span style="color:#A6ACCD;">         width: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">         height: 100vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &amp;-navbar {</span></span>
<span class="line"><span style="color:#A6ACCD;">           position: fixed;</span></span>
<span class="line"><span style="color:#A6ACCD;">           top: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">           left: 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">           z-index: 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">           width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">           height: @nav-size-height;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     import style from *.module.less</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;div class={style.layout}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class={style.layoutNavbar}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">     &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">二、命名特有class</span></span></code></pre></div></li></ol><h2 id="源码地址-arcro-vue" tabindex="-1">源码地址：<a href="https://github.com/wangguixing/arcro-vue" target="_blank" rel="noreferrer">arcro-vue</a> <a class="header-anchor" href="#源码地址-arcro-vue" aria-label="Permalink to &quot;源码地址：[arcro-vue](https://github.com/wangguixing/arcro-vue)&quot;">​</a></h2>`,15),t=[p];function o(i,r,c,C,A,y){return n(),a("div",null,t)}const d=s(e,[["render",o]]);export{g as __pageData,d as default};
