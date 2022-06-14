
import user from '../Schema/user.schema.js'

export const addUser =async (req,res) =>{
  const User = req.body;
  const newuser = new user(User);

 try{
    await newuser.save();
    res.status(201).json(newuser);
   }catch(error)
    {
      res.status(404).json({mesaage : error.mesaage})
    }
    
}

export const getUsers =async(req,res)=>{
  try{
   const users =await user.find({ }); //{} all display data
   res.status(200).json(users);
  }catch(error)
  {
     res.status(404).json({mesaage:error.mesaage})
  }
}
export const getUser =async(req,res)=>{
  try{
   const User =await user.findById(req.params.id); //{} all display data
   res.status(200).json(User);
   console.log(User);
  }catch(error)
  {
     res.status(404).json({mesaage:error.mesaage})
  }
}
export const editUser = async(req,res)=>{
  let users = req.body;
  const editUser = new user(users);
  try{
     await user.updateOne({_id:req.params.id},editUser)
     res.status(201).json(editUser)
  }catch(error){
    res.status(409).json({mesaage:error.mesaage});
  }
}
export const deleteUser = async(req,res)=>{
  let users = req.body;
  const deleteUser = new user(users);
  try{
     await user.deleteOne({_id:req.params.id},deleteUser)
     res.status(201).json(deleteUser)
  }catch(error){
    res.status(409).json({mesaage:error.mesaage});
  }
}
