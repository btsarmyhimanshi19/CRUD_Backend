
import mongoose from "mongoose";

const Connection = async(username ,password) =>{
    // const URL =`mongodb+srv://${username}:${password}@cluster0.cznq7.mongodb.net/test`

    const URL =`mongodb+srv://pooja:123@cluster0.cznq7.mongodb.net/test`
    //    const URL =``
      try{
         await mongoose.connect(URL,{ useUnifiedTopology : true,useNewUrlParser :true});
         console.log("Database conncetion succesfully")
      }catch(error){
          console.log("error while connection database" ,error)
      }
}
export default Connection;