-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: nodejsurunler
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kullaniciAdi` varchar(45) DEFAULT NULL,
  `sifre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin1 12','12312'),(32,'admin2','123456'),(46,'budotekno','1234'),(50,'admin','1234');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iletisim`
--

DROP TABLE IF EXISTS `iletisim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `iletisim` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adi` varchar(45) DEFAULT NULL,
  `soyadi` varchar(45) DEFAULT NULL,
  `konu` varchar(45) DEFAULT NULL,
  `mesaj` varchar(1000) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iletisim`
--

LOCK TABLES `iletisim` WRITE;
/*!40000 ALTER TABLE `iletisim` DISABLE KEYS */;
INSERT INTO `iletisim` VALUES (2,'Buğra','dost','Deneme','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum','bugra@gmail.com');
/*!40000 ALTER TABLE `iletisim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marka` varchar(150) DEFAULT NULL,
  `model` varchar(150) DEFAULT NULL,
  `fiyat` int DEFAULT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `img1` varchar(1000) DEFAULT NULL,
  `img2` varchar(1000) DEFAULT NULL,
  `img3` varchar(1000) DEFAULT NULL,
  `img4` varchar(1000) DEFAULT NULL,
  `img5` varchar(1000) DEFAULT NULL,
  `ayinUrunu` tinyint(1) DEFAULT '0',
  `cokSatan` tinyint(1) DEFAULT '0',
  `slayt` tinyint(1) DEFAULT '0',
  `ısletimSistemi` varchar(45) DEFAULT NULL,
  `dahiliHafiza` varchar(45) DEFAULT NULL,
  `ekranBoyutu` varchar(45) DEFAULT NULL,
  `ramBellek` varchar(45) DEFAULT NULL,
  `arkaKamera` varchar(45) DEFAULT NULL,
  `onKamera` varchar(45) DEFAULT NULL,
  `renk` varchar(20) DEFAULT NULL,
  `garanti` varchar(20) DEFAULT NULL,
  `durumu` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Apple ','iphone X',10000,'https://e-cdn.s3.eu-central-1.amazonaws.com/assets/_web/img/product/2022/04/m_apple-iphone-x-383-1-1649145894.webp','https://productimages.hepsiburada.net/s/6/300-443/9713620058162.jpg','https://cdn.cimri.io/image/1000x1000/apple-iphone-x-64-gb-58-inc-12-mp-akilli-cep-telefonu_90812391.jpg','https://cdn.pocket-lint.com/r/s/1200x630/assets/images/142227-phones-review-iphone-x-review-photos-image1-ahdsiyvum0.jpg','https://images.hindustantimes.com/tech/img/2021/09/21/960x540/table-3375313_1920_1629718860166_1632206084857.jpg','https://ae04.alicdn.com/kf/HTB1.cCpXjzuK1Rjy0Fpq6yEpFXa7.jpg_350x350.jpg',1,0,1,'ios','64','6.1','8','12','34','beyaz','var','2. El'),(2,'Samsung','Note 10',15000,'https://cdn.cimri.io/pictures/article/original/27/27818.jpg','https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/cep-telefonu/xiaomi/mi-note-10/cg/1a/1a_600x450.png','https://www.digitaltrends.com/wp-content/uploads/2019/08/galaxy-note-10-review-design-2.jpg?p=1','https://m.media-amazon.com/images/I/51f4T4yRkbL._AC_SX522_.jpg','https://images.samsung.com/is/image/samsung/p5/pk/smartphones/galaxy-note10/buy/Common_M001_N10_720.jpg','https://vcdn1-sohoa.vnecdn.net/2019/08/26/20-So-Sanh-Samsung-Galaxy-Note-10-VnE-9747-1566784343.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=lfSD-SHaD6kB_0Ij462tCw',1,0,1,'android','128','8.1','7','21','20','beyaz','bitmiş','sıfır'),(3,'Apple ','iphone 13',25000,'https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg','https://cf.shopee.com.br/file/367498642ef590b0949a42ded07bcf5f','https://m.media-amazon.com/images/I/31N7C-HZGHL._AC_SY350_.jpg','https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87546235/mobile_786_587_png/APPLE-iPhone-13-128-GB-Ak%C4%B1ll%C4%B1-Telefon-Pembe-MLPH3TU-A','https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mm283zma-iphone-13-icin-magsafe-ozellikli-silikon-kilif-%E2%80%93-p-637684380666842624.jpg','https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM283?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1629924958000',0,1,0,'ios','16','6','6','21','5','beyaz','var','sıfır'),(4,'Apple ','iphone 7',8000,'https://productimages.hepsiburada.net/s/31/550/10352773988402.jpg','https://upload.wikimedia.org/wikipedia/commons/6/65/Iphone_7_silver_rear.jpg','https://i0.shbdn.com/photos/07/85/38/x5_1058078538xf0.jpg','https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-71989067/mobile_786_587_png/APPLE-iPhone-7-32GB-Ak%C4%B1ll%C4%B1-Telefon-Silver','https://cdn.easycep.com/assets/_web/img/product/2022/04/l_apple-iphone-7-142-1-1648904380.webp','https://www.incehesap.com/resim/urun/201609/apple-iphone-7-32-gb-silver-cep-telefonu-69151_500.jpg',0,1,0,'ios','32','6','5','16','10','beyaz','va','sıfır'),(5,'Samsung ','S22',24500,'https://cdn.cimri.io/image/1000x1000/samsung-galaxy-s22-ultra-5g-128gb-8gb-ram-68-inc-108mp-akilli-cep-telefonu-beyaz_577733396.jpg','https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159963-phones-review-hands-on-samsung-galaxy-s22-review-image10-iup2be3rak.jpg','https://images.samsung.com/is/image/samsung/p6pim/ca/feature/others/ca-feature-galaxy-s22-ultra-s908-410941-531156726?$FB_TYPE_I_JPG$','https://m.media-amazon.com/images/I/71HUnJvHsbL._SX679_.jpg','https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/02/samsung-galaxy-s22-1.jpg?fit=1280%2C720&ssl=1','https://teknomers.com/wp-content/uploads/2022/06/1656583268_OnePlus-10-Pro-veya-Samsung-Galaxy-S22-Ultra-Hangisi-size.jpg',0,1,0,'android','64','6','4','18','10','siyah','var','sıfır'),(6,'Apple','iphone 12',20000,'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000','https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mjnq3tua-apple-iphone-12-256gb-mor-mjnq3tua-637600583961076259.jpg','https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83762563/mobile_786_587_png/APPLE-iPhone-12-64GB-Ak%C4%B1ll%C4%B1-Telefon-Mor','https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_lp_us_04202021.jpg.landing-big_2x.jpg','https://i0.shbdn.com/photos/01/38/88/x5_978013888txg.jpg','https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_durable-design-display_us_04202021_Full-Bleed-Image.jpg.large.jpg',1,0,1,'ios','32','5','3','20','6','gri','var','sıfır'),(9,'dflkdflk','lefkldkf',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-20 16:03:58
