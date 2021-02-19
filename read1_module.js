var fs=require('fs');
var read1={
    Read1File:function(fn){
        fs.readFile(fn,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log("no error");
            }
        });
    }
}
module.exports=read1;