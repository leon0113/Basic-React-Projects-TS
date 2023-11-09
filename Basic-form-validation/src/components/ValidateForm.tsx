/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import './ValidateForm.css'

function ValidateForm() {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  
    const [errorUserName, setErrorUserName] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState<string>("");
  
    const [userNameColor, setUserNameColor] = useState<string>("");
    const [emailColor, setEmailColor] = useState<string>("");
    const [passwordColor, setPasswordColor] = useState<string>("");
    const [ConfirmPasswordColor, setConfirmPasswordColor] = useState<string>("");

    const validate = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let isValid: boolean = true;

        // for user name
        if(userName.length > 8){
            setErrorUserName("");
            setUserNameColor("green");
            setUserName("");
        } else {
            setErrorUserName("Username must be at least 8 characters long.");
            setUserNameColor("red"); 
            isValid = false;
        }
    
        // email
        if(email.includes("@gmail.com")){
            setErrorEmail("");
            setEmailColor("green");
            setEmail("")
        } else {
            setErrorEmail("Invalid Email Address.")
            setEmailColor("red")
            isValid = false;
        }
        //password
        if(password.length > 8){
            setErrorPassword("");
            setPasswordColor("green");
            setPassword("")
        } else {
            setErrorPassword("Password should be at least 8 characters long");
            setPasswordColor("red");
            isValid = false;
        }
        //confirm password
        if(password === ConfirmPassword && password !== ""){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
            setConfirmPassword("");
        } else {
            setConfirmPassword("Password didn't match");
            setConfirmPasswordColor("red");
            isValid = false;
        }
        //   console.log(errorUserName);
        // Display an alert when all validations pass
        if (isValid) {
            alert("All OK");
        }
        }       

  return (
    <>
    <div className="card">
        <div className="card-image">

        </div>
        <form>
            <input type="text" placeholder="Name" style={{borderColor: userNameColor}} value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p className="error">{errorUserName}</p>
            
            <input type="text" placeholder="Email" style={{borderColor: emailColor}} value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errorEmail}</p>

            <input type="password" placeholder="Password" style={{borderColor: passwordColor}} value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>

            <input type="password" placeholder="ConfirmPassword" style={{borderColor: ConfirmPasswordColor}} value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default ValidateForm