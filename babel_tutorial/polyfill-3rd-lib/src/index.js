import axios from 'axios'

axios('https://www.baidu.com').then(console.log).catch(err => {
  console.error('--------------err--------------')
  console.error(err)
})
