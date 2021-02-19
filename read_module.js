var fs=require('fs')
var read_module={
    readfile:function(fn){
        fs.readFile(fn,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log("no error");
            }
        });
    }
}
module.exports=read_module;