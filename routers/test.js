const express = require('express')
const User = require('../models/test')
const router = new express.Router()

router.post('/tests', async (req, res) => {
    const test = new User(req.body)

    try {
        await test.save()
        res.status(201).send(User)
        res.redirect(307, './')     
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tests', async (req, res) => {
    try {
        const tests = await User.find({})
        res.send(tests)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tests/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const test = await User.findById(_id)

        if (!test) {
            return res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tests/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nombre','password','age','email']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const test = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!test) {
            return res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tests/:id', async (req, res) => {
    try {
        const test = await User.findByIdAndDelete(req.params.id)

        if (!test) {
            res.status(404).send()
        }

        res.send(test)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router