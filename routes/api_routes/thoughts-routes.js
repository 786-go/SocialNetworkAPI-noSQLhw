const app = require("express").Router();
const db = require("../../models")

app.post('/api/thoughts', ({ body }, res) => {
    db.Thought.create(body)
      .then(thoughtData => {
        res.json(thoughtData);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get('/api/thoughts', (req, res) => {
    db.Thought.find({})
      .then(thoughtData => {
        res.json(thoughtData);
      })
      .catch(err => {
        res.json(err);
      });
  });

    
  app.get('/api/thoughts', (req, res) => {
    db.Thought.findById(req.params.id)
      .then(thoughtData => {
        res.json(thoughtData);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put('/api/thoughts/:id', ({ params, body }, res) => {
    db.Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(thoughtData => {
        if (!thoughtData) {
          res.json({ message: 'No db.Thought found with this id!' });
          return;
        }
        res.json(thoughtData);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.delete('/api/thoughts/:id', ({ params }, res) => {
    db.Thought.findOneAndDelete({ _id: params.id })
      .then(thoughtData => {
        if (!thoughtData) {
          res.json({ message: 'No db.Thought found with this id!' });
          return;
        }
        res.json(thoughtData);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

//update
app.post("/api/thoughts/:thoughtId/reactions", function (req, res) {
  db.Thought.findOneAndUpdate({_id:req.params.userId},
       {addToSet:{reactions:req.body}},
       {new:true}) 
      .then(function (records) {
          res.json(records)
      })
})

//update

app.delete("/api/thoughts/:thoughtId/reactions", function (req, res) {
  db.Thought.findOneAndUpdate({_id:req.params.userId},
       {$pull:{reactionID:req.params.reactionID}},
       {new:true}) 
      .then(function (records) {
          res.json(records)
      })
})

  module.exports = app