const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');
const superhero = require('superheroes');
require('dotenv').config();

const EventEmitter = require('events');
const emitter = new EventEmitter(); //! assigning eventemitter obj

const Express = require('express');
const app = Express();    //!assigning express() server

const PORT = process.env.PORT || 3000;  //!creating port to run at

//!to activate node mon, in package.json, in script {"start": "node (server file name)","dev" : "nodemon (server file name)"}
//!then,run in hpterminal > npm run dev

//!middleware will run in order until the res was not send (app.use(func))


//!connect to mongoDB..................................................................................................................

// const mongodbapi = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-paknf/endpoint/data/v1";

mongoose.connect(process.env.DB_URL) //{useNewUrlParser:true, useUniFiedTopology:true}
    .then(() => app.listen(PORT, () => {
        console.log(`server is running at port : ${PORT} and connected to DB`);
    }))
    .catch((err) => console.log(err));

//!creating schema for data store (OOP constructure function)
const Schema = mongoose.Schema; 

const dataSchema = new Schema({
    numOne: {
        type: Number,
        required: true,
    },
    numTwo: {
        type: Number,
        required: true,
    }
}, {timestamps : true});

//!creating model for data (OOP class name relate to constructor)
const Num = mongoose.model('Num', dataSchema);

//!................................................................................................................................................................................

//!create events emitter.............................................................................................................

emitter.on('msglog', () => {                   //!when the event was raised this function was called
    console.log('event listener called');
});

emitter.on('countryreq', (arg) => {             //!calling the event function with argument
    console.log('country name is', arg);
})



//  emitter.emit('msglog')  //!raise an event with event name

app.use(bodyParser.urlencoded({extended : true})); //!(3party middleware) assigning bodyparser

app.use((req,res,next) =>{                         //!(middleware) we can log all req before res was sent.but we need next() to run next function
    // console.log(superhero.random());
    // console.log("body : ", req.body);
    console.log("method : ", req.method);
    // console.log("url : ", req.url);
    // console.log("hostname : ", req.hostname);
    // console.log("path : ", req.path);
    // console.log("headers : ", req.headers);
    
    next();
})

app.use(Express.static('public'));                  //!(middleware) 


app.get('/', (req,res) => {
    // res.sendFile(__dirname+ "/index.html");       //!when we call /home dir, that page will run
    res.sendFile('./index.html', {root:__dirname});  //!{root: /} mean that change the whole dir to that route
})

app.post('/', (req,res) => {                      //!when some forms submit on that page, it will post data to this home server
    // console.log(req.body);
    var num1 = parseInt(req.body.num1);         //!to catch these data, we need npm install body-parser and assign it and req.body 
    var num2 = Number(req.body.num2);
    const result = num1 + num2

    let storeNum = new Num ({                   //!stored catched data to DB via scheme form
        numOne: num1,
        numTwo: num2
    });

    storeNum.save()                             //!save the storing process
    .then(() => {res.send('calculated : ' + result)})
    .catch((err) => {console.log(err)});
   
})


app.get('/country', (req,res) => {
    res.sendFile('./country.html', {root:__dirname});  //!{root: /} mean that change the whole dir to that route
})

app.post('/country', (req,res) => {
    const countryName = req.body.country;
    const url = 'https://restcountries.com/v3.1/name/' + countryName ;

    emitter.emit('countryreq', countryName); //!raise an event with event name and argu

    fetch(url)                                              //!getting data from restful api(fetch method)
        .then((res) => res.json())                            //!after fetch the url,we need to change res.json()/text() and return it
        .then(data => {                                     //!then,from returned JSON, get data object
            const capital = data[0].capital[0];
            res.send(`<h1> the capital city is ${capital} </h1>`); 
        })
        .catch(err => {                                    //!if we got error fetching url, we get this
            console.log(err);
            res.send('there is an error. check the country again!');
        });

    
    

    // https.get(url, (response) => {                       //!get data from restful api(http method)
    //     console.log(response.statusCode);

    //     response.on('data', (data) => {                     
    //         const countryData = JSON.parse(data);          //!change raw data to JSON format
    //         const capital = countryData[0].capital;
    //         const continent = countryData[0].continents;

    //         res.write('<h1> the capital city is ' + capital + ' </h1>')
    //         res.write('<h2> the continent is ' + continent + ' </h2>')
    //         res.send();
    //     })
    // })
})


app.use((req,res) => {                             //!(middleware) will run when nothing above was not match/run or not send any res
    res.status(404).sendFile("./error.html", {root: __dirname});
})
