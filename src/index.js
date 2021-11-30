const express = require('express');
require('./db/mongoose');
const Property = require('./models/property');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/properties', (req, res) => {
    const query = Property.find({})

    query.select('address category originalPrice leaseData content coords favorite photos');

    query.exec((err, property) => {
        if (err) {
            res.status(500).send()
        }
        res.send(property)
    })
})

app.put('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        console.log(property)
        if (!property) {
            return res.status(404).send();
        }

        res.send(property);
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

