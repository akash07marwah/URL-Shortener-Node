const express = require('express')
const router = express.Router()
const shortid = require('shortid')
const valid_url = require('valid-url')
const config = require('../config/def')
const Url = require('../model/url')  

router.get('/',(req,res)=>{
    res.json({message:"Home Page 2!"});
})

router.post('/micro',async (req,res)=>{
    var longUrl = req.body.longUrl
    const baseUrl = config.base_url
    console.log(baseUrl)
    console.log(longUrl)
    
    if((!longUrl.startsWith("https://"))){
        longUrl  = "https://" + longUrl
    }else if((!longUrl.startsWith("http"))){
        longUrl  = "https://" + longUrl
    }
    console.log(longUrl)
    if(!valid_url.isUri(baseUrl)){
        return res.status(401).json('Invalid Base URL!')
    }
    const urlCode = shortid.generate()
    console.log(urlCode)
     if(valid_url.isHttpUri(longUrl)|| valid_url.isHttpsUri(longUrl))
     {  try{
        let url = await Url.findOne({longUrl})
        if(url){
            return res.json(url)
        }
        else{
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
        console.log(err);
        res.status(500).json('Server Error')
    }
    }
    else{
            res.status(401).json('Invalid URL!')
    }

    
})
router.post('/micro/:code',async (req,res)=>{
    
    const urlCode = req.params.code

    if(urlCode.length <5 ){
        return res.json("URL Code can't be less than 5 letters!")
    }
    var longUrl = req.body.longUrl
    const baseUrl = config.base_url
    console.log(baseUrl)
    console.log(longUrl)
    
    if((!longUrl.startsWith("https://"))){
        longUrl  = "https://" + longUrl
    }else if((!longUrl.startsWith("http"))){
        longUrl  = "https://" + longUrl
    }
    console.log(longUrl)
    if(!valid_url.isUri(baseUrl)){
        return res.status(401).json('Invalid Base URL!')
    }
    console.log(urlCode)
     if(valid_url.isHttpUri(longUrl)|| valid_url.isHttpsUri(longUrl))
     {  try{
        let url = await Url.findOne({longUrl})
        if(url){
            return res.json(url)
        }
        else{
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
        console.log(err);
        res.status(500).json('Server Error')
    }
    }
    else{
            res.status(401).json('Invalid URL!')
    }
    
})
module.exports = router