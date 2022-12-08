const express = require("express"); // express kütüphanesini çağırdık
const ejsLayouts = require("express-ejs-layouts"); // express layout modülünü çağırdık
const bodyParser = require("body-parser");
const app = express(); // app değişkenine atadık

const db = require("./data/db");

app.use(express.static('public')); // static dosyalara erişim


app.set("view engine","ejs"); // view kısmı için ejs modülünü dahil ettik

app.use(bodyParser.urlencoded({extended:false})) // formda post etmek için 
app.use(bodyParser.json()) // formda post etmek için
app.use(ejsLayouts);//modülü aktif ettik

    // request = gelen istek
    // response = dönen yanıt



//-------------------------------------Admin Start-------------------------------------//

app.delete("/adminKullaniciSil:id", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
   
    let sorgu =` DELETE FROM admin WHERE ('id' = '${req.body.id}')`; 
      
     db.execute( sorgu)
    .then(result => {
        console.log(result);
        res.render("admin/pages/kullanicilar/adminKullanicilar");
    })
    .catch(err => console.log(err));
    
})


app.post("/adminKullaniciEkle", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`INSERT INTO admin (kullaniciAdi, sifre) VALUES('${req.body.kullaniciAdi}','${req.body.sifre}')`;
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
        res.render("admin/pages/kullanicilar/Kullanicilar");
    })
    .catch(err => console.log(err));
    
})

app.use("/adminYeniKullanici", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        res.render("admin/pages/kullanicilar/addKullanicilar");
    })

app.use("/adminKullanicilar", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        db.execute("select * from admin  ")
        .then(result => {
            //console.log(result);
            res.render("admin/pages/kullanicilar/kullanicilar",{data:result[0]});
        })
        .catch(err => console.log(err));
    })

app.use("/adminUrunler", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        db.execute("select * from product")
        .then(result => {
            //console.log(result);
            res.render("admin/pages/urunler/urun",{data:result[0]});
        })
        .catch(err => console.log(err));
    }
    )
//-------------------------------------Admin End-------------------------------------//


//-------------------------------------Login Start-------------------------------------//
app.use("/login", (req,res)=>
{
    app.set("layout","./admin/pages/login/login")
    res.render("admin/pages/login/login")
}
)
//-------------------------------------Login End-------------------------------------//



//-------------------------------------Vitrin Start-------------------------------------//
app.use("/productDetails/:id", (req,res)=>
{
    app.set("layout","./layouts/mainLayout")

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
    app.set("layout","./layouts/mainLayout")

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
    app.set("layout","./layouts/mainLayout")

    res.render("vitrin/pages/contact/contact")
}
)
app.use("/about", (req,res)=>
{
    app.set("layout","./layouts/mainLayout")

    res.render("vitrin/pages/about/about")
}
)
app.use("/home", (req,res)=>
    {
        app.set("layout","./layouts/mainLayout")

        db.execute("select * from product")
            .then(result => {
              //  console.log(result[0]);

                res.render("vitrin/pages/home/home",{data:result[0]});
            })
            .catch(err => console.log(err));
        
    }
)
app.use("/", async (req,res)=>
    {

        app.set("layout","./layouts/mainLayout")

        try {
            
            const [result,] = await db.execute("select * from product");
            res.render("vitrin/pages/home/home",{data:result});
        } catch (error) {
            console.log(error);
        }

        
    }
)
//-------------------------------------Vitrin End-------------------------------------//



app.listen("3000", ()=>
    {
        console.log("Server çalıştı... http://127.0.0.1:3000");
    }
);