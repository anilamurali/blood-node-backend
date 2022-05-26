const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var bloodModel=Mongoose.model("doners",
new Mongoose.Schema(
    {
        name:String,
        address:String,
        group:String,
        mobile:String,
        uname:String,
        pass:String
    }
))
Mongoose.connect("mongodb+srv://mzc:mzc@cluster0.m2f8m.mongodb.net/BloodDb")
app.post("/api/signup",(req,res)=>{
    var getName=req.body.name
    var getAddress=req.body.address
    var getGroup=req.body.group
    var getMobile=req.body.mobile
    var getUname=req.body.uname
    var getPass=req.body.pass
    data={"name":getName,"address":getAddress,"group":getGroup,"mobile":getMobile,"uname":getUname,"pass":getPass}
    let event=new bloodModel(data)
    event.save((error,data)=>{
        if(error)
        {
            res.send({"status":"error","data":error})
        }
        else
        {
            res.send({"status":"success","data":data})
        }
    })
})

app.listen(4500,()=>{
    console.log("server runnig")
})