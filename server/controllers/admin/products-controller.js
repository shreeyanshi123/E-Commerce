const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");
const handleImageUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = `data:${req.file.mimetype};base64,${b64}`;
        const result = await imageUploadUtil(url);

        res.json({
            success: true,
            result,
        });
    } catch (err) {
        console.error("Image upload error:", err);
        res.status(500).json({
            success: false,
            message: "Error occurred while uploading the image",
        });
    }
};

// add product
const addProduct = async (req, res) => {
    try {
        const { image, title, description, category, brand, price, salePrice, totalStock, averageReview } = req.body;
        const newProduct = new Product({
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview
        });
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured!",
        })
    }

}



// fetch product
const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured!",
        })
    }

}
// edit a product
const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, description, category, brand, price, salePrice, totalStock, averageReview } = req.body;

        const response = await Product.findByIdAndUpdate(id,
            { title: title, description: description, category: category, brand: brand, price: price, salePrice: salePrice, totalStock: totalStock, averageReview: averageReview }, { new: true });

        res.status(200).json({
            success: true,
            data: response,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured!",
        })
    }

}
// delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Product.findByIdAndDelete(id);
        if (response) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully",
            })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error occured!",
        })
    }

}

module.exports = { handleImageUpload, addProduct, fetchAllProducts, editProduct, deleteProduct };   
