
// const updateLog=(req,res)=>{
//     try{

const log = require("./models/log");

//     }
// }
log.findAll({ where: { tableName: 'City' } }).then(logEntries => {
    logEntries.forEach(entry => {
      console.log('Log Entry:', entry.dataValues);
    });
  });
  