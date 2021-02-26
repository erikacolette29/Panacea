const router = require('express').Router();
const blogsCtrl = require("../controllers/blogs")

// Public Routes
router.get('/', blogsCtrl.index)

// Protected Routes
router.use(require('../config/auth'));
router.post('/', blogsCtrl.create)
router.delete('/:id', blogsCtrl.delete)

// function checkAuth(req, res, next) {
// 	if (req.user) return next();
// 	return res.status(401).json({msg: 'Not Authorized'});
// }


module.exports = router;