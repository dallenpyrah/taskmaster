import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class CreateList{
    constructor({listTitle, id = generateId(), taskId = generateId(), task, color}){
        this.listTitle = listTitle
        this.id = id
        this.task = task
        this.taskId = taskId
        this.color = color
    }

    get Template(){
        return /*html*/ `
         <div class="col-lg-4 mt-5 ml-3 mr-3 card rounded shadow-lg text-center pr-5">
                        <h3 class="mt-2 mb-4" style="color: ${this.color};">${this.listTitle}<i class="fa fa-trash text-danger mt-1 ml-4 clickable" onclick="app.createListController.deleteList('${this.id}')" aria-hidden="true"></i></h3>
                        <form class="form-inline mb-3" name="taskForm" onsubmit="app.taskController.createTask(event, '${this.id}')">
                        <input type="text" name="task" class="form-control ml-2 w-75" minLength="3" maxLength="50" placeholder="Task" aria-describedby="helpId"  required>
                        <button class="btn btn-outline-dark ml-2" type="submit">Add Task</button>
                        </form>
                        <div class="row justify-content-between text-left" style="color: ${this.color};" id="tasks">
                            ${this.Tasks}
                         </div>
                        <div class="row justify-content-between text-left mb-3">
                        </div>  
                    </div>
        `
    }

    get Tasks(){
        let template = ''
        let tasks = ProxyState.tasks.filter(t => t.id === this.id)
        tasks.forEach(t => template += t.Template)
        return template
    }

}