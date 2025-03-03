import UserModel from "../models/Users";


export const postUser = (req, res) => {
}

export const createUser = async(req, res) => {
    const newUser = new UserModel(req.body);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}