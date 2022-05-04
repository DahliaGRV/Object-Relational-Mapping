const router = require('express').Router();
const {Trip } = require('../../models');
const Traveller = require('../../models/Traveller');

router.get('/', (req, res) => {
    // find all travellers
    // be sure to include its associated 
    Traveller.findAll({
      include:[Trip]
    })
    .then(dbTraveller => {
      res.json(dbTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.get('/:id', (req, res) => {
    // find one traverller by its `id` value
    // be sure to include its associated
    Traveller.findByPk(req.params.id,{
        include:[Trip]
    }).then(dbTraveller=>{
      res.json(dbTraveller);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.post('/', (req, res) => {
    // create a new traveller
    Traveller.create(req.body)
    .then(newTraveller=>{
      res.json(newTraveller)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err})
    })
  });
  
  router.put('/:id', (req, res) => {
    // update a traveller by its `id` value
    Traveller.update(req.body,{
      where:{
        id:req.params.id
      }
    }).then(updatedTraveller=>{
      res.json(updatedTraveller)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
    });
  });
  
  router.delete('/:id', (req, res) => {
    // delete a traveller by its `id` value
   Traveller.destroy({
      where:{
        id:req.params.id
      },
      include:[Trip]
    }).then(delTraveller=>{
      res.json(delTraveller);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({msg:"an error occured",err});
      });
  });
  
  module.exports = router;