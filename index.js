 
 let http=require ('http');
 const fs =require ('fs');
 http.createServer(function(req,res){
    fs.readFile ('demo.txt',function(err,data){
        if(err)
        {
            return console.log.error(err);
        }
        console.log ('Async data :'+ data.toString());
        res.write(data);
        res.end ();
    })

 })
 .listen(2000,()=> console.log("Succesfully complete"));

 //...............................................................................................................................
 let http=require ('http');
 const fs =require ('fs');
 http.createServer(function(req,res){
    fs.writeFile('demo.txt',"Guvi geek",function(err){
        if(err)
        {
            return console.log.error(err);
        }
       
        res.write("success");
        res.end ();
    })

 })
 .listen(2000,()=> console.log("Succesfully complete"));
//...............................................................................................................................

let http=require ('http');
 const fs =require ('fs');
 http.createServer(function(req,res){
    fs.appendFile('demo.txt',"Thanks to you !!!",function(err){
        if(err)
        {
            return console.log.error(err);
        }
       
        res.write("Append successfully");
        res.end ();
    })

 })
 .listen(2000,()=> console.log("Succesfully complete"));
//..................................................................................................................


let http=require ('http');
 const fs =require ('fs');
 http.createServer(function(req,res){
    fs.rename('demo.txt',"demo2.txt",function(err){
        if(err)
        {
            return console.log.error(err);
        }
       
        res.write("File Name Changed successfully");
        res.end ();
    })

 })
 .listen(2000,()=> console.log("Succesfully complete"));
//...............................................................................................................



let http=require ('http');
 const fs =require ('fs');
 http.createServer(function(req,res){
    fs.unlink("demo2.txt",function(err){
        if(err)
        {
            return console.log.error(err);
        }
       
        res.write("File Deleted successfully");
        res.end ();
    })

 })
 .listen(2000,()=> console.log("Succesfully complete"));

 //.................................................................................................................


 
let http=require ('http');
const fs =require ('fs');
http.createServer(function(req,res){
   fs.open("Newfile.txt",'w+',function(err,fd){
       if(err)
       {
           return console.log.error(err);
       }
      
       res.write("File Opened successfully");
       res.end ();
   })

})
.listen(2000,()=> console.log("Succesfully complete"));

//...................................................................................................................



 
let http=require ('http');
const fs =require ('fs');
http.createServer(function(req,res){
   fs.stat("demo2.txt",function(err,stats){
       if(err)
       {
           return console.log.error(err);
       }
      
      console.log(stats);
      res.write("Is this File :" + stats.isFile());
      res.write("Is this Direcctory :" + stats.isDirectory());
      res.end();
   })

})
.listen(2000,()=> console.log("Succesfully complete"));
