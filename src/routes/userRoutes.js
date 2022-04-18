import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // list all users
// router.get('/:id', userController.show); // show user data

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index = list the users - GET
store/create = create a new user - POST
delete = delete a user - DELETE
show = show a user - GET
update = update a user - PATCH (one value) or PUT (all values)
 */
