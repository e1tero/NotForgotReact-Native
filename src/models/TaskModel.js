export default class TaskModel {
    constructor(title, description, done, deadline, categoryID, priorityID) {
        this.title = title;
        this.description = description;
        this.done = done;
        this.deadline = deadline;
        this.category_id = categoryID;
        this.priority_id = priorityID;
    }
}
