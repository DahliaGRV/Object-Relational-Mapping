const router = require('express').Router();
const {Location,Traveller } = require('../../models');
const Trip = require('../../models/Trip');

router.get('/', (req, res) => {
    // find all trips
    // be sure to include its associated Products
    Trip.findAll({
    })
    .then(dbTrip => {
      res.json(dbTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.get('/:id', (req, res) => {
    // find one Trip by its `id` value
    // be sure to include its associated locations
    Trip.findByPk(req.params.id,{
    }).then(dbTrip=>{
      res.json(dbTrip);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.post('/', (req, res) => {
    // create a new trip
    Trip.create(req.body)
    .then(newTrip=>{
      res.json(newTrip)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err})
    })
  });
  
  router.put('/:id', (req, res) => {
    // update a Trip by its `id` value
    Trip.update(req.body,{
      where:{
        id:req.params.id
      }
    }).then(updatedTrip=>{
      res.json(updatedTrip)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.delete('/:id', (req, res) => {
    // delete a trip by its `id` value
   Trip.destroy({
      where:{
        id:req.params.id
      }
    }).then(delTrip=>{
      res.json(delTrip);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
      });
  });
  
  module.exports = router;