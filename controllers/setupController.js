const Todos = require('../models/todoModel.js')

module.exports = function (app) {
  app.get('/api/setupTodos', function (req, res) {

    // seet database
    const starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      }
    ]

    Todos.create(starterTodos, function (err, result) {
      res.send(result)
    })
  })
}