module.exports.chat=function(application,req,res){   
    var dadosform=req.body;  
    req.assert('apelido','Nome ou apelido é obrigátorio').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 a 15 caracters').len(3,15);
    var errors=req.validationErrors();  
    if(errors.length >0){
        res.render('index',{errors:errors})      
    }else{
        application.get('io').emit(
            'msgClient',{apelido:dadosform.apelido,mensagem:'Entrou no chat'})
        res.render("chat",{dadosform:dadosform})      
    }
    
}

