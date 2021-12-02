const express = require('express');
const Property = require('../models/property');

const router = express.Router();

router.get('/properties', (req, res) => {
    const query = Property.find({})

    query.select('address category originalPrice leaseData content coords favorite photos');

    query.exec((err, property) => {
        if (err) {
            res.status(500).send()
        }
        res.send(property)
    })
})


router.put('/properties/:id', async (req, res) => {
    console.log('here')
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!property) {
            return res.status(404).send();
        }

        res.send(property);
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;
