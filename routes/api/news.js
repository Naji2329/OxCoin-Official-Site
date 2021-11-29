const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const New = require('../../models/New');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/news
// @desc     Create a new
// @access   Private
router.post(
    '/',
    // auth,
    // check('text', 'Text is required').notEmpty(),
    async (req, res) => {        
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        // const user = await User.findById(req.user.id).select('-password');
        const newNew = new New({
          title: req.body.title,
          comment: req.body.comment,
          name: req.body.name,
          date: req.body.date
        });
  
        const OXnew = await newNew.save();
  
        res.json(OXnew);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

// @route    GET api/news
// @desc     Get all news
// @access   Private
router.get('/', async (req, res) => {
  try {
    const news = await New.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
  try {
    const OXnew = await New.findById(req.params.id);

    if (!OXnew) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(OXnew);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


module.exports = router;
