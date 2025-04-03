import { Sequelize } from "sequelize-typescript";


const connection = new Sequelize({
  database: 'gradtrack_db',
  dialect: 'mysql',
  username: 'root',
  password: '123456',
  storage: ':memory:',
  models: [

  ]
});

async function connectionDB() {
  console.log("hola");
}

export default connectionDB;
