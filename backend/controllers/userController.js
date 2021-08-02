const mysqlCon = require('../db');

exports.getData=(req,res)=>{
    mysqlCon.query('SELECT * FROM users',(err,row)=>{
        if(!err){
            res.send(row);
        }
        else{
            console.log(err);
        }
    });
}

exports.insertData=(req,res)=>{
    let user = req.body;
    var sql = "INSERT INTO users (username,email,password) VALUES(?,?,?)";
    mysqlCon.query(sql,[user.username,user.email,user.password],(err,row)=>{
        if(!err){
            res.send("Values Inserted");
        }
        else{
            res.send(err);
            console.log(err);
        }
    });
}

exports.updateData=(req,res)=>{
    let users = req.body;
    var sql = "UPDATE users SET username=?,email=?,password=? WHERE id=?";
    mysqlCon.query(sql,[users.username,users.email,users.password,req.params.id],(err,row)=>{
        if(!err){
            res.send("Values Updated");
        }
        else{
            res.send(err);
            console.log(err);
        }
    });
}


