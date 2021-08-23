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

exports.deleteData=(req,res)=>{
    let users = req.body;
    var sql = "DELETE FROM users WHERE id=?";
    mysqlCon.query(sql,[req.params.id],(err,row)=>{
        if(!err){
            res.send("Row deleted");
        }
        else{
            console.log(err);
        }
    });
}

exports.searchData=(req,res)=>{
    var sql = "SELECT * FROM users WHERE id=?"
    mysqlCon.query(sql,[req.params.id],(err,row)=>{
        if(!err){
            res.send(row);
        }
        else{
            res.send(err);
        }
    });
}


