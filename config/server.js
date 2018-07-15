/*imports*/
var Express =require('express')
var consign=require('consign')
var body_parser=require('body-parser')
var express_validator=require('express-validator')

/*start express*/
var app=Express();

/*config ejs for engine of views*/
app.set('view engine','ejs');
app.set('views','./app/views');

/*config middleware static files*/
app.use(Express.static('./app/public'));

/*config middleware body-parser*/
app.use(body_parser.urlencoded({extended:true}));

/*config middleware express-validator*/
app.use(express_validator())

/*config consign auto-load*/
consign()
    .include('./app/routers')
    .then('./app/controllers')
    .then('./app/models')    
   
    .into(app)

/* export express */ 
module.exports=app;

