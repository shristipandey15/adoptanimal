const user = require("../models/user");


// const signUp = async(req,res)=>{

// try{
//             console.log("+++++++++++++++")

    

//     const newUser = new user ({
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password,
//     }   )   
//                         const saved = user.save(newUser)
//                 res.status(200).json({
//                     message:"user created successfully",
//                     result:saved
//                 })

// //  const user = await user.find({where:{email:newUser.email}});
// //     if(user){
// //         res.status(200).json({
// //             messege:"email already registred"
// //         })
// //     }else{
// //         if(newUser.password === newUser.password){
// //             try{
// //                 const saved = user.save(newUser)
// //                 res.status(200).json({
// //                     message:"user created successfully",
// //                     result:saved
// //                 })
// //             }catch(err){
// //                 res.status(500).json({
// //                     message:"Internal server error"
// //                 })
// //             }
// //         }
    

// //     }
// }catch(err){
//         res.status(500).json({
//             message:"internal server error!!"
//         })
//     }

    
// }


const signUp = (res,req)=>{
     try{
        const newUser =  ({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        }   )    
    
           user.save()
           res.status(200).json({
            result:newUser,
            messege:"register successful"
           })

     }catch(err){
        res.status(500).json({
            err:err
        })
     }


}

module.exports = {
    signUp
}