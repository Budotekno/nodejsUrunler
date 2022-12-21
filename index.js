const express = require("express"); // express kütüphanesini çağırdık
const ejsLayouts = require("express-ejs-layouts"); // express layout modülünü çağırdık
const bodyParser = require("body-parser");
const app = express(); // app değişkenine atadık
const session = require('express-session');

const db = require("./data/db");

//session için gerekli olan ifadeler
app.use(session({
    secret: 'Özel-Anahtar',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.static('public')); // static dosyalara erişim


app.set("view engine","ejs"); // view kısmı için ejs modülünü dahil ettik

app.use(bodyParser.urlencoded({extended:false})) // formda post etmek için 
app.use(bodyParser.json()) // formda post etmek için
app.use(ejsLayouts);//modülü aktif ettik


    // request = gelen istek
    // response = dönen yanıt


    //-------------------------------------Admin Start-------------------------------------//

// todo: admin

    //mesajlar start

// todo: admin-mesajlar

    app.get("/adminMesajSil/:id", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
   
    let sorgu =" DELETE FROM iletisim WHERE id = "+req.params.id; 
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
        //res.render("admin/pages/kullanicilar/adminKullanicilar");
    })
    .catch(err => console.log(err));
    
    res.redirect("/adminMesajlar");
    
})

    app.use("/adminMesajlar", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        db.execute("select * from iletisim order by id desc ")
        .then(result => {
            //console.log(result);
            res.render("admin/pages/mesajlar/mesajlar",{data:result[0]});
        })
        .catch(err => console.log(err));
    })
    //mesajlar end


    //ürünler start
// todo: admin - ürünler

    app.get("/adminUrunSil/:id", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
   
    let sorgu =" DELETE FROM product WHERE id = "+req.params.id; 
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
    
    })
    .catch(err => console.log(err));

    res.redirect("/adminUrunler");

    
})

    app.use("/adminUrunler", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
    
        db.execute("select * from product order by id desc")
        .then(result => {
            //console.log(result);
            res.render("admin/pages/urunler/urun",{data:result[0]});
        })
        .catch(err => console.log(err));
                
       
    }
    )

    app.post("/adminUrunAra", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`select * from product where model like '%${req.body.aranacakKelime}%' order by id desc `;
      

    db.execute(sorgu)
    .then(result => {
        console.log(result[0]);
        res.render("admin/pages/urunler/urun",{data:result[0]});
    })
    .catch(err => console.log(err));
    
})


app.post("/adminUrunEkle", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`INSERT INTO product (marka, model,fiyat,img,img1,img2,img3,img4,img5,ısletimSistemi,dahiliHafiza,ekranBoyutu,ramBellek,arkaKamera,onKamera,renk,garanti,durumu ) 
    
    VALUES('${req.body.marka}','${req.body.model}' ,'${req.body.fiyat}' ,'${req.body.img}','${req.body.img1}','${req.body.img2}','${req.body.img3}','${req.body.img4}','${req.body.img5}','${req.body.ısletimSistemi}','${req.body.dahiliHafiza}','${req.body.ekranBoyutu}','${req.body.ramBellek}','${req.body.arkaKamera}','${req.body.onKamera}','${req.body.renk}','${req.body.garanti}','${req.body.durumu}') `;
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
       // res.render("admin/pages/kullanicilar/Kullanicilar");
    })
    .catch(err => console.log(err));

    res.redirect("/adminUrunler");

    
})

app.use("/adminYeniUrun", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        res.render("admin/pages/urunler/addUrun");
    })


    app.post("/adminUrunEdit", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        //UPDATE admin  SET `kullaniciAdi` = 'admin3', `sifre` = '1234565' WHERE (`id` = '32');
        let sorgu1 =`update admin set kullaniciAdi = '${req.body.kullaniciAdi}' , sifre= '${req.body.sifre}' where id ='${req.body.id}' `;

        let sorgu =`update product set marka='${req.body.marka}', model='${req.body.model}',fiyat='${req.body.fiyat}',img='${req.body.img}',img1='${req.body.img1}',img2='${req.body.img2}',img3='${req.body.img3}',img4='${req.body.img4}',img5='${req.body.img5}',ısletimSistemi='${req.body.ısletimSistemi}',dahiliHafiza='${req.body.dahiliHafiza}',ekranBoyutu='${req.body.ekranBoyutu}',ramBellek='${req.body.ramBellek}',arkaKamera='${req.body.arkaKamera}',onKamera='${req.body.onKamera}',renk='${req.body.renk}',garanti='${req.body.garanti}',durumu='${req.body.durumu}' 
        where id ='${req.body.id}' `;
          
         db.execute( sorgu)
        .then(result => {
           // console.log(result);
           // res.render("admin/pages/kullanicilar/Kullanicilar");
        })
        .catch(err => console.log(err));
    
        res.redirect("/adminUrunler");

        
    })
    
    
    app.get("/adminUrunEditGet/:id", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
       
        let sorgu ="Select *  FROM product WHERE id = "+req.params.id; 
          
         db.execute( sorgu)
        .then(result => {
          //  console.log(result[0]);
           res.render("admin/pages/urunler/editUrun",{data:result[0]});
        })
        .catch(err => console.log(err));
    
       
    })

    //ürünler end

    //kullanicilar start

// todo: admin - kullanıcılar

app.post("/adminKullaniciAra", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`select * from admin where kullaniciAdi like '%${req.body.aranacakKelime}%' order by id desc `;
      

    db.execute(sorgu)
    .then(result => {
        //console.log(result);
        res.render("admin/pages/kullanicilar/kullanicilar",{data:result[0]});
    })
    .catch(err => console.log(err));
    
})
app.post("/adminKullaniciEdit", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    //UPDATE admin  SET `kullaniciAdi` = 'admin3', `sifre` = '1234565' WHERE (`id` = '32');
    let sorgu =`update admin set kullaniciAdi = '${req.body.kullaniciAdi}' , sifre= '${req.body.sifre}' where id ='${req.body.id}' `;
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
       // res.render("admin/pages/kullanicilar/Kullanicilar");
    })
    .catch(err => console.log(err));

    res.redirect("/adminKullanicilar");

    
})


app.get("/adminKullaniciEditGet/:id", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
   
    let sorgu ="Select *  FROM admin WHERE id = "+req.params.id; 
      
     db.execute( sorgu)
    .then(result => {
      //  console.log(result[0]);
       res.render("admin/pages/kullanicilar/editKullanicilar",{data:result[0]});
    })
    .catch(err => console.log(err));

   
})

app.get("/adminKullaniciSil/:id", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
   
    let sorgu =" DELETE FROM admin WHERE id = "+req.params.id; 
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
        //res.render("admin/pages/kullanicilar/adminKullanicilar");
    })
    .catch(err => console.log(err));

    res.redirect("/adminKullanicilar");
    
    
})


app.post("/adminKullaniciEkle", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`INSERT INTO admin (kullaniciAdi, sifre) VALUES('${req.body.kullaniciAdi}','${req.body.sifre}')`;
      
     db.execute( sorgu)
    .then(result => {
       // console.log(result);
       // res.render("admin/pages/kullanicilar/Kullanicilar");
    })
    .catch(err => console.log(err));

    res.redirect("/adminKullanicilar");

    
})

app.use("/adminYeniKullanici", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        res.render("admin/pages/kullanicilar/addKullanicilar");
    })

app.use("/adminKullanicilar", (req,res)=>
    {
        app.set("layout","./layouts/adminLayout")
        
        db.execute("select * from admin order by id desc ")
        .then(result => {
            //console.log(result);
            res.render("admin/pages/kullanicilar/kullanicilar",{data:result[0]});
        })
        .catch(err => console.log(err));
    })

    //kullanıcılar end  
//-------------------------------------Admin End-------------------------------------//


//-------------------------------------Login Start-------------------------------------//
// todo: login

app.use("/login", (req,res)=>
{
    app.set("layout","./admin/pages/login/login")
    res.render("admin/pages/login/login")
}
)

app.post("/girisYap", (req,res)=>
{
    app.set("layout","./layouts/adminLayout")
    let sorgu =`select * from admin where (kullaniciAdi ='${req.body.kullaniciAdi}' and sifre ='${req.body.sifre}')  `;
      

    db.execute(sorgu)
    .then(result => {
        
        if (result[0][0]!=undefined) {
            console.log(req.session.UserId);
            console.log("Giriş yapıldı");
           
           // let userId = result[0][0].id
            // req.session.UserId = userId;
             /*
            console.log(req.session);
            console.log("-------------");
            console.log(req.session.UserId);
            console.log("-------------"); */

            /* db.execute("select * from product order by id desc")
            .then(result => {
                //console.log(result);
                res.render("admin/pages/urunler/urun",{data:result[0]});
            })
            .catch(err => console.log(err)); */

            res.redirect("/adminUrunler")
            
        }
        else{
            console.log("Giriş yapılamadı");
            app.set("layout","./admin/pages/login/login")
            res.render("admin/pages/login/login")
        }
        
        //res.render("admin/pages/kullanicilar/kullanicilar",{data:result[0]});
    })
    .catch(err => console.log(err));
    
})
//-------------------------------------Login End-------------------------------------//



//-------------------------------------Vitrin Start-------------------------------------//
// todo: vitrin
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

        db.execute("select * from product order by id desc")
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
    app.post("/contactAdd", (req,res)=>
    {
        app.set("layout","./layouts/mainLayout")
        let sorgu =`INSERT INTO iletisim (adi, soyadi,mail, konu, mesaj) VALUES('${req.body.adi}','${req.body.soyadi}','${req.body.mail}','${req.body.konu}','${req.body.mesaj}')`;
        
        db.execute( sorgu)
        .then(result => {
        // console.log(result);
            res.render("vitrin/pages/contact/contact")
        })
        .catch(err => console.log(err));

    })
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
                
                const [result,] = await db.execute("select * from product order by id desc");
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