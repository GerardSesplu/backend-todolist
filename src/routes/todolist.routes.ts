import { Router } from 'express';
import { todolistController } from './../controllers/todolist.controller';

class TodolistRoutes {

    public router: Router = Router();

    constructor(){

        // this.router.get('/', todolistController.index);

        // this.router.get('/', todolistController.individual);

        // this.router.post('/', todolistController.create);

        // this.router.put('/:id', todolistController.update);

        // this.router.delete('/:id', todolistController.destroy);
    }
}

const todolistRoutes = new TodolistRoutes;

export default todolistRoutes;


