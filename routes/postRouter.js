import { Router } from 'express'; const router = Router();
import { getPost, getPosts, createPost, editPost, deletePost } from '../controllers/postController.js';

router.route('/').get(getPosts).post(createPost);
router.route('/:id').get(getPost).patch(editPost).delete(deletePost);

export default router;