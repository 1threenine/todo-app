const { todolist } = require('../model/todolist')
const { use } = require('../routes/index');

function getTodo() {
    return todolist.find({}).sort({ order: 1 }).select("order content")
        .then(data => {
            if (data) {
                return {
                    statusCode: 200,
                    data: data
                }
            }
        })


}

function addTodo(order, content) {

    const newTodo = new todolist({
        order, content
    });
    newTodo.save();

    return ({
        statusCode: 200,
        message: "Todo added"
    });
}


function getLastEle() {

    le = todolist.findOne().sort({ order: -1 }).select("order")
    return le

}

function sortTodo(pid, pord, cid, cord) {
  
    temp = pord;
    pord = cord;
    cord = temp;

    todolist.updateOne({ _id: pid }, { order: pord },
        function (err, docs) {
            if (err) {
                console.log(err)

            }
            else {
                console.log(docs);

            }
        })
        todolist.updateOne({ _id: cid }, { order: cord },
            function (err, docs) {
                if (err) {
                    console.log(err)
    
                }
                else {
                    console.log(docs);
    
                }
            })

    return "Data base Updated";

}

module.exports = {
    getTodo,
    addTodo,
    getLastEle,
    sortTodo

}