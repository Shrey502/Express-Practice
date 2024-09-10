const express = require ("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/api/users",(req, res)=>{
    return res.json(users);
});
app.get("/users",(req, res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li> ${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app
.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id) ;
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.put((req,res)=>{
    //add a new user
    return res.json({status:"Pending"})
})
.delete((req,res)=>{
    //delete a particular user
    return res.json({status:"Pending"})
});

app.listen(PORT, ()=> console.log(`server started at port ${PORT}`))