const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {


  try {
    const newComment = await Comment.create({
      
      description: req.body.description,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
      
    });

    resjson(newComment);
  } catch (err) {
    res.json(err);
  }

  
});

module.exports = router;