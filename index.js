const express = require ("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT || 3000;

app.listen(port, function(){
    
})

/**
 * 
 * var 
 * const
 * let
 * /