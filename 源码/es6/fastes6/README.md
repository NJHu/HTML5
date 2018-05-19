
```bash
全局安装Babel-cli
npm install -g babel-cli

虽然已经安装了babel-cli，只是这样还不能成功进行转换，如果你不相信可以输入下边的命令试一下。
babel src/index.js -o dist/index.js

本地安装babel-preset-es2015 和 babel-cli
npm install --save-dev babel-preset-es2015 babel-cli

```