import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocaleStorage.js";


class TaskService{
    constructor(){
        ProxyState.on('createLists', saveState)
        ProxyState.on('tasks', saveState)
    }

    createTask(rawTask){
        let temp = ProxyState.tasks
        let newTask = new Task(rawTask)
        temp.push(newTask)
        ProxyState.tasks = temp
    }

    deleteTask(id){
        let temp = ProxyState.tasks
        let taskIndex = temp.findIndex(task => task.id === id)
        temp.splice(taskIndex, 1)
        ProxyState.tasks = temp
    }

    confirmDelete(id){
        let answer = confirm("Are you sure you want to delete that?")
        if(answer == true){
            let temp = ProxyState.tasks
            let taskIndex = temp.findIndex(task => task.id === id)
            temp.splice(taskIndex, 1)
            ProxyState.tasks = temp
        }else{
            "Canceled"
        }
    }
}

export const taskService = new TaskService();