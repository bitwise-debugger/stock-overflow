import { connectMongoDB } from "@/lib/mongo";
import User from "@/models/User";
import bcrypt from 'bcryptjs'
export async function GET() {
    await connectMongoDB();
    const exists = await User.findOne({ email: "admin@store.com" });
    if (!exists) {
        const hashedPassword = await bcrypt.hash("supersecret", 10);
        await User.create({
            name: "Super Admin",
            email: "admin@store.com",
            password: hashedPassword,
            phone: '+92 334 2100786',
            role: "admin"
        });
        console.log("✅ Admin created");
    } else {
        console.log("⚠️ Admin already exists");
    }
    return Response.json({});
}