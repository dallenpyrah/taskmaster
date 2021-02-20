import { ProxyState } from "../AppState.js";
import CreateList from "../Models/CreateList.js";
import { saveState } from "../Utils/LocaleStorage.js";


class CreateListService{
    constructor(){
        console.log("Hello from the create list service")
        ProxyState.on('createLists',saveState)
        ProxyState.on('tasks',saveState)
    }

    createList(rawList){
        let validate = document.forms['myForm']['listTitle'].value;
        if(validate == ''){
            alert("List must have a name!");
            return false
        }
        let temp = ProxyState.createLists
        let newList = new CreateList(rawList)
        temp.push(newList)
        ProxyState.createLists = temp
    }

    deleteList(id){
        let temp = ProxyState.createLists
        let listIndex = temp.findIndex(list => list.id === id)
        temp.splice(listIndex, 1)
        ProxyState.createLists = temp
    }
}

export const createListService = new CreateListService();