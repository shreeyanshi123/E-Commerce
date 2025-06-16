const paypal=require("paypal-rest-sdk");

paypal.configure({
    mode:"sandbox",
    client_id:"AVDsy71gziHU97iEPol_7VYmoqgi_64lHBb7SKAj5dfD6Mmaf06mdHz2uNd8McA7az0SpIDyQSMuHZ4_",
    client_secret:"EJDIOc72yP-DdjB8EW6vFLvhbmougVvKqekXSaxWrgjpcCeeiLf5oPeQXAS1E8YCYNBG4jn0lQWslAXi"
});

module.exports=paypal