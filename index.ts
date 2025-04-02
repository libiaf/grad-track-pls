import express, {Express, Request, Response} from 'express';

const app:Express = express();
const morgan = require('morgan')

const port = 3000;

app.use(morgan('dev'))

app.get('/', (req:Request, res:Response) => { 
   res.send('Estas en la ruta raíz de la API') 
}) 
app.listen(port, () => { 
console.log(`Example app listening on port ${port}`) 
}) 


