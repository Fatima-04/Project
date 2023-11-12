/* 
Crystal Burnett – 301326769
Alice Huynh – 301341638
Fatima Tuz Zahra – 301347439
Vinh Tran – 301324533
Timothy Li – 301201910
Code Confectioners E-Commerce Website for Bakery
*/

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be at most 50 characters long']
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
      },
      flavor: {
        type: String,
        enum: {
          values: ['Sweet', 'Sour', 'Salty', 'Spicy', 'Bitter', 'Umami'],
          message: 'Flavor is not valid'
        }
      },
      dietrestriction: {
        type: String,
        enum: {
          values: ['Gluten Free', 'Nut Free', 'Dairy Free', 'Egg Free', 'Sugar Free', 'Vegan'],
          message: 'Diet restriction is not valid'
        }
      },
      ingredients: {
        type: [String]
      }
    });

export default mongoose.model('Product', ProductSchema);
