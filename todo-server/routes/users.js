var express = require('express');
var router = express.Router();
var todo = require('../sevice/todo')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.get('/home', function (req, res) {

  todo.getTodo()
    .then(data => {
      res.send(data)
    })

})

router.post('/addtodo', function (req, res) {

  let content = req.body.content;
  todo.getLastEle()
    .then(data => {
      order = (data.order) + 1
      console.log(order)
      data = todo.addTodo(order, content)
      res.send({ data, order })

    })

})

router.post('/sorttodo', (req, res) => {
  let pid = req.body.pid;
  let pord = req.body.pord;
  let cid = req.body.cid;
  let cord = req.body.cord;
  
  data = todo.sortTodo(pid, pord, cid, cord)
  console.log("message:", data)
  res.send({
    message: data
  })

})





module.exports = router;
