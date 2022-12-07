import {useState} from 'react'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

export default function LoginSignUpForm({type, open, handleCloseForm, setSelectedPage, setUserId, setNameText}) {

  const [selectedForm, setSelectedForm] = useState(type);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");


  let confirmPasswordError = confirmPassword != ""? confirmPassword === password? "" : "error": "";
  let confirmPasswordHelper = confirmPasswordError !== "error" ? "" : "Passwords do not match";

  let emailError = emailAddress !== "" ? (emailAddress.includes("@")) ? "" : "error": ""
  let emailHelper = emailError !== "error"? "" : "Please enter a valid email address"

  let zipCodeError = location !== "" ? /^[0-9]+$/.test(location) ? "" : "error": ""
  let zipCodeHelper = zipCodeError !== "error"? "" : "Please enter a valid zipcode"

  let disabledButton;

    if (confirmPasswordError === "error" || emailError ==="error"){
        disabledButton = "disabled"
    }
    else if ( selectedForm.toLowerCase() ==="signup" && 
                (firstName ==="" || lastName ==="" || 
                emailAddress ==="" || password==="" || 
                confirmPassword===""))
    {
        disabledButton = "disabled"

    } else if (selectedForm.toLowerCase() ==="login" && (userName ==="" || password==="")){
        disabledButton = "disabled"
    }

  const handleClose = () => {
    handleCloseForm();
  };


  const handleSubmit = () => {
        if (selectedForm === "login")
        {
            const loginAPI = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/Login?password=${password}&userName=${userName}`
            axios.get(loginAPI)
            .then(res => {
                console.log(res.data)
                setUserId(res.data.userid);
                setNameText(res.data.name);

            }
            )
            setSelectedPage("loggedIn")
            handleClose();
        }
        else 
        {
            const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/CreateUser?location=${location}&name=${firstName + " " + lastName}&password=${password}t&userName=${userName}`
            axios.get(api)
            .then(res => {
                console.log(res.data)
                setUserId(res.data.userid);
                setNameText(firstName);
            }
            )
            setSelectedPage("loggedIn")
            handleClose();

        };
    }

  const handleChange = (e, fieldType) => {
    switch (fieldType.toLowerCase()){
        case "emailaddress":
            setEmailAddress(e.target.value);
            break;
        case "password":
            setPassword(e.target.value);
            break;
        case "firstname":
            setFirstName(e.target.value);
            break;
        case "lastname":
            setLastName(e.target.value);
            break;
        case "confirmpassword":
            setConfirmPassword(e.target.value);
            break;
        case "username":
            setUserName(e.target.value);
            break;
        case "location":
            if (/^[0-9]+$/.test(e.target.value))
            {
            setLocation(e.target.value);
            } 
            break;
        default:
            break;
    }
  };

  const generateForm = () => {
    let formName;
    let formContent; 
    let loginButton;
    let submitButton;

    switch (selectedForm.toLowerCase()){
        case "login":
            formName = "Log In";
            loginButton = <Button disabled onClick={(e)=>setSelectedForm("login")}>Log In</Button>
            submitButton = <Button onClick={(e)=>setSelectedForm("signup")}>Sign Up</Button>
            formContent = 
            <DialogContent>
            <DialogContentText> 
                Welcome Back! Enter your account information to continue.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                label="User Name"
                onChange={(e)=> {handleChange(e, "username")}}
                type="text"
                fullWidth
                variant="standard"/>
            <TextField
                autoFocus
                margin="dense"
                label="Password"
                value={password}
                onChange={(e)=> {handleChange(e, "password")}}
                type="password"
                fullWidth
                variant="standard"/>
            </DialogContent>
            break;
        case "signup":
                formName = "Sign Up";
                formContent = "Welcome! Enter your the following information to create an account."
                loginButton = <Button onClick={(e)=>setSelectedForm("login")}>Log In</Button>
                submitButton = <Button disabled onClick={(e)=>setSelectedForm("signup")}>Sign Up</Button>
                formContent = 
                <DialogContent>
                <DialogContentText> 
                    Welcome Back! Enter your account information to continue.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="First Name"
                    value={firstName}
                    onChange={(e)=> {handleChange(e, "firstname")}}
                    type="text"
                    fullWidth
                    variant="standard"/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Last Name"
                    value={lastName}
                    onChange={(e)=> {handleChange(e, "lastname")}}
                    type="text"
                    fullWidth
                    variant="standard"/>
                     <TextField
                    autoFocus
                    margin="dense"
                    label="User Name"
                    helperText={emailHelper}
                    onChange={(e)=> {handleChange(e, "username")}}
                    type="text"
                    fullWidth
                    variant="standard"/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    error={emailError}
                    value={emailAddress}
                    helperText={emailHelper}
                    onChange={(e)=> {handleChange(e, "emailAddress")}}
                    type="text"
                    fullWidth
                    variant="standard"/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Password"
                    value={password}
                    onChange={(e)=> {handleChange(e, "password")}}
                    type="password"
                    fullWidth
                    variant="standard"/>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Confirm Password"
                    value={confirmPassword}
                    helperText={confirmPasswordHelper}
                    error={confirmPasswordError}
                    onChange={(e)=> {handleChange(e, "confirmpassword")}}
                    type="password"
                    fullWidth
                    variant="standard"/>
                    <Tooltip title="Please enter a zip code to continue">
                    <TextField
                    autoFocus
                    margin="dense"
                    label="Location"
                    value={location}
                    error={zipCodeError}
                    helperText={zipCodeHelper}
                    onChange={(e)=> {handleChange(e, "location")}}
                    type="text"
                    fullWidth
                    variant="standard"/>
                    </Tooltip>
                </DialogContent>
                
                break;
        default: 
        break;
    }
    return(
    <Dialog open={open} onClose={handleClose}>
        <Stack direction="row" spacing={2}>
            {loginButton}
            {submitButton}
        </Stack>
        <DialogTitle>{formName}</DialogTitle>
        {formContent}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={disabledButton} onClick={handleSubmit}>{formName}</Button>
        </DialogActions>
      </Dialog>
      )
  }

  return (
    <div>
       {generateForm()}
    </div>
  );
}
