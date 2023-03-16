///////////////// Question 1////////////////////

// const mysql = require ('mysql');

// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'myDBuser',
//     password: 'myDBuser',
//     database: 'mydb'
// })
// connection.connect((err) =>{
//     if(err) throw err;
//     else {
//         console.log("connected")
//     }
// })





/////////////////////////// Question 2/////////////////////////////

///////////////method 1 dirctly /////////////////
// const mysql = require('mysql')

// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'myDBuser',
//     password: 'myDBuser',
//     database: 'mydb'
// })
// connection.connect((err) =>{
//     if(err) throw err;
//     else {
//         console.log("connected")
//     }
// })

// let createProducts = `CREATE TABLE if not exists Productszzzz(
//         product_id int auto_increment,
//         product_url varchar(255) not null,
//         product_name varchar(255) not null,
//         PRIMARY KEY (product_id)
//         )`;
// let createProductDescription = `CREATE TABLE if not exists ProductDescription(
//           description_id int auto_increment,
//           product_id int(11) not null,
//           product_brief_description TEXT not null,
//           product_description TEXT not null,
//           product_img varchar(255) not null,
//           product_link varchar(255) not null,
//           PRIMARY KEY (description_id),
//           FOREIGN KEY (product_id) REFERENCES Products(product_id)
//         )`;
        
// let createUsers = `CREATE TABLE if not exists users(
//          user_id int auto_increment,
//          user_name varchar(255) not null,
//          user_password varchar(255) not null,
//          PRIMARY KEY (user_id)
    
//         )`;
// let createOrders = `CREATE TABLE if not exists orders(
//             order_id int auto_increment,
//             product_id int,
//             user_id int,
//             FOREIGN KEY (product_id) REFERENCES Products(product_id),
//             FOREIGN KEY (user_id) REFERENCES users(user_id),
//             PRIMARY KEY (order_id)
//            )
//        `;
    
// let createProductPrice = `CREATE TABLE if not exists ProductPrice(
//           price_id int auto_increment,
//           product_id int(11) not null,    
//           starting_price varchar(255) not null,
//           price_range varchar(255) not null,
//           PRIMARY KEY (price_id),
//           FOREIGN KEY (product_id) REFERENCES Products(product_id)
//         )`;
    
//         connection.query(createProducts, (err, results, fields) => {
//           if (err) console.log(err);
//         });
//         connection.query(createProductDescription, (err, results, fields) => {
//           if (err) console.log(err);
//         });
//         connection.query(createUsers, (err, results, fields) => {
//           if (err) console.log(err);
//         });
//         connection.query(createOrders, (err, results, fields) => {
//           if (err) console.log(err);
//         });
//         connection.query(createProductPrice, (err, results, fields) => {
//           if (err) console.log(err);
//         });
      
    
// // ///////method 2 /install express /////
const mysql = require ('mysql');
const express = require ('express');
const cors = require('cors');
port = 3000 ;

let app = express()

let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'myDBuser',
    password: 'myDBuser',
    database: 'mydb'
})
connection.connect((err) =>{
    if(err) throw err;
    else {
        console.log("connected")
    }
})

//Install: Create the tables necessary
app.get('/',(req,res)=>{
  res.end("server running ....")
})
app.get("/install", (req, res) => {
    let message = "Tables Created";

    let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
             )`;
    let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description TEXT not null,
      product_description TEXT not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
    
    let createUsers = `CREATE TABLE if not exists users(
     user_id int auto_increment,
     user_name varchar(255) not null,
     user_password varchar(255) not null,
     PRIMARY KEY (user_id)

    )`;
    let createOrders = `CREATE TABLE if not exists orders(
        order_id int auto_increment,
        product_id int,
        user_id int,
        FOREIGN KEY (product_id) REFERENCES Products(product_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        PRIMARY KEY (order_id)
       )`;


    let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,    
      starting_price varchar(255) not null,
      price_range varchar(255) not null,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

    connection.query(createProducts, (err, results, fields) => {
      if (err) console.log(err);
    });
    connection.query(createProductDescription, (err, results, fields) => {
      if (err) console.log(err);  
    });

    connection.query(createUsers, (err, results, fields) => {
      if (err) console.log(err);
    });
    connection.query(createOrders, (err, results, fields) => {
      if (err) console.log(err);
    });
    connection.query(createProductPrice, (err, results, fields) => {
      if (err) console.log(err);
    });
  
    res.end(message);
  });


/////////////////////////////////question 3////////////////////////// 
/////////////////////////////////question 3////////////////////////// 
app.use(express.urlencoded({ extended: true }));


// const corsOption ={
//   origin :[
//     'http://localhost:3000',
//     'http://evangadi.com',
//     'http://apple.com'

// ]}
// app.use(cors(corsOption));
app.use(cors());

app.post('/add-product', (req, res) => {
  let user = req.body.user;
  let password = req.body.password;
  let Id = req.body.iphoneId;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Description = req.body.fullDescription;
  // const { user , password ,iphoneId , img ,Url ,Title ,Brief , StartPrice ,PriceRange ,Description} =req.body



  let sqlAddToProducts =`INSERT INTO Products (product_url, product_name) VALUES ('${Id}','${Title}')`;

  let sqlAddToUsers =`INSERT INTO users (user_name, user_password) VALUES ('${user}','${password}')`;
 
  connection.query(sqlAddToProducts,(err,result)=>{
  if (err) throw err;
  console.log(" 1 data inserted")
    })
  connection.query(sqlAddToUsers,(err,result)=>{
  if (err) throw err;
  console.log(" 1 data inserted")
    })

let selectedId = `SELECT * FROM Products WHERE product_url = '${Id}'`

let userId = `SELECT * FROM users WHERE user_name = '${user}'`

connection.query(selectedId,(err, rows, fields) => {
        addedProductId = rows[0].product_id; 
        console.log(rows);
        console.log(rows[0]);
         console.log(addedProductId);
        if (addedProductId != 0 ) {

          let sqlAddToProductDescription =`INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (
            '${addedProductId}',
            '${Brief}',
            '${Description}',
            '${img}',
            '${Url}'
            )`;
  
          let sqlAddToProductPrice = `INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (
            '${addedProductId}',
            '${StartPrice}',
            '${PriceRange}' 
            )`;
            
        
        
          connection.query(sqlAddToProductDescription, function (err, result) {
              if (err) throw err;
              console.log("Product description inserted");
            }
          );

  
          connection.query(sqlAddToProductPrice, function (err, result) {
            if (err) throw err;
            console.log("Product price inserted");
          });
        }

        connection.query(userId,(err, rows, fields) => {
          addedusersId = rows[0].user_id;
          
        
          if (err) console.log(err);
    
          
            let sqlAddToOrders = `INSERT INTO orders (product_id, user_id) VALUES ('${addedProductId}'
              ,'${addedusersId}'
              )`;
    
            connection.query(sqlAddToOrders, function (err, result) {
                if (err) throw err;
                console.log("orders inserted");
              });
          });
      });


    res.end("working fine");

  });


//Get all iphones
app.get("/iphones", (req, res) => {
  connection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});


app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
})
