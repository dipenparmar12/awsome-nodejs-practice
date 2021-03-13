const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

//  Routes
const api = require("./route/route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(3000, () => console.log(`Server started on port 3000`));

// ------------- Contact CRUD -----

// connection configurations
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});
// connect to database
dbConn.connect();

// Index page Route
app.get("/", (req, res) => {
  dbConn.query("SELECT * FROM contacts", function(error, result, fields) {
    if (error) throw error;
    res.render("index", { title: "PhoneBook", contacts: result });
  });

  // res.send("Hello world")
});

// Retrieve all contacts
app.get("/api/contacts", function(req, res) {
  dbConn.query("SELECT * FROM contacts", function(error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "Contact list." });
  });
});

// Retrieve contact with id
app.get("/api/contact/:id", function(req, res) {
  let conatact_id = req.params.id;
  if (!conatact_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide conatact_id" });
  }

  dbConn.query("SELECT * FROM contacts where id=?", conatact_id, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results[0],
      message: "contacts list."
    });
  });
});

//  Delete contact by id
app.delete("/api/contact/delete/:id", function(req, res) {
  // let contact_id = req.params.id;
  res.send("contact_id")

  // res.send(contact_id);
  // if (!contact_id) {
  //   return res
  //     .status(400)
  //     .send({ error: true, message: "Please provide contact_id" });
  // }

  // dbConn.query("DELETE FROM contacts WHERE id = ?", [contact_id], function(
  //   error,
  //   results,
  //   fields
  // ) {
  //   if (error) throw error;
  //   return res.send({
  //     error: false,
  //     data: results,
  //     message: "contact has been updated successfully."
  //   });
  // });
});


//  Delete contact by id
app.get("/api/contact/delete/:id", function(req, res) {
  let contact_id = req.params.id;
  // res.send(contact_id)
  
  if (!contact_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide contact_id" });
  }

  dbConn.query("DELETE FROM contacts WHERE id = ?", [contact_id], function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.redirect('/')
    // return res.send({
    //   error: false,
    //   data: results,
    //   message: "contact has been updated successfully."
    // });
  });
});

// Retrieve contact with id
app.get("/api/contact/:id", function(req, res) {
  let conatact_id = req.params.id;
  if (!conatact_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide conatact_id" });
  }

  dbConn.query("SELECT * FROM contacts where id=?", conatact_id, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results[0],
      message: "contacts list."
    });
  });
});


//  create contact
app.post("/api/contact", function(req, res) {
  let contact = req.body;
  res.json(contact);

  if (!contact) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide contact" });
  }

  dbConn.query(
    "INSERT INTO contacts SET ? ",
    { name: contact.name, phone: contact.phone, email: contact.email },
    function(error, result, fields) {
      if (error) throw error;
      // res.render("index", { title: "PhoneBook", contacts: result });

      return res.redirect("/", { message: "New Contact Created" });
      // return res.send({
      //   error: false,
      //   data: result,
      //   message: "New contact has been created successfully."
      // });
    }
  );

});

// -----------------------GROUP API

// Create Group
app.post("/create_group", function(req, res) {
  // res.send("craete GRoup POST METHOD ")
  console.log(req.body);
  const { contact_list, group_name } = req.body;
  // res.send(req.body)

  contact_ids = contact_list.split(",");

  var sql = "INSERT INTO contact_groups (group_name, contact_id) VALUES ?";
  var values = [];

  contact_ids.forEach(id => {
    // values.push(id)
    values.push([group_name, id]);
  });

  res.send(values)

  // dbConn.query(sql, [values], function(err) {
  //   if (err) throw err;
  //   res.send("inserted Many");
  // });
});

// Retrieve Uniq Groups
app.get("/groups", function(req, res) {
  dbConn.query("SELECT DISTINCT(group_name) FROM `contact_groups`", function(
    error,
    result,
    fields
  ) {
    if (error) throw error;
    res.render("group_list_view", { title: "GROUPS ", contact_groups: result });
  });
});

// View Contacts in Group
app.get("/groups/view/:id", function(req, res) {
  // res.send(req.params.id)
  group_name = req.params.id;
  join_qry = `
    SELECT name FROM contacts   
    INNER JOIN contact_groups  
    ON contacts.id = contact_groups.contact_id
    WHERE contact_groups.group_name = ?
  `;
  dbConn.query(join_qry, group_name, function(error, result, fields) {
    if (error) throw error;
    // res.send(result)
    res.render("group_contact_list", {
      title: `Contact list of ` + group_name,
      contacts: result
    });
  });
});
