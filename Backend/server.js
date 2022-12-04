const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5002;
app.use(express.json())

app.use(cors());
app.use(express.static("public"));

const { promisify } = require("util");
const { start } = require("repl");
const asyncStat = promisify(fs.stat);

app.get("/", (req, res) => {
  fs.readdir("public", (err, files) => {
     return res.json(files);
    }
)});
  app.get("/:file/info", (req, res) => {
    const url = req.params.file
    fs.stat(`public/${url}`, (err, stat) => {
      console.log(stat);
       return res.send(stat);
       
      }
    )})
    app.get("/:file/show", (req, res) => {
      const url = req.params.file
      fs.readFile(`public/${url}`, (err, data) => {
         return res.send(data);
        }
      )});
   app.put("/:file/rename", (req, res) => {
        const url = req.params.file;
        fs.rename(`public/${url}`, `public/${req.body.name}`, (err) => {
          if(err)return err
        });
      });
      app.post("/:file/copy", (req, res) => {
        console.log(req.params);
        const url = req.params.file;
      
        fs.copyFile(`public/${url}`, `public/${req.body.name}`, (err) => {
          if(err) throw err;
          console.log(`public/${url} was copied to public/${req.body.name}`);
        });
      });
      app.delete('/:file/Delete', (req, res) => {
        const url = req.params.file
        console.log(url);
      fs.rm(`public/${url}`,(err,delet)=>{
        res.send(delet)
      } )
      });
      
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
