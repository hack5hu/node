const User = require("../model/User");
// Controller for creating a new user


const createUser = async (name, email, password, age) => {
    
    const user1 = { name, email, password, age };
    return User.create(user1);
};

// Controller for getting all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};
const findOneUser= async (email1)=>{
    try{
        const user= await User.find({name:email1})
        return user
    }
    catch (error) {
    throw error;
  }
} 
const updateUser= async (id,data)=>{
 try {
    const users = await User.updateOne({ _id: id }, data);
    return users;
  } catch (error) {
    throw error;
  }
}

const FindUserWithFilter = async () => {
  try {
    const users = await User.aggregate([
      { $match: { age: { $gte: 25 , $lte :30} } },
      { $sort: { name: 1 } },
    ]);
    return users;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const users = await User.deleteOne({_id:id})
    return users;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createUser,
  getAllUsers,
  findOneUser,
  updateUser,
  FindUserWithFilter,
  deleteUser,
};
