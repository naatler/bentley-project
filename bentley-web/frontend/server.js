const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;
const cors = require('cors');


app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));

const bentley = [
    {
        id: 1,
        name: 'Logo',
        image: '/images/bentley.png'
    },
    {
        id: 2,
        name: 'Car',
        image: '/images/home.png'
    },
    {
        id: 3,
        name: 'Intrior',
        image: '/images/interior.jpg'
    },
    {
        id: 4,
        name: 'Second Interior',
        image: '/images/interior2.jpg'
    },
    {
        id: 5,
        name: 'History',
        image: '/images/history.jpg'
    },
    {
        id: 6,
        name: 'Carhis',
        image: '/images/mobil2.jpg'
    },
    {
        id: 7,
        name: 'Founder',
        image: '/images/founder.jpg'
    },
    {
        id: 8,
        name: 'LogHis',
        image: '/images/logh.jpg'
    },
    {
        id: 9,
        name: 'Second CarHis',
        image: '/images/mobil.jpg'
    }
];

app.get('/api/data',(req,res) =>  {
    res.json(bentley);
});

app.listen(4000, () => console.log("Server berjalan di http://localhost:4000"));