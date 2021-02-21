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

    addTask(newId){
        let temp = ProxyState.tasks
        let task = temp.find(task=> task.newId === newId)
        task.quantity = "Complete!"
        ProxyState.tasks = temp
    }

    deleteTask(newId){
        let temp = ProxyState.tasks
        let taskIndex = temp.findIndex(task => task.newId === newId)
        temp.splice(taskIndex, 1)
        ProxyState.tasks = temp
    }


    confirmDelete(newId){
        let answer = confirm("Are you sure you want to delete that?")
        if(answer == true){
            let temp = ProxyState.tasks
            let taskIndex = temp.findIndex(task => task.newId === newId)
            temp.splice(taskIndex, 1)
            ProxyState.tasks = temp
        }else{
            "Canceled"
        }
    }

    confirmComplete

}

export const taskService = new TaskService();