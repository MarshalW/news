# news

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 配置

需要创建`/src/config.json`，设置如下参数：

* subscribeUrl，提交订阅信息的处理地址，即应用服务器的接口访问地址

* applicationServerKey，应用服务器生成的公钥，即VAPID

生成的格式类似这样

```
{
  "subscribeUrl": "https://mydomain/notifications/subscribe",
  "applicationServerKey": "BPnUp53sddffSHfwQ12ktZejRqTBynzsqE9GVSnkuIrNbltAMKPR-dvqV78pWFlfuvEN5q2q07kq7wYV2s5-0W0"
}

```
