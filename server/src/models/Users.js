import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: number,
    id: String,
})

const UserModel = mongoose.Model('users', userSchema);

export default UserModel;