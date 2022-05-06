# 网易云音乐使用 next.js 框架优化体验开发记录

为什么要使用 next.js 呢？

因为使用 react 框架，开发出来的单页面富应用，是先从服务器请求下来 HTML、CSS、JS 文件，然后在客户端再进行解析。这样的话，会有一段时间的白屏，而且首屏加载速度很慢很慢，自己都受不了自己开发的项目速度这么慢了。本着要把事情做的更好的精神（其实就是受不了这么慢的加载速度），决定使用 next.js 框架对项目进行服务端渲染，加快访问速度。



### 使用路径别名

首先

```
yarn add -D babel-plugin-module-resolver
```

然后再创建一个  `.babelrc` 文件

```
{
    "presets": ["next/babel"],
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "@/components": "./components",
            "@/pages": "./pages",
            "@/public": "./public",
            "@/utils": "./utils"
          }
        }
      ]
    ]
  }
```

就可以了。比普通的 react 框架简单多了



### 使用 styled-components

首先安装

```
yarn add styled-components
```

```
 yarn add -D babel-plugin-styled-components
```

然后在   `.babelrc`  文件加上

```
["styled-components"]
```

也就是

```diff
{
    "presets": ["next/babel"],
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "@/components": "./components",
            "@/pages": "./pages",
            "@/public": "./public",
            "@/utils": "./utils"
          }
        }
      ],
+      ["styled-components"]
    ]
  }
```



### 路由的重写

将根目录重写为发现页，在  `next.config.js` 文件添加如下代码

```diff
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
+  async redirects() {
+    return [
+      {
+        source: '/',
+        destination: '/discover',
+        permanent: true,
+      },
+    ]
+  }
+}

module.exports = nextConfig
```



### 打包

```
yarn build
```

这个过程可能会遇到很多问题，根据控制台的问题提示和 Google 就能很快解决。

打包之后，可以用于产线服务的代码就准备好了！之后，执行：`yarn start` 就可以把服务启动起来了

可以通过 curl 访问验证一下服务有没有启动：

```
curl -v http://127.0.0.1:3000 # 如果没有更改端口的话
```

看到有返回信息，说用服务已经起来了。



### 部署到服务器

使用pm2进行管理，pm2是nodejs的一个带有负载均衡功能的应用进程管理器的模块

```
npm install pm2 -g
```

