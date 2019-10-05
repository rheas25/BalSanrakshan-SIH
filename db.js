const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    database:'sih_webdb',
    user:'root',
    password:'password'
    })
    function addUser(email,uname,password){
        return new Promise(function(resolve,reject){
            connection.query(
                `insert into user_info(email,uname,password)values(?,?,?)`,[email,uname,password],function(err,results){
                if(err)
                reject(err)
                else
                resolve()
                }
            )
                })
            }

            function addInvigilator(email,iname,mobile,password){
                return new Promise(function(resolve,reject){
                    connection.query(
                        `insert into invigilator_info(email,iname,mobile,password)values(?,?,?,?)`,[email,iname,mobile,password],function(err,results){
                        if(err)
                        reject(err)
                        else
                        resolve()
                        }
                    )
                        })
                    }

                    function addNgo(email,nname,mobile,school,hospital,password){
                        return new Promise(function(resolve,reject){
                            connection.query(
                                `insert into ngo_info(email,nname,mobile,school,hospital,password)values(?,?,?,?,?,?)`,[email,nname,mobile,school,hospital,password],function(err,results){
                                if(err)
                                reject(err)
                                else
                                resolve()
                                }
                            )
                                })
                            }
        
                            
                            function getAllVictim(){
                                return new Promise(function(resolve,reject){
                                connection.query(`select aadhar,name,caseregister,school,hospital from ngo_info inner join victim where mobile in(select nid from victim);`,function(err,rows,fields){
                                
                                    if(err)
                                    reject(err)
                                    else
                                    resolve(rows)
                                })
                                })
                                }
                                function getAllNgo(){
                                    return new Promise(function(resolve,reject){
                                    connection.query(`select nname,school,hospital from ngo_info; `,function(err,rows,fields){
                        
                                        if(err)
                                        reject(err)
                                        else
                                        resolve(rows)
                                    })
                                    })
                                    }
                                
                                
                        function sendinvigi() {
                                    var rid=req.body.pincode
                                    connection.query(`select r_id from region where r_id=? and update_count>50`,[rid],function(err,results,fields)
                                    {
                                    if(results.length>0)
                                    {
                                    connection.query(`select iid from invigilator where rid=results[0].r_id`,function(err,results,fields){
                                    if(err)
                                    reject (err)
                                    else
                                    resolve(results)
                                    })
                                    
                                    }
                                })
                                }


            module.exports={
                addUser,
                addInvigilator,
                addNgo,
                getAllVictim,
                getAllNgo,
                sendinvigi
            }