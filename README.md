# assessment
Nodejs rest API

Question :

Create APIs for following operations in NodeJS. You can use any framework in NodeJS hapi, express, etc.
1.     Create an Admin account, User account
2.     There will be only one Admin.
3.     The user can Sign up or Sign In.
4.     The website will display products added by users.
5.     Admin can do delete/update operations on Users.
6.     Admin can decide whether products can be displayed on a web page or not and also can do delete/update operations on products.

Databases: users,product

Step 1 : Database Setup mysql 

	CREATE TABLE `users` ( 
	 `id` INT NOT NULL AUTO_INCREMENT ,
	 `userName` VARCHAR(60) NOT NULL , 
	 `password` VARCHAR(60) NOT NULL ,
	 `role` VARCHAR(60) NOT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE = InnoDB;

	CREATE TABLE `product` (
	 `id` INT NOT NULL AUTO_INCREMENT ,
	 `userId` INT NOT NULL ,
	 `productName` VARCHAR(50) NOT NULL,
	 `active` tinyint(1) DEFAULT 1;
	 PRIMARY KEY (`id`),
	 CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users(ID) ON DELETE CASCADE
	) ENGINE = InnoDB;

Step 2 : update below db connection details 
        /config/db.config.js
	
	    port:3306,
	    host:"",
	    user:"",
	    password:"",
	    database:"assignment"


Step 3 : Run on cmd : npm start

Step 4 : Run on cmd : npm start

Step 5 : check on below url 
	
       http://localhost:8080/api-docs/

Step 6 : create one admin user / role ( When create use role as - admin/user )
Step 7 : login user once login it will return token in login API response get that token and click on Authorize button put token as a value and click on Authorize button and then you can access all api 



 
