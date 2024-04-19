const {Router} = require("express")
const{ getToDo , saveToDo, deleteToDo, updateToDo }=require("../controllers/TodoController")
const { updateSearchIndex } = require("../models/ToDoModel")

const router = Router()
router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)
module.exports=router;