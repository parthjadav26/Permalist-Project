import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Permalist',
  password: 'Parth',
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const items = await db.query("SELECT * FROM item ORDER BY id ASC");
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items.rows,
    });
  } catch (error) {
    console.error(error);
      }
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  try {
    db.query("INSERT INTO item (title) VALUES ($1)", [item])
  } catch (error) {
    console.log(error);
  }
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  let id = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  console.log(req.body);

  try {
   await db.query("UPDATE item SET title = ($1) WHERE id = $2", [item, id]);
   res.redirect("/");
  } catch (error) {
    console.log(error);
  }

});


app.post("/delete", async(req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM item WHERE id = $1", [id]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
