const router = require('express').Router()
const creditorData = require('../db/model/creditorData')

// Please design and implement a web API using node.js to have following features:

// 3.     Add a new creditor entry

// 4.     Update an existing creditor entry (partial or full update)

// 5.     Implement credit analysis endpoint to return data that meet following criteria:

// a.     Creditor balance should be over 2000

// b.     Creditor min pay percentage shouldn’t exceed 29.99%

// GET all creditor data with total balance and average min pay percentage
router.get('/', async (req,res,next)=>{
  try {
    const allCreditorData = await creditorData.findAll()
    res.send(allCreditorData)
  } catch (error) {
    next(error)
  }
})

//Get creditor data by creditor name

router.get('/:firstName', async(req,res,next) =>{
  try{
    const creditorName = await creditorData.findAll({
      attributes: "firstName"
    })
    res.send(creditorName)
  } catch (error) {
    next(error)
  }
})

//Add a new creditor entry
router.post('/', async(req,res,next)=>{
  try{
    const newEntry = await creditorData.create(req.body)
    res.send(newEntry)
  } catch(error) {
    next(error)
  }
})




module.exports = router
