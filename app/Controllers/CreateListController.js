import { ProxyState } from "../AppState.js"
import { createListService } from "../Services/CreateListService.js"
import { taskService } from "../Services/TaskService.js"

function _drawList(){
    let createElem = document.getElementById('list-temp')
    let template = ''
    ProxyState.createLists.forEach(list => template += list.Template)
    createElem.innerHTML = template
}


export default class CreateListController{
    constructor(){
        console.log("Hello from the create list controller.")
        ProxyState.on("createLists",_drawList)
        ProxyState.on('tasks',_drawList)
        ProxyState.on('completedTasks',_drawList)
    }

    createList(event){
        event.preventDefault()
        let form = event.target
        let rawList = {
            listTitle: form.listTitle.value,
            color: form.color.value
        }
        createListService.createList(rawList)
        console.log(ProxyState.createLists)
    }

    deleteList(id){
        createListService.deleteList(id)
        taskService.deleteTask(id)
        console.log(ProxyState.createLists)
    }
}