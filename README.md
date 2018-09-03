# electron-vue

Fork 自 [SimulatedGREG/electron-vue](https://github.com/SimulatedGREG/electron-vue)，方便自己构建需要的基础程序。

在原有框架上添加了以下支持：

- Element-UI
- mockjs
- svg-sprite-loader

此外，还修改、增加了以下功能：

- 调试状态默认不打开调试界面
- 修改了 `index.ejs` 部分内容，保证打包网页的正常运行
- 添加了 style 样式文件夹
- 添加了 api 文件夹用于数据访问
- 在 Vue 中添加了静态方法 `openLink(url)` 和实例方法 `$openLink(url)`

## 构建命令
```bash
# 如果没有安装 vue-cli
npm install -g vue-cli
# 初始化应用程序
vue init cs-tao/electron-vue my-project

# 安装依赖并运行 app
cd my-project
yarn # 或 npm install
yarn run dev # 或 npm run dev
```
