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

app.get('/testdb', async (request, response) => {
  let res =  await pool.query('select * from public.todoList')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json({todo: res.rows})
})

app.get('/donetask', async (request, response) => {
  let res =  await pool.query('select * from public.todoList WHERE done=true')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json({todo: res.rows})
})

app.get('/count', async (request, response) => {
  let res =  await pool.query('select count(*) as Total-Tasks, count(*) FILTER (WHERE done=true) as Done-Tasks, count(*) FILTER (WHERE done=false) as Pending-Tasks from public.todoList')
  console.log(res)
  //response.json({info: 'Node.js, Express, and Postgres API'})
  response.json({todo: res.rows})
})



app.post('/todo/create', async (req, res) =>{
  let result = await pool.query('INSERT INTO public.todoList(id, task, done) VALUES($1, $2, $3)', [req.body.id, req.body.task, req.body.done])
  console.log(result)
  res.json({
    "status": "Task created"
  })
})

app.put('/todo/update', async (req,res) =>{
  let result = await pool.query('UPDATE public.todoList SET done = $3 WHERE id = $1', [req.body.id, req.body.task, req.body.done])
  console.log(result);
  res.json({
    "status": "Task Updated"
  })
})

app.put('/updateID', async (req,res) =>{
  let result = await pool.query('ALTER TABLE public.todoList SET id SERIAL PRIMARY KEY',[req.body.id])
  console.log(result);
  res.json({
    "status": "Task Updated"
  })
})



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


