import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"


export default class CreateList{
    constructor({listTitle, id = generateId(), task}){
        this.listTitle = listTitle
        this.id = id
        this.task = task
    }

    get Template(){
        return /*html*/ `
         <div class="col-lg-3 mt-3 ml-3 card rounded shadow-lg text-center">
                        <h3 class="mt-2 mb-2">${this.listTitle}<i class="fa fa-trash text-danger mt-1 ml-2 clickable" onclick="app.createListController.deleteList('${this.id}')" aria-hidden="true"></i></p></h3>
                        <form class="form-inline mb-3" onsubmit="app.taskController.createTask(event, '${this.id}')">
                        <input type="text" name="task" class="form-control ml-2" minLength="3" maxLength="50" placeholder="Task" aria-describedby="helpId">
                        <button class="btn btn-success ml-2" type="submit">Add Task</button>
                        </form>
                        <div class="row" id="tasks">
                            ${this.Tasks}
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