const router = require('express').Router();
const {Trip } = require('../../models');
const Location = require('../../models/Location');

router.get('/', (req, res) => {
    // find all locations
    // be sure to include its associated 
    Location.findAll({
        include:[Trip]
    })
    .then(dbLocation => {
      res.json(dbLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.get('/:id', (req, res) => {
    // find one location by its `id` value
    // be sure to include its associated Trips
    Location.findByPk(req.params.id,{
        include:[Trip]
    }).then(dbLocation=>{
      res.json(dbLocation);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.post('/', (req, res) => {
    // create a new location
    Location.create(req.body)
    .then(newLocation=>{
      res.json(newLocation)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err})
    })
  });
  
  router.put('/:id', (req, res) => {
    // update a location by its `id` value
    Location.update(req.body,{
      where:{
        id:req.params.id
      }
    }).then(updatedLocation=>{
      res.json(updatedLocation)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.delete('/:id', (req, res) => {
    // delete a location by its `id` value
   Location.destroy({
      where:{
        id:req.params.id
      }
    }).then(delLocation=>{
      res.json(delLocation);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
      });
  });
  
  module.exports = router;
  