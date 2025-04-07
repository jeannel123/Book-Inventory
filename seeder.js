const mongoose = require('mongoose');
const Book = require('../models/book');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/book-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

    const seedDB = async() =>{
        // await User.deleteMany({});

        const book = new Book({
            name: "El Filibusterismo",
            category: 'Historical Fiction',
            quantity: 10,
            price: 350     
        })
        
        await book.save();
    }

    seedDB().then(() =>{
        mongoose.connection.close();
    })






    




    