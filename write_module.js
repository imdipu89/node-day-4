var fs=require('fs');
var content="i m home";
var writemodule={
    writeFileData:function(fn){
        fs.writeFile(fn,content,function(err,data){
            if(err){
                console.log("error");
            }else{
                console.log("no error")
            }
        });
    }
}
module.exports=writemodule;