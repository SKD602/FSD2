var expr=require('express');
var app=expr();
var path=require('path');

const staticPath=path.join(__dirname,'../practice');  
console.log(`staticPath: ${staticPath}`)
app.use(expr.static(staticPath,{index:'p2.html'}))

app.get('/p2',(req,res)=>{
    const response={
        u:req.query.uname,
        p:req.query.pwd
    }
    // console.log(`JSON-response: ${JSON.stringify(response)}`)
    res.set('content-type','text/html');
    res.write('<b style="color:red;font-size:50px;">Username:</b><i style="font-size:40px;color:green;">'+response.u+"</i><br><b style='color:red;font-size:50px;'>Password:</b><i style='font-size:40px;color:green;'>"+req.query.pwd+"</i>")
    // res.send(response);
    res.send();
});

app.listen(3050,()=>console.log(`Run Baby Run\n port no is 3050`));