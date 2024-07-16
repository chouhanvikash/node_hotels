const  express=require('express');
const router=express.Router();
const Person=require('./../models/Person');

router.post('/',async (req,res)=>{
    try{
        const data=req.body; //Assuming that request body contains person data
        //Save the new person to the database
        const newPerson=new Person(data);
    
        const response=await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }

})


router.get('/',async (req,res)=>{
    try{
        const data =await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/:worktype', async (req,res)=>
    {
    try{
        const worktype= req.params.worktype;
            
        if(worktype=='manager'||worktype=='waiter'||worktype=='chef'){
            const response= await Person.find({work:'worktype'});
          console.log("response fetched");
            res.status(200).json(response); 
        }else{
        
            res.status(500).json("invalid work type");
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    } 
    })

    router.put('/:id', async (req,res)=>{
        try{
const personId=req.params.id;
const updatePersonData=req.body;
const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
    new:true,
 runValidators:true,
})
if(!response){
    console.log('hello');
    return res.status(404).json({error:'Person not found'});
}
console.log('data updated');
res.status(200).json(response);
console.log('hii');
}
catch(err){
console.log(err);
res.status(500).json({err:'internal server error'});
        }
    })

    router.delete('/:id',async (req,res)=>{
      
        try{
            const personId=req.params.id;
        
            const response=await Person.findByIdAndDelete(personId);
                if(!response){
            
                    return res.status(404).json({error:'Person not found'});
                }
            console.log('data deleted');
            res.status(200).json({message:"Person deleted successfully"});
            }
            catch(err){
            console.log(err);
            res.status(500).json({err:'internal server error'});
                    }
    })
    module.exports=router;