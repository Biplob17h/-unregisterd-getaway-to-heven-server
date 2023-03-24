const express = require('express');
const colors = require('colors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 5000;

const food = require('./Food.json')

app.get('/', (req, res) => {
    res.send('getaway to heven server is running')
})

// id:getaway-to-heven
// pass:JQSm49k2s2KWLElN



const uri = "mongodb+srv://getaway-to-heven:JQSm49k2s2KWLElN@cluster0.ro3yhcf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const foods = client.db('GetawayToHeven').collection('Food')

        app.get('/food', async(req, res)=>{
            const query = 'sup'
             let askdFood = []
            food.forEach(name => {
               name.category.forEach(element => {
                if(element === query){
                   askdFood = [...askdFood, name]
                }
               });
            });
            res.send(askdFood)
        })
    }
    finally {

    }
}

run().catch((error) => console.error(error))



app.listen(port, () => {
    console.log('server is running on port'.bold.white, port)
})