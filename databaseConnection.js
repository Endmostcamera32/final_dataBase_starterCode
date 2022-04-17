const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


const dbConfigHeroku = {
	host: "i0rgccmrx3at3wv3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "g3y7s7mdb7jvcbq9",
	password: "mzgfvbto0y0qnvhn",
	database: "hog5ahmgtfob0qf7",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Sohr@b!sohrab8282",
	database: "lab_user_a01278278",
	port: 3306,
	multipleStatements: false,
	namedPlaceholders: true

};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		