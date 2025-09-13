import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.log("NO URL Provided in ENV Variables");

    // throw new Error('No URL provided in ENV variables!');
}

export async function connectMongoDB() {
    try {
        if (mongoose.connection.readyState === 1) {
            // console.log(mongoose.connections.length);
            return mongoose.connection;
        } else {
            const connection = await mongoose.connect(MONGODB_URI);
            // console.log(mongoose.connections.length);

            return connection;
        }
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
    }
}



// Consider this code before production
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI in .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectMongoDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       bufferCommands: false,
//     }).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }


