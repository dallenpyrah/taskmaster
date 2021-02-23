import { ProxyState } from "../AppState.js";
import CreateList from "../Models/CreateList.js";
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
        if(task.completedTask == false){
            task.completedTask = true
        }else if(task.completedTask == true){
            task.completedTask = false
        }
       
        if(task.allTasks >= 0){
            task.allTasks -= 1
            task.quantity = "Complete!"}
            else{
                task.allTasks = 0
                task.quantity = ""
            }
        
        ProxyState.tasks = temp
    }


    deleteTask(id){
        let temp = ProxyState.tasks
        let tasks = temp.find(task => task.id === id)
        // @ts-ignore
        temp = temp.filter(t => !tasks.include(id))
        ProxyState.tasks = temp
    }


    confirmDelete(newId){
        let answer = confirm("Are you sure you want to delete that task?")
        if(answer == true){
            let temp = ProxyState.tasks
            let taskIndex = temp.findIndex(task => task.newId ===  newId)
            temp.splice(taskIndex, 1)
            ProxyState.tasks = temp
        }else{
            "Canceled"
        }
    }

}

export const taskService = new TaskService();