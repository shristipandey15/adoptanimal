const user = require("../model");

//  get all pets
const pet_all = async (req,res) =>{
 try{
    const pets = await Pet.find();
    res.json(pet);
 }catch(error) {
    res.json({message: error });
 }
};

// single pet

const pet_details = async (req,res) =>{
    try{
        const pet = await Pet.findById(req.params.productId);
        res.json(pet);
    } catch (error) {
        res.json({message: error});
    }
};

// add new pet 
const pet_create = async (req,res) =>{
    const pet = new Pet({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const savedPet = await pet.save();
        res.send(savedPet);
      } catch (error) {
        res.status(400).send(error);
      }
};

// update pet 
const pet_update = async (req,res) =>{
    try {
        const pet = {
          title: req.body.title,
          price: req.body.price,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedPet = await Pet.findByIdAndUpdate(
          { _id: req.params.petId },
          pet
        );
        res.json(updatedPet);
      } catch (error) {
        res.json({ message: error });
      }
};

// delete pet 
const pet_delete = async (req,res) =>{
    try {
        const removePet = await Pet.findByIdAndDelete(req.params.petId);
        res.json(removePet);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    pet_all,
    pet_details,
    pet_create,
    pet_update,
    pet_delete




}