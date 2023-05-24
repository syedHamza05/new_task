const Class = require('../model/student')
const utility = require('../Utility/utility')


exports.Class = async(req, res) =>{
try{  
    let save=await Class.create(req.body)
    return await utility.success(res,save, "create Successfully ")       
} catch (error) {
    return error;
} 
}

exports.updateClass = async(req, res) =>{
    try{
    let data = await Class.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    
    return await utility.success(res,data, "updated Successfully ")
}
catch (error) {
    return error;
} 
}


exports.classlist= async (req, res) =>{
    try {
            let { page, size} = req.query;
    
            if (!page) {       
                page = 1;
            }
        
            if (!size) {
                size = 10;
            }

            let skip =( page-1)*size
            // let limit = req.query.limit

            const user = await Class.find().sort(
                {_id: 1 }).skip(skip)
            return res.send({
                page,
                size,
                Info: user,
            });
        
    } catch (error) {
        return error;
    } 
}

exports.removeClass = async(req, res)=>{
    try{
    let remove = await Class.deleteOne({_id:req.params.id})
    if(remove){
    return await utility.success(res,remove, "delete successfully")
    }
    else{
        return await utility.failure(res, "Something Went Wrong")
    }
}
catch (error) {
    return error;
} }

