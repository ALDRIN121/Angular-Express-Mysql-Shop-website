const mysqlCon = require('../db');

exports.viewProducts=async (req,res)=>{
    sql="SELECT * FROM products"
    mysqlCon.query(sql,(err,row)=>{
            try{
                if(!err){
                    res.send(row);
                        }
                }
            catch(err){
                    res.send(err);
    }
    })
}

exports.addProducts=async (req,res)=>{
    sql="INSERT INTO products (product_name,product_price,product_stock) VALUES (?,?,?)"
    var product=req.body;
    mysqlCon.query(sql,[product.Name,product.Price,product.Stock],(err,row)=>{
        try{
            if(!err){
                res.send("Data Inserted");
            }
        }
        catch(err){
            res.send(err);
        }
    })
}