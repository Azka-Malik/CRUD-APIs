const TodoRepo = require('../repository/TodoRepo')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json(res.rows)
    }

    async getTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getTaskRepo();
        response.json(res.rows)
    }

    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,request.body.task, request.body.done);
        response.json({
            "status": "Task created"
            })
    }

    async updateTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateTaskRepo(request.body.id,request.body.task);
        response.json({
            "status": "Task Updated"
            })
    }

    async deleteTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.deleteTaskRepo(request.body.id);
        response.json({
            "status": "Task Deleted"
            })
    }

    async doneTasks(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.doneTaskRepo();
        response.json(res.rows)
    }

    async countTasks(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.countTaskRepo();
        response.json(res.rows)
    }
    
}
module.exports = TodoController;