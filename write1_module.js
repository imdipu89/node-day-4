var fs=require('fs');
var writefile={
    write1file:function(fn){
        fs.writeFile(fn,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log("no error");
            }
        });
    }
}
module.exports=writefile;