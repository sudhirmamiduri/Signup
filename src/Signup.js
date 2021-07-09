import React, { useState } from 'react';
function Signup() {
   const [formValues, setFormValues]= useState({
       email: "",
       password: "",
       confirmPassword: ""
   })
   const [error, setError]= useState({
    email: false,
    password: false,
    confirmPassword: false
})
const [isValid, setIsValid] = useState(false);
const [showMessage, setShowMessage] = useState(false);
   const onChangeHandler= event => {
       setFormValues(prevState => ({
           ...prevState,
           [event.target.id]:event.target.value
       }))
     
       switch (event.target.id){
           case "email": {

            if (event.target.value  && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value)){
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:false
                }))
            }else{
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:true
                }))
            }
               break;
           }
           case 'password':{
             if(event.target.value){
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:false
                }))
             }else{
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:true
                }))
             }
          break;
           }
           case 'confirmPassword':{
            if (event.target.id=="confirmPassword")
            {    
            if (event.target.value.match(formValues.password)){
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:false
                }))
            }else{
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:true
                }))}
            }else{
                setError(prevState => ({
                    ...prevState,
                    [event.target.id]:true
                }))
            }
               break;
           }
           default:break;
       }
       if(formValues.email && formValues.password && formValues.confirmPassword){
           if(error.email && error.password && error.confirmPassword){
            setIsValid(false);
           }else{
               setIsValid(true)
           }
       }

   } 
    return (
      <div className='container-md  mt-4'>
          
  { showMessage ? ( <>
      <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully submitted the form.</p>
      <button type="button" className="btn btn-light" onClick={()=>window.location.reload(false)}>Click me</button>
    </div>
    </>)
  : (<form className="px-4 py-4">
  <div className="mb-3 row">
<label for="email" className="col-sm-2 col-form-label">Email</label>
<div className="col-sm-10">
<input type="text" className={`form-control ${error.email ? ' is-invalid' : ''}`} id="email" value={formValues.email} onChange={onChangeHandler} />
<div id="validationServer03Feedback" className={`${error.email ? 'invalid-feedback' : 'd-none'}`}>
Please enter valid email.
</div>
</div>
</div>
<div className="mb-3 row">
<label for="password" className="col-sm-2 col-form-label">Password</label>
<div className="col-sm-10">
<input type="password" className={`form-control ${error.password ? ' is-invalid': ''}`} id="password" value={formValues.password} onChange={onChangeHandler} />
<div id="validationServer03Feedback" className={`${error.password ? 'invalid-feedback' : 'd-none'}`}>
Password should not be empty and length should be not less then 5 character.
</div>
</div>
</div>
<div className="mb-3 row">
<label for="confirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
<div className="col-sm-10">
<input type="password" className={`form-control ${error.confirmPassword ? "is-invalid": " "}`}  id="confirmPassword" value={formValues.confirmPassword} onChange={onChangeHandler} />
<div id="validationServer03Feedback" className={`${error.confirmPassword ? 'invalid-feedback' : 'd-none'}`}>
Confirm Password should match with Password.
</div>
</div>
</div>
<div className="d-grid d-md-block float-end">
<button type="button" className="btn btn-primary btn-lg" disabled={!isValid}  onClick={()=> {setShowMessage(true)}}>Submit</button>

</div>
</form>)}
      </div>)
    
  }
  
  export default Signup;