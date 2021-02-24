const Express = require('express');
const router = Express.Router();
const Anchor = require('../model/Anchor');
const ObjectId = require('mongodb').ObjectID;

router.post('/post-anchor', async (req, res) => {
  const data = req.body;
  const newAnchor = new Anchor({
    anchor: req.body.anchor,
  });
  newAnchor
    .save()
    .then(() => {
      console.log('anchor saved succesfully');
      res.send({msg: 'sucessfully saved'});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/get-anchor', (req, res) => {
  Anchor.find().then((data) => {
    res.send(data);
  });
});

router.delete('/delete', async (req, res) => {
  const data = req.body;

  var id = ObjectId(data.id);
  if (data) {
    Anchor.findByIdAndDelete({_id: id}, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        res.send({msg: 'delete successfully'});
      }
    });
  }
});

router.put('/update', (req, res) => {
  const data = req.body;
  var id = ObjectId(data.id);
  Anchor.findByIdAndUpdate(id, {anchor: data.data}, {new: true})
    .then((response) => {
      res.json({data: response});
    })
    .catch((err) => {
      res.status(400).json({err: 'Unable to update the Database'});
    });
});

module.exports = router;
