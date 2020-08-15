import express from 'express'
import bodyParser from 'body-parser'
import Person from './person'
import Student from './student'

const app = express()

app.use(bodyParser.json())
app.get('/', async (req, res) => {
  res.send('hello world')
})

app.get('/persons', (req, res) => {
  const p1 = new Person('zhangsan', 11)
  const p2 = new Person('lisi111aaa', 22)

  res.send([p1.say(), p2.say()])
})

app.get('/student', (req, res) => {
  const a = new Student('zhangsan')
  a.addFriend('lisi', 'wangwu', 'zhaoliu', 'maqi')
  res.send(a.friends)
})

app.listen(4000, () => {
  console.log('app is listening to port 4000')
})
