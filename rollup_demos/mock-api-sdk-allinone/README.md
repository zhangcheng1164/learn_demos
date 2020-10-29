mock-api-sdk中只有iife版本是使用rollup将所有文件打包成一个文件，esm和cjs版本依旧保留了源码的文件目录结构，在allinone版本中，我们将使用rollup将三个版本都打包到一个单独的文件中

因为我们最终会将axios与我们的逻辑代码打包到一起，而axios又会根据是node环境还是browser环境，替换http.js -> xhr.js,所以我们一共会打出四种版本的文件：
1. mock-api.browser.min.js
这个是iife格式，通过 `<script>` 标签直接引用

2. mock-api.common.min.js
这个是在node环境中使用的cjs版本

3. mock-api.esm.min.js
这个是在node环境中使用的esm版本

4. mock-api.esm.browser.min.js
这个是在browser中使用的esm版本
对于使用webpack打包浏览器工程，应该让webpack引用这个文件

package.json中指定:
```json
  "main": "dist/mock-api.common.min.js",
  "module": "dist/mock-api.esm.min.js",
  "browser": "dist/mock-api.esm.browser.min.js",
```