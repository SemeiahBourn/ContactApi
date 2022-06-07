const express = require('express')
const ContactModel = require('../models/contactSchema')
const router=express.Router()

//* GET TODOS
router.get('/', async (req, res) => {
    try {
        const contact = await ContactModel.find()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
    }
 })
router.post('/', async(req,res) =>{
const contactData = req.body// gets the data from the request

try {
    const contact = await ContactModel.create(contactData)// create the todo in the db
    res.status(201).json(contact)
} catch (error) {
    console.error(error)
    res.status(400).json('Bad request')
}
})

//* GET TODO BY ID
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const newContactData =req.body
    try {
        const contact = await ContactModel.findById(id,newContactData)
        res.status(200).json(contact)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg:'id not found'
        })
    }
})
//* UPDATE TODO BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newContactData = req.body
     try {
         //* find the todo by the id
         const contact = await ContactModel.findByIdAndUpdate(id, newContactData, {new: true})
         res.status(202).json(contact)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A TODO
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const contact = await ContactModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Todo was deleted!'})
    } catch (error) {
        console.log(error);
    }
})
module.exports= router