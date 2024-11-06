const asyncHandler = (func)=>{
    (req,res,next) =>{
        Promise.resolve(asyncHandler(req,res,next))
        .catch((err)=>next())
    }
}