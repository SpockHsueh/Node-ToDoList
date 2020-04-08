const Todos = require('../models/todoModel.js')
const bodyParser = require('body-parser')

module.exports = function (app) {
  // middleware 
  // bodyparse will parse out JSON 

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/todos/:uname', function (req, res) {
    Todos.find({ username: req.params.uname }, function (err, todos) {
      if (err) throw err
      res.send(todos)
    })
  })

  app.get('/api/todo/:id', function (req, res) {
    console.log('id', req.params.id)
    Todos.findById({ _id: req.params.id }, function (err, todo) {
      if (err) throw err
      res.send(todo)
    })
  })

  app.post('/api/todo', function (req, res) {
    if (req.body.id) {
      const body = req.body
      Todos.findByIdAndUpdate(req.body.id, {
        todo: body.todo,
        isDone: body.isDone,
        hasAttachment: body.hasAttachment
      }, function (err, todo) {
        if (err) throw err
        res.send('Success')
      })
    } else {
      const newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      })
      newTodo.save(function (err) {
        if (err) throw err
        res.send('Success')
      })
    }
  })

  app.delete('/api/todo', function (req, res) {
    Todos.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err
      res.send('Success')
    })
  })

}