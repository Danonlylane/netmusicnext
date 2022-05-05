# next.js 框架开发记录

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

