const Order = require('../models/Order')

const router = require('express').Router()
const {confirmDelivery} = require('../utils/index.js')

router.post('/',async(req,res)=>{
  const newOrder =  new  Order(req.body)
  try{
    await newOrder.save()
    res.json(newOrder)
  }catch(err){
    res.status(500).send(err)
  }
})

router.get('/',async (req,res)=>{
  try{
    const orders = await Order.find()
    res.json(orders)
  }catch (err){
    res.status(500).send(err)
  }
})

router.post('/:id',async (req,res)=>{
  const id = req.params.id
  const status = req.body.status
  
  console.log(req.body)
  try{
    const order = await Order.findById(id)
    if(!order) throw new Error('Invalid id')
    order.status = status
    if(status==3){
      const res = await confirmDelivery(order.agreementId)
      console.log('dd',res)
    }
    await order.save()
    console.log(order)
    res.json(order)
  }catch(err){
    res.status(500).send(err)
  }
})

module.exports = router



