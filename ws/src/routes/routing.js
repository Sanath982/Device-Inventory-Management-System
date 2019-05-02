const express = require('express');
const SystemRouter = express.Router();
const SystemService = require('../service/account');

SystemRouter.get('/Details/:id/:type',(req,res,next)=>{
    return SystemService.getProducts(req.params.id,req.params.type).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })

 SystemRouter.put('/update/:id',(req,res,next)=>{
    return SystemService.updateDetails(req.params.id).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })

 SystemRouter.put('/update/:id/:user',(req,res,next)=>{
    return SystemService.updateUserDetails(req.params.id,req.params.user).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })
 
 SystemRouter.put('/create/:id/:name',(req,res,next)=>{
    return SystemService.createSystem(req.params.id,req.params.name).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })

 SystemRouter.put('/delete/:id',(req,res,next)=>{
    return SystemService.deleteSystem(req.params.id).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })

 SystemRouter.get('/display/',(req,res,next)=>{
    return SystemService.displaySystem(req.params.id).then(DetailData=>{
        res.json(DetailData);
    }).catch(err => next(err))
 })
 
 module.exports = SystemRouter;