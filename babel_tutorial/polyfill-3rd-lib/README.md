问题：
项目依赖的某一些第三方库没有做polyfill，比如axios， 没有对Promise做polyfill

webpack 的解决办法：
通常情况下，对于 node_modules中的依赖我们在bundle的时候是不会使用babel-loader来处理的，如果我们要对上面的这种情况进行处理，就必须
将这个没有做polyfill的第三方库 也使用babel-loader处理
这个策略类似与 vue-cli 中对第三方依赖做浏览器兼容时使用的 transpileDependencies 属性
https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist

上面的策略是没有问题的，但是在实际应用的过程中，遇到了一个小问题，我们在做polyfill的时候，需要对preset-env的moudles参数设置为commonjs，因为如果使用默认的auto，
那么处理完axios后，因为axios本身采用的是cjs模块，babel又会使用import 来增加polyfill，就造成了在同一个文件中 混用了 import 和module.export ，导致了
Cannot assign to read only property 'exports' of object 的错误。 

webpack 今天升级到了5.0.0，WTF！ 太难了
