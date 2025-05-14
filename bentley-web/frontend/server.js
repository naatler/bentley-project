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
        name: 'Log',
        image: '/images/logh.jpg'
    },
    {
        id: 9,
        name: 'Second CarHis',
        image: '/images/mobil.jpg'
    },
    {
        id: 10,
        name: 'About Media',
        image: '/images/aboutmedia.jpg'
    },
    {
        id: 11,
        name: 'Sec About Media',
        image: '/images/aboutmedia2.jpg'
    },
    {
        id: 12,
        name: 'EWB Mulliner',
        image: '/images/EWB.png'
    },
    {
        id: 13,
        name: 'BG EWB',
        image: '/images/EWBBG.jpg'
    },
    {
        id: 14,
        name: 'Spur Flying',
        image: '/images/Spur.png'
    },
    {
        id: 15,
        name: 'SpurBG',
        image: '/images/SpurBG.jpg'
    },
    {
        id: 16,
        name: 'GTC Azure',
        image: '/images/GTC.png'
    },
    {
        id: 17,
        name: 'GTCBG',
        image: '/images/GTCBG.jpg'
    },
    {
        id: 18,
        name: 'GT',
        image: '/images/GT.png'
    },
    {
        id: 19,
        name: 'GTBG',
        image: '/images/GTBG.jpg'
    },
    {
        id: 20,
        name: 'Side Ewb',
        image: '/images/ewbside.png'
    },
    {
        id: 21,
        name: 'Side Spur',
        image: '/images/spurside.png'
    },
    {
        id: 22,
        name: 'Side Azure',
        image: '/images/azureside.png'
    },
    {
        id: 23,
        name: 'Side Gt',
        image: '/images/gtside.png'
    },
];

app.get('/api/data',(req,res) =>  {
    res.json(bentley);
});

app.listen(4000, () => console.log("Server berjalan di http://localhost:4000"));