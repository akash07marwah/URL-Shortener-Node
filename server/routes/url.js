const express = require('express')
const router= express.Router()
const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')

const Url = require('../model/url') 

router.get('/',(req, res) => {
    res.json({message : "Home Page"});
})

router.post('/shorten',async (req,res)=>{
    const longUrl = req.body.longUrl
    const baseUrl = config.get('baseUrl')
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid Base Url!')
    }
    const urlCode = shortid.generate()
    console.log(longUrl);
    
    console.log(baseUrl);
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl})
            if(url){
                return res.json(url)
            }else{
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url ({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date:new Date()
                }) 
                await url.save()
                res.json(url)
            }
        }
        catch(err){
            console.error(err)
            res.status(500).json('Server Error')
        }
    }
    else{
        res.status(401).json('Invalid LongUrl!')
    }
})


module.exports = router