import express from 'express'
import bodyParser from 'body-parser'
import Student from './student'
import Person from './person'

const app = express()

app.use(bodyParser.json())
app.get('/', async (req, res) => {
  const greeting = await new Person('zhangsan').say()
  res.send(greeting)
})

app.get('/students', (req, res) => {
  const s1 = new Student('zhangsan', 11)
  const s2 = new Student('lisi', 22)

  res.send([s1.say(), s2.say()])
})

app.listen(4000, () => {
  console.log('app is listening to port 4000')
})
