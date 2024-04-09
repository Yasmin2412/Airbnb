const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type: String,
        require : true,
    },
    description : String,
    image:{ filename:String,
        url:{type:String,
        default:"https://www.istockphoto.com/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-gm1448386210-485915364?utm_campaign=category_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fimages&utm_medium=affiliate&utm_source=unsplash&utm_term=images%3A%3A%3A",
        Set:(v)=> v==="" ? "https://www.istockphoto.com/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-gm1448386210-485915364?utm_campaign=category_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fimages&utm_medium=affiliate&utm_source=unsplash&utm_term=images%3A%3A%3A" : v
       
    
    }},
    price : Number,
    location : String,
    country : String,

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],

    owner: 
        {
        type: Schema.Types.ObjectId,
        ref: "user",
        },

});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
