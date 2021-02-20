import { generateId } from "../Utils/GenerateId.js";


export default class Task{
    constructor({listTitle = "nothing" , id = generateId(), task}){
        this.listTitle = listTitle,
        this.id = id,
        this.task = task
    }

    get Template(){
        return /*html*/ `
        <div class="col-12 justify-content-around">
        <p class="mt-2 form-check form-check-inline">${this.task}<input class="form-check-input ml-2 mt-1" type="checkbox" name="checkbox" id="myCheck" value="checkedValue">
        <i class="fa fa-trash text-danger mt-1 ml-1 clickable" onclick="app.taskController.confirmDelete('${this.id}')" aria-hidden="true"></i></p>
        </div>
        `
    }
}