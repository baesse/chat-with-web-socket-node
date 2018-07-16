var Server = require('./config/server');


var server=Server.listen(80,function(){
    console.log('Server is running... on port 80')
})
var io=require('socket.io').listen(server);
Server.set('io',io)
/* create web socket conection*/
io.on('connection',function(socket){
  
    socket.on('msgparaservidor',function(data){
        socket.emit('msgClient',{apelido:data.apelido, mensagem: data.mensagem})
        socket.broadcast.emit('msgClient',{apelido:data.apelido, mensagem: data.mensagem})
    })

    
})

