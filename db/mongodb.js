const mongoose = require('mongoose');
const url = `mongodb+srv://axel:O7fGvJrnQwp5GMbM@cluster0.jtedoaq.mongodb.net/store?retryWrites=true&w=majority`;

mongoose.connect(url, {}, ()=>{
    console.log("--------------------")
    console.log("Conexión a la base de datos exitosa")
    console.log("--------------------")
})

module.exports = mongoose