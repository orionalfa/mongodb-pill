const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const AuthorSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true,
    },
    Last_name: {
        type: String,
        required: true,
      },
    Date_of_Birth: {
        type: Date,
        required: true,
      },
    Date_of_death: {
        type: Date,
        required: true,
      },
    Country: {
        type: String,
        required: true,
    }
});
const BookSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true,
    } ,
    Release_Year:{
        type: Date,
        required: true,
    } ,
    Category:{
        type: String,
        required: true,
    } ,
    Authors:{
        type:{
        id:{type:mongoose.Schema.Types.ObjectId},
        Name:{type:String},
        Last_name:{type:String}       
    },
        ref: 'authors'
    }
})
const Book= new mongoose.model("Book", BookSchema)
const Author = new mongoose.model("Author", AuthorSchema);

async function createAuthor(Name,Last_name,Date_of_Birth,Date_of_death,Country){
    const authors=new Author({
        Name,
        Last_name,
        Date_of_Birth,
        Date_of_death,
        Country
    })
    const result = await authors.save();
}

async function createBook(Title,Release_Year,Category,Authors){
    const books=new Book({
        Title,
        Release_Year,
        Category,
        Authors,
        
    })
    const result = await books.save();
}
createBook("book","2000-12-12","drama",[{ "_id" : "610a9067e52b420fceef1a33", "Name" : "pa", "Last_name" : "Kok"},{"_id" : "610a9067e52b420fceef1a34", "Name" : "papa", "Last_name" : "Koky"}]);
// createAuthor("pa","Kok","1956-12-24","2030-12-24","Germeany") ; 
//     await db.insertMany([
//     {
//         Name: "Josua",
//         Last_name: "Kokari",
//         Date_of_Birth: "1956-12-24",
//         Date_of_death: "2030-12-24",
//         Country: "Germany"
//     },{
//         Name: "Adolf",
//         Last_name: "Smith",
//         Date_of_Birth: "1998-05-14",
//         Date_of_death: "2030-12-24",
//         Country: "China"
//     },{
//         Name: "Json",
//         Last_name: "Object",
//         Date_of_Birth: "1976-02-13",
//         Date_of_death: "2030-12-24",
//         Country: "MongoLIA"
//     }
//     ]);
// };
// db.book.insertOne(
//     {
//         Title: "Volando",
//         Release_Year: "1956-12-24",
//         Category: "Dreams",
//         Authors:[{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         },{
//             id:"610a5c0e75a38fe2146a5af1",
//             Name:"Adolf",
//             Last_name:"Smith"
//         }]
//     }
// )
   
// db.book.insertMany([
//     {
//         Title: "Nadando",
//         Release_Year: "1980-12-24",
//         Category: "Sports",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         }
//     },{
//         Title: "Orquidias",
//         Release_Year: "1990-12-24",
//         Category: "Drama",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af2",
//             Name:"Json",
//             Last_name:"Object"
//         }
//     },{
//         Title: "Volcanes",
//         Release_Year: "2002-12-24",
//         Category: "Geography",
//         Authors:[{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         },{
//             id:"610a5c0e75a38fe2146a5af2",
//             Name:"Json",
//             Last_name:"Object"
//         }]
//     },{
//         Title: "El viaje en bolas",
//         Release_Year: "1987-12-24",
//         Category: "Aventura",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         }
//     },{
//         Title: "Patadas Y cama",
//         Release_Year: "2020-12-24",
//         Category: "Accion",
//         Authors:[{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         },{
//             id:"610a5c0e75a38fe2146a5af1",
//             Name:"Adolf",
//             Last_name:"Smith"
//         },{
//             id:"610a5c0e75a38fe2146a5af2",
//             Name:"Json",
//             Last_name:"Object"
//         }]
//     },{
//         Title: "Pan con Habichuelas",
//         Release_Year: "1999-12-24",
//         Category: "Comedia",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         }
//     },{
//         Title: "Programando celebros",
//         Release_Year: "2033-12-24",
//         Category: "Miedo",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af1",
//             Name:"Adolf",
//             Last_name:"Smith"
//         }
//     },{
//         Title: "cruzando el rio",
//         Release_Year: "1923-12-24",
//         Category: "Novel",
//         Authors:[{
//             id:"610a5c0e75a38fe2146a5af0",
//             Name:"Josua",
//             Last_name:"Kokari"
//         },{
//             id:"610a5c0e75a38fe2146a5af1",
//             Name:"Adolf",
//             Last_name:"Adolf"
//         },{
//             id:"610a5c0e75a38fe2146a5af2",
//             Name:"Json",
//             Last_name:"Object"
//         }]
//     },{
//         Title: "El fin de los Tiempos",
//         Release_Year: "2050-12-24",
//         Category: "Historia",
//         Authors:{
//             id:"610a5c0e75a38fe2146a5af2",
//             Name:"Json",
//             Last_name:"Object"
//         }
//     },
// ])
