import { ProxyState } from "../AppState.js";
import CreateList from "../Models/CreateList.js";
import Task from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.createLists,
        tasks: ProxyState.tasks
    }))

}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.createLists = data.lists.map(rawList => new CreateList(rawList))
        ProxyState.tasks = data.tasks.map(rawTask => new Task(rawTask))
    }
}