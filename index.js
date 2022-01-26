const mongodb = require ('mongodb');

const client = new mongodb.MongoClient ('mongodb://localhost:27017');

const connectClient = async() => {
    await client.connect();
console.log('Client Connected!')
};

const getUserCollection = () => {
    const db = client.db ('mongo-project');
    const col = db.collection ('users')

    return col;

}

const getProductCollection= () => {
    const db = client.db ('mongo-project');
    const col = db.collection ('products')

    return col;


};

const insertProducts = async () => {
    const col = getProductCollection();
    await col.insertOne ({
        shoes: 'Nike',
        color: 'Black',
        size: 8,
    });
    console.log ('Products Inserted!');
};

const insertUser = async () => {
    const col = getUserCollection();
    await col.insertOne ({
        shoes: 'Nike',
        color: 'Black',
        size: 8,
    });
    console.log (' Users Inserted!');
};

const getUser = async () => {
    const col = getUserCollection();
    const user = await col.find({}).toArray();

    return user;
};


const getProducts = async () => {
    const col = getProductCollection();
    const products = await col.find({}).toArray();

    return products;
};

connectClient()
.then(() => insertUser())
.then(() => insertProducts())
.then(() => getUser())
.then ((users) => console.log (users))
.then(() => getProducts())
.then ((products) => console.log (products))
.then(() => client.close());


//1.  Create a new directory called mongo-project
// 2.  Initialize with git, and add a remote origin for github
// 3.  Push an initial commit to github
// 4.  npm init your new project
// 5.  Install mongodb
// 6.  Create 2 collections, a user collection and a products collection
// 7.  Create functions to insert your users and insert your products
// 8.  Create functions to get your users and get your products
















