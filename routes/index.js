const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../routes/auth')

router.get('/', ensureGuest, (req, res) => {
    res.render('login')
})

router.get("/log", ensureAuth, async(req, res) => {
    res.render('index', { userinfo: req.user })
})

router.get('/', (req, res) => {
    res.render('fdrsForm')
})

module.exports = router