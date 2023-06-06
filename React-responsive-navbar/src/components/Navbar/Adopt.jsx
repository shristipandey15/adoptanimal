import React ,{useState,useEffect}from 'react'
import './Adopt.css';

function Adopt() {
  const initialValues={name:'',age:'',breed:'',address:'',color:'',email:'',number:'',text:'',myfile:''}
    const [values, setValues] = useState (initialValues);
    const [formErrors, setFormErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false); 


    const handleChange = (event) => {
      const {name, value} = event.target;
      setValues({ ...values, [name] : value})
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setFormErrors(validate(values));
      setIsSubmit(true) 
    }

    
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit ){
      console.log(values);
    }
  }, [formErrors]);


  const validate = (vals) => {
    const errors = {};
    
    // name
    if (!vals.username){
      errors.name = 'name is required!'
    }
    
    // age
    if (!vals.age) {
      errors.age = "age is required!";
    }
    
    // breed
    if (!vals.breed) {
      errors.breed= "breed is required";
    } 
    
    // address
    if (!vals.address) {
      errors.address= "address is required";
    }
    // phone
    if (!vals.phone) {
      errors.phone= "phone is required";
    }

    return errors;
  }

       
  return (
    <div>
        
        <form className='form' onSubmit={handleSubmit}>

            <h2>Donate Pet</h2>
        <h4>Please fill this form to add the pet  for donation.</h4><br/>

        <label for="text"> Pet Name</label><br/>
        <input type="text"
         name="name" 
         placeholder="Enter your pet name"
         value={values.name}
          onChange={handleChange}/><br/>
           <p>{formErrors.name}</p>

        <label for="id">Age</label><br/>
        <input type=""
         name="age" 
          placeholder="Enter your pet Age"
          value={values.age}
          onChange={handleChange}/><br/>
          <p>{formErrors.age}</p>

        <label>Vaccinated</label><br/>
        <input type="radio" name="Vaccinated"/>Yes<br/>
        <input type="radio" name="Vaccinated"/>No <br/>

        <label>Trained</label><br/>
        <input type="radio" name="trained"/>Yes<br/>
        <input type="radio" name="trained"/>No <br/>

        <label>Category</label><br/>
        <input type="radio" name="category"/>Cat<br/>
        <input type="radio" name="category"/>Dog<br/>

        <label for="text"> Breeds</label><br/>
        <input type="text"
         name="breed" 
        value={values.breed}
        onChange={handleChange}/> <br/>
         <p>{formErrors.breed}</p>


        <label for="address"> Location</label><br/>
        <input type="address" 
        name="address" 
        value={values.address}
        onChange={handleChange} /><br/>

         <p>{formErrors.address}</p>

        <label for="color"> Color</label><br/>
        <input type="color" 
        name="color" 
        value={values.color}
          onChange={handleChange}/><br/>

        <label for="email"> Email</label><br/>
        <input type="email" 
        name="email" 
        value={values.email}
          onChange={handleChange}/><br/>

        <label for="number"> Phone</label><br/>
        <input type="number" 
        name="number" 
        value={values.number}
          onChange={handleChange}/><br/>

       <p>{formErrors.phone}</p>

        <label for="textarea">Description</label><br/>
        <textarea  rows="10" cols="50" 
        placeholder=" Write something intresting about your pet"
        name="text"
        value={values.text}
          onChange={handleChange}/><br/>

        <label for="image">Select Image</label><br/>
        <input type="file"
         name="myfile"
         value={values.myfile}
          onChange={handleChange}/><br/>

        <input type="submit"  className="button"name="submit"/>
    






        </form>
    </div>
  )
}

export default Adopt