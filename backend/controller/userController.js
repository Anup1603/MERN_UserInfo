const User = require("../model/userModel");

const getAllUser = async (req, res) => {
    const userData = await User.find();
    return res.status(200).json(userData);
};

const createUser = async (req, res) => {
    const { firstName, lastName, email, age, city } = req.body;
    try {
        const newUser = await User.create({ firstName, lastName, email, age, city });
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(400).json({ message: `New user not insert ${err.message}` })
    }
};

const insertMany = async (req, res) => {
    try {
        const dataArray = req.body;
        const savedData = await User.insertMany(dataArray);
        res.status(201).json(savedData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const selectById = async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById({ _id: id });
        return res.status(200).json(singleUser);
    } catch (err) {
        return res.status(400).json({ message: `${id} not found..${err.message}` })
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(201).json({
            message: `Updated successfully ${id}`,
            updateUser
        });

    } catch (err) {
        return res.status(400).json({ message: `Something wrong while update : ${err.message}` });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: `${id} Delete successfully` });
    } catch (err) {
        return res.status(400).json({ message: `Not deleted : ${err.message}` });
    }
};


module.exports = { getAllUser, createUser, selectById, updateUser, deleteUser, insertMany };