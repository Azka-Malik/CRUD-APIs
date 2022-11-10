const { response, request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const pool = require('./dbConn')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


//GET ALL TASKS 
app.get('/testdb', async (request, response) => {
  let res =  await pool.query('select * from public.todoList')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json({todo: res.rows})
})


//GET ALL TASKS WITH FILTER
app.get('/donetask', async (request, response) => {
  let res =  await pool.query('select * from public.todoList FILTER WHERE done=true')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json(res.rows)
})


//GET COUNT TOTAL,DONE,PENDING
app.get('/todo/count', async (request, response) => {
  let res =  await pool.query('select count(*) as TotalTasks, count(*) FILTER (WHERE done=true) as DoneTasks, count(*) FILTER (WHERE done=false) as PendingTasks from public.todoList')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json(res.rows)
})

//CREATE A TASK
app.post('/todo/create', async (req, res) =>{
  let result = await pool.query('INSERT INTO public.todoList(id, task, done) VALUES($1, $2, $3)', [req.body.id, req.body.task, req.body.done])
  console.log(result)
  res.json({
    "status": "Task created"
  })
})

//UPDATE A TASK
app.put('/todo/update', async (req,res) =>{
  let result = await pool.query('UPDATE public.todoList SET task = $2 WHERE id = $1', [req.body.id, req.body.task])
  console.log(result);
  res.json({
    "status": "Task Updated"
  })
})


//DELETE A TASK
app.delete('/todo/delete', async (req,res) =>{
  let result = await pool.query('DELETE FROM public.todoList WHERE id = $1', [req.body.id])
  console.log(result);
  res.json({
    "status": "Task Deleted"
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


