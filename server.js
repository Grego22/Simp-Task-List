const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urelencoded({extended:false}))
// can use this or app.use(bodyParser.json) the ladder is used more for apps
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

const taskList = [
  'Walk the dog',
  'Feed the Fish',
  'Water the plants',
  'Clean the litterbox',
]

const completedTasks =[
  'read a book',
  'study lecture notes',
]

//when the user asks for /, I say hello world
app.get('/', (request, response) =>{

  response.render('homepage', {todoListForTheBrowser: taskList, completedTasksForTheBrowser: completedTasks})
  // this is confusing, have to revisit
})

app.post('/addTask', (request, response)=>{
  //algorithim for what do to here:
  //get the description of the new todo item
  //
  response.send('saw your post, working on it')
})
app.listen(7777, ()=> {
    console.log('Feeling good on highway 7777')
})
