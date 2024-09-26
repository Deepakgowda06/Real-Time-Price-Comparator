import express from "express";
import run from "./run.js";
import bodyParser from "body-parser";
import img from "./img.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post("/", async (req, res) => {
    try {
        const productDetails = JSON.parse(await run(`compare the prices of ${req.body.search} between different vendors in india in 
            this json format use the below template{
                itemName: "Sample Item",
                imageUrl: "url", 
                prices: [
                    { vendor: "Vendor A", logoUrl: "vendor url", price: "$10", rating: 4.5, availability: true, deliveryTime: "2-3 days",link:"venderwebsite(homepage)" },
                    { vendor: "Vendor B", logoUrl: "vendor url", price: "$12", rating: 4.0, availability: false, deliveryTime: "5-7 days" ,link:"venderwebsite(homepage)"},
                    { vendor: "Vendor C", logoUrl: "vendor url", price: "$9", rating: 4.7, availability: true, deliveryTime: "1-2 days" ,link:"venderwebsite(homepage)"}
                ]
            }
            note : i add correct image url link not temp url
            dont add comments in json file i should be able to convert it to object
            try adding real time data if not then add based on search but give me the data
            add 5 vendors if they are not availabe then add less 
            `));
            let name=productDetails.itemName.replace(/ /g, '+');
            console.log(name)
            let product=`https://www.google.co.in/search?q=${name}&sca_esv=fb5f53e1472aa45c&sca_upv=1&udm=2&biw=1536&bih=730&sxsrf=ADLYWIKQX9aLmv5STGBtf6te4L-oYMtEHA%3A1721979577749&ei=uVKjZuq6LYDe4-EPrb2W8AI&oq=amazon+&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2FtYXpvbiAqAggAMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyEBAAGIAEGLEDGEMYgwEYigUyBRAAGIAEMgoQABiABBhDGIoFSJ4LUC1YLXABeACQAQCYAYIBoAGCAaoBAzAuMbgBAcgBAPgBAZgCAqACiwHCAgsQABiABBixAxiDAZgDAIgGAZIHAzEuMaAHigU&sclient=gws-wiz-serp`;
            let img_url=await img(product)
            console.log(img_url)
            productDetails.imageUrl=img_url
        
        const imagePromises = productDetails.prices.map(async (priceDetail) => {
            let name = priceDetail.vendor.replace(/ /g, '+');
            const url = `https://www.google.co.in/search?q=${name}+logo&sca_esv=fb5f53e1472aa45c&sca_upv=1&udm=2&biw=1536&bih=730&sxsrf=ADLYWIKQX9aLmv5STGBtf6te4L-oYMtEHA%3A1721979577749&ei=uVKjZuq6LYDe4-EPrb2W8AI&oq=amazon+&gs_lp=Egxnd3Mtd2l6LXNlcnAiB2FtYXpvbiAqAggAMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyEBAAGIAEGLEDGEMYgwEYigUyBRAAGIAEMgoQABiABBhDGIoFSJ4LUC1YLXABeACQAQCYAYIBoAGCAaoBAzAuMbgBAcgBAPgBAZgCAqACiwHCAgsQABiABBixAxiDAZgDAIgGAZIHAzEuMaAHigU&sclient=gws-wiz-serp`;
            priceDetail.logoUrl = await img(url);
            console.log(priceDetail.link)
        });

        await Promise.all(imagePromises);

        res.render("index", { itemName: productDetails.itemName, imageUrl: productDetails.imageUrl, prices: productDetails.prices });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});
