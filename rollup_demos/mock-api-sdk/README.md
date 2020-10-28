一个简单的lib
使用了axios来请求一个mock api

打包方式：
esm和cjs格式： 直接使用babel对源代码目录进行编译，对低版本浏览器做ponyfill
iife格式： 使用rollup打包，将axios打包在一起，并作了ponyfill

浏览器直接使用
```html
  <script src="bundle.min.js"></script>
  <script>
    mockApi.getAllVms().then(console.log)
  </script>
```

commonjs使用
```js
const { getAllVms } = require('mock-api-sdk')

getAllVms().then(console.log)
```

esm使用
```js
import { getAllVms } from 'mock-api-sdk';

getAllVms().then(console.log)
```
