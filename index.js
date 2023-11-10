const express=require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());

const Stateroute=require("./routes/state")
const Cityroute=require("./routes/city")
const Countryroute=require("./routes/country")

const db=require('./models');
const City = require('./models/City');
db.City.addHook('beforeUpdate', (instance, options) => {
    // Find the original data before the update
    return db.City.findByPk(instance.id, { raw: true }).then(originalData => {
      // Log the changes in the log table
      return db.Log.create({
        Tablename: 'City',
        fieldname: 'City_name', // Replace with the actual field name you want to log
        oldvalue: JSON.stringify(originalData),
        updatedvalue: JSON.stringify(instance.dataValues),
      });
    });
  });
db.State.addHook('beforeUpdate', (instance, options) => {
    // Find the original data before the update
    return db.State.findByPk(instance.id, { raw: true }).then(originalData => {
      // Log the changes in the log table
      return db.Log.create({
        Tablename: 'State',
        fieldname: 'State_name', // Replace with the actual field name you want to log
        oldvalue: JSON.stringify(originalData),
        updatedvalue: JSON.stringify(instance.dataValues),
      });
    });
  });

db.sequelize.sync().then((res)=>{
    app.listen(3001,()=>{
        console.log("Backend Connected")
    })
    
})

  

app.use("/api/state",Stateroute);
app.use("/api/country",Countryroute);
app.use("/api/city",Cityroute);


