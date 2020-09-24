const { query } = require("express");
const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 1000,

  password: "Lenamoro123@",
  user: "lenamoro",
  database: "additional_db",
  host: "77.68.16.58",
  port: 3306,
});

const queries = {};

queries.getAllProducts = () => {
  return new Promise((reject, resolve) => {
    connection.query("", [], (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });
};

queries.addNewSizeAttribute = (
  title,
  isGlobal,
  isActive,
  price,
  dimension,
  tooltip,
  description
) => {
  var id = "_" + Math.random().toString(36).substr(2, 9);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  var status = "Active";

  var time = new Date();
  time.toLocaleString("en-IN");
  var posting_time =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  return new Promise((reject, resolve) => {
    connection /
      query(
        "INSERT INTO size_attribute VALUES(?,?,?,?,?,?,?,?)",
        [
          id,
          title,
          isGlobal,
          isActive,
          price,
          dimension,
          tooltip,
          description,
          today,
          posting_time,
          today,
          posting_time,
          status,
        ],
        (err, result) => {
          if (err) {
            return reject(err);
          } else {
            connection.query("SELECT * FROM size_attribute", (err, result) => {
              if (err) {
                return reject(err);
              } else {
                return resolve(result);
              }
            });
          }
        }
      );
  });
};

module.exports = queries;
