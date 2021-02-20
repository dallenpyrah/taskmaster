import CreateListController from "./Controllers/CreateListController.js";
import TaskController from "./Controllers/TaskController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocaleStorage.js";

class App {
  // valuesController = new ValuesController();

    createListController = new CreateListController();

    taskController = new TaskController();
}

window["app"] = new App();
loadState()