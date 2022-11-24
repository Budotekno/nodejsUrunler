
const express = require("express");
const app = express(); // app değişkenine atadık
const db = require("../data/db");

const router = express.Router();


const ejsLayouts = require("express-ejs-layouts"); // express layout modülünü çağırdık

app.use(express.static('public')); // static dosyalara erişim


app.set("layout","./layouts/mainLayout")
app.set("view engine","ejs"); // view kısmı için ejs modülünü dahil ettik

app.use(ejsLayouts);//modülü aktif ettik



//app.set("layout","../views/layouts/mainLayout.ejs")

router.use("/login", (req,res)=>
{
    
    app.set("layout","../views/admin/pages/login/login.ejs")
    
    res.render("admin/pages/login/login")
}
)


router.use("/productDetails/:id", (req,res)=>
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

router.use("/product", (req,res)=>
{
    db.execute("select * from product")
    .then(result => {
        //console.log(result);

        res.render("vitrin/pages/product/product",{data:result[0]});
    })
    .catch(err => console.log(err));
}
)

router.use("/contact", (req,res)=>
{
    res.render("vitrin/pages/contact/contact")
}
)
router.use("/about", (req,res)=>
{
    res.render("vitrin/pages/about/about")
}
)
router.use("/home", (req,res)=>
    {
        db.execute("select * from product")
            .then(result => {
              //  console.log(result[0]);

                res.render("vitrin/pages/home/home",{data:result[0]});
            })
            .catch(err => console.log(err));
        
    }
)
router.use("/", async (req,res)=>
    {

        try {
            
            const [result,] = await db.execute("select * from product");
            res.render("vitrin/pages/home/home",{data:result});
        } catch (error) {
            console.log(error);
        }

        
    }
)




module.exports = router;