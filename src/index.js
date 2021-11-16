const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

const {mongoose} = require('./database')
const app = express();

//settings
app.set('port', process.env.PORT || 3001);
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "https://shrouded-shore-33122.herokuapp.com/");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

const corsOptions = {
   origin: 'https://shrouded-shore-33122.herokuapp.com/',
   optionsSuccessStatus: 200,
   methods: "GET, PUT, POST, DELETE"
}

app.use(cors(corsOptions));


//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/productos',require('./routes/productos.routes'));
//static files
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
//empezando el server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});