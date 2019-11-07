const express = require('express')
const router = express.Router()
const Url = require('../model/url')
const config = require('../config/def')
router.get('/',(req,res)=>{
    res.json({message:"Home Page!"})
})

router.get('/:code',async (req,res)=>{
    const urlcode = req.params.code
    console.log(urlcode);
    return res.redirect(config.base_url + "/preview/" + urlcode) 
})
router.get('/preview/:urlcode',async (req,res)=>{
    // const long_url = req.params.long
    // res.json({message:`${long_url}`})
    // setTimeout(3000);
    // return res.redirect(long_url)

    try{
        const url  = await Url.findOne({urlCode: req.params.urlcode})
        if(url){
            console.log('Redirect Successfull!')
            url.clicks = url.clicks + 1
            await url.save()
            res.json(
            {
                message:"success",
                long_url:url.longUrl
            }
            )     
        }
        else{
            return res.status(404).json('No url found!')
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json('Server Error!')
        
    }
})
module.exports = router