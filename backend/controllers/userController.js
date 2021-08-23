const mysqlCon = require('../db');

exports.getData= async (req,res)=>{
    mysqlCon.query('SELECT * FROM users',(err,row)=>{
       try{
        if(!err){
            res.send(row);
        }
       }
    catch(err){
        console.log(err);
    }
    });
}

exports.insertData=(req,res)=>{
    let user = req.body;
    var sql = "INSERT INTO users (username,email,password) VALUES(?,?,?)";
    mysqlCon.query(sql,[user.username,user.email,user.password],(err,row)=>{
       try{

        if(!err){
            res.send("Values Inserted");
        }
    }
    catch(err){
        
        res.send(err);
        console.log(err);
    }
    });
}

exports.updateData=(req,res)=>{
    let users = req.body;
    var sql = "UPDATE users SET username=?,email=?,password=? WHERE id=?";
    mysqlCon.query(sql,[users.username,users.email,users.password,req.params.id],(err,row)=>{
        try{

            if(!err){
                res.send("Values Inserted");
            }
        }
        catch(err){
            
            res.send(err);
            console.log(err);
        }
    });
}

exports.deleteData=(req,res)=>{
    let users = req.body;
    var sql = "DELETE FROM users WHERE id=?";
    mysqlCon.query(sql,[req.params.id],(err,row)=>{
       try{

        if(!err){
            res.send("Row deleted");
        }
    }
        catch(err){
            console.log(err);
            res.statusCode = 404;
        }
    });
}

exports.searchData=(req,res)=>{
    var sql = "SELECT * FROM users WHERE id=?"
    mysqlCon.query(sql,[req.params.id],(err,row)=>{
        try{
            if(!err){
                res.send(row);
            }
           }
        catch(err){
            console.log(err);
        }
    });
}


