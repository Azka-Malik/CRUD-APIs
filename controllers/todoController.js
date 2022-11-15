const TodoRepo = require('../repository/TodoRepo')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }

    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task created"
            })
    }
}

module.exports = TodoController;