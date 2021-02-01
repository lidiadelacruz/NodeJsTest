const router = require('express').Router()
const creditorData = require('../db/model/creditorData')

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

router.get('/search', async(req,res,next) =>{
  try{
    const data = await creditorData.findAll({
      where:{
        balance: {
          [Op.gt] : 200
        },
      minPaymentPercentage:{
         [Op.lte] : 29.99
      }
      }
    })
  } catch(error){
    next(error)
  }
})


module.exports = router
