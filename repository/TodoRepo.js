const pool =require('../dbconn')

class TodoRepo{
    async getAllTasks(){
        return await pool.query('select * from public.todoList')
    }
    async getTaskRepo(){
        return await pool.query('select * from public.todoList WHERE id=5')
    }
    async createTaskRepo(id,task,done){
        return await pool.query('INSERT INTO public.todoList(id, task,done) VALUES ($1,$2,$3)',[id,task,done]);
    }
    async updateTaskRepo(id,task){
        return await pool.query('UPDATE public.todoList SET task = $2 WHERE id = $1', [id,task]);
    }
    async deleteTaskRepo(id){
        return await pool.query('DELETE FROM public.todoList WHERE id = $1', [id])
    }
    async doneTaskRepo(){
        return await pool.query('select * from public.todoList FILTER WHERE done=true')
    }
    async countTaskRepo(){
        return await pool.query('select count(*) as TotalTasks, count(*) FILTER (WHERE done=true) as DoneTasks, count(*) FILTER (WHERE done=false) as PendingTasks from public.todoList')
    }
}
module.exports=TodoRepo;