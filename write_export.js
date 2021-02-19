var fm=require("./write_module");
var event=require('events');
var em=new event.EventEmitter();
em.on("writeFile",fm.writeFileData);
em.emit("writeFile","./home.txt");