import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

export default class TaskController{
    constructor(){
        console.log("Hello from the create list controller.")
        console.log(ProxyState.tasks)
    }

    createTask(event, id){
        event.preventDefault()
        let form = event.target
        let rawTask = {
            task: form.task.value,
            id: id
        }
        taskService.createTask(rawTask)
        console.log(ProxyState.tasks)
    }

    confirmDelete(id){
        taskService.confirmDelete(id)
    }

    deleteTask(id){
        taskService.deleteTask(id)
    }
}