var fr=require('./read1_module');
var event=require('events');
var em=new event.EventEmitter();
em.on('readfile',fr.Read1File);
em.emit('readfile','./home.txt');