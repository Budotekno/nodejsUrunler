const express = require("express"); // express kütüphanesini çağırdık
const ejsLayouts = require("express-ejs-layouts"); // express layout modülünü çağırdık
const app = express(); // app değişkenine atadık

const db = require("./data/db");

app.use(express.static('public')); // static dosyalara erişim


app.set("layout","./layouts/mainLayout")
app.set("view engine","ejs"); // view kısmı için ejs modülünü dahil ettik

app.use(ejsLayouts);//modülü aktif ettik

    // request = gelen istek
    // response = dönen yanıt





app.use("/login", (req,res)=>
{
    //app.set("layout","./admin/pages/login/login")
    res.render("admin/pages/login/login")
}
)

app.use("/productDetails/:id", (req,res)=>
{
    //const bulunanUrun = data.find(x=>x.id==req.params.id);
   // res.render("vitrin/pages/product/productDetails",bulunanUrun)
  
    db.execute("select * from product where id="+req.params.id)
    .then(result => {
        //console.log(result[0][0]["id"]);

        res.render("vitrin/pages/product/productDetails",{bulunanUrun:result[0][0]});
    })
    .catch(err => console.log(err));
}
)

app.use("/product", (req,res)=>
{
    db.execute("select * from product")
    .then(result => {
        //console.log(result);

        res.render("vitrin/pages/product/product",{data:result[0]});
    })
    .catch(err => console.log(err));
}
)

app.use("/contact", (req,res)=>
{
    res.render("vitrin/pages/contact/contact")
}
)
app.use("/about", (req,res)=>
{
    res.render("vitrin/pages/about/about")
}
)
app.use("/home", (req,res)=>
    {
        db.execute("select * from product")
            .then(result => {
              //  console.log(result[0]);

                res.render("vitrin/pages/home/home",{data:result[0]});
            })
            .catch(err => console.log(err));
        
    }
)
app.use("/", (req,res)=>
    {
        db.execute("select * from product")
            .then(result => {
               // console.log(result[0]);

                res.render("vitrin/pages/home/home",{data:result[0]});
            })
            .catch(err => console.log(err));
        
    }
)



app.listen("3000", ()=>
    {
        console.log("Server çalıştı... http://127.0.0.1:3000");
    }
);