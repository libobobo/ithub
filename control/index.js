exports.showIndex = (ret,res)=>{
    
    res.render("index.html",{
        user:ret.session.user
    });
}