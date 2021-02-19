var fs=require('./read_module');
var event=require('events');
var em=new event.EventEmitter();
em.on('readFile',fs.readfile);
em.emit('readFile','./home.txt');