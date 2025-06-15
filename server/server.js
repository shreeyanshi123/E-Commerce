const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');

const authRouter=require("./routes/auth/auth-routes");
const adminProductsRouter=require("./routes/admin/product-routes");
const shopProductsRouter=require("./routes/shop/product-routes");
const shopCartRouter=require("./routes/shop/cart-routes");
const shopAddressRouter=require("./routes/shop/address-routes");
const shopOrderRouter=require('./routes/shop/order-routes');
const adminOrderRouter=require('./routes/admin/order-routes');
const shopSearchRouter=require('./routes/shop/search-routes')




mongoose.connect('mongodb+srv://seemagupta7080185801:GA6dyZ8fdJ29p0lY@cluster0.ckpp4.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log('MongoDB connected')).catch(err=>console.log(err));



const app=express();
const PORT=process.env.PORT || 8000;






app.use(
    cors({
        origin:'https://e-commerce-di9z.onrender.com',
        methods:['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        allowedHeaders:['Content-Type','Authorization','Cache-Control','Expires','Pragma'],
        credentials:true
    })
)
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/admin/products',adminProductsRouter);
app.use('/api/admin/orders',adminOrderRouter);


app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart",shopCartRouter)
app.use('/api/shop/address',shopAddressRouter)
app.use('/api/shop/order',shopOrderRouter);
app.use('/api/shop/search',shopSearchRouter);


app.listen(PORT,()=>console.log(`Server is now running on port ${PORT}`));
