import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js"


export default class Task{
    constructor({listTitle = "nothing" , id = generateId(), newId = generateId(), task, quantity = "", allTasks = 0, uncompletedTasks = 0, completedTask = false}){
        this.listTitle = listTitle,
        this.id = id,
        this.newId = newId
        this.task = task,
        this.quantity = quantity,
        this.allTasks = allTasks,
        this.uncompletedTasks = uncompletedTasks,
        this.completedTask = completedTask
    }

    get Template(){
        return /*html*/ `
       <div class="col-6 justify-content-around">
        <h6 class="mt-2"><i class="fa fa-circle-o mr-2" aria-hidden="true"></i>${this.task}</h6>
            </div>
            <div class="col-3"> <h6 class="text-success mt-2"><span class="badge badge-success">${this.quantity}</span></h6></div>
            <div class="col-3">
            <p class="form-check mt-6 form-check-inline">
            <input class="form-check-input ml-2 text-success" ${this.completedTask ? 'checked' : '' } onclick="app.taskController.addTask('${this.newId}')" type="checkbox" name="checkbox" id="myCheck" value="myChecked">
            <i class="fa fa-trash text-danger ml-1 mr-3 clickable" onclick="app.taskController.confirmDelete('${this.newId}')" aria-hidden="true"></i>
             </p>
            </div>
       `
    }

    get AllTasks(){
        return /*html*/ `
            ${this.allTasks}
        `
    }

    get CompletedTasks(){
        return /*html*/ `
            ${this.allTasks}
        `
    }
}