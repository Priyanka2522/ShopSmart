import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MenuItem, alpha } from "@mui/material";
import Container from "@mui/material/Container";
import '../App.css';
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import './Register.css';
import { Scrollbars } from 'react-custom-scrollbars'


const Register = () => {

    const [user_gender, setGender] = useState('');
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [user_gmail, setEmail] = useState('');
    const [user_contact, setContact] = useState('');
    const [user_password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [user_address, setAddress] = useState('');
    const [user_pincode, setPincode] = useState('');
    const [error, setError] = useState(false);
    const [contactNumberErr, setContactNumberErr] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [pincodeErr, setPincodeErr] = useState(false);
    const navigate = useNavigate();

    // Create a registration object with form data
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        user_gmail: '',
        user_contact: '',
        user_gender: '',
        user_password: '',
        user_address: '',
        user_pincode: ''
    });

    const onGenderhandle = (e) => {
        setGender(e.target.value);

    }

    const handleFName = (event) => {
        let value = event.target.value;
        value = value.replace(/[^A-Za-z]/ig, '');
        setFName(value);
    }

    const handleLName = (event) => {    
        let LName =event.target.value;
        LName = LName.replace(/[^A-Za-z]/ig, '');
         setLName(LName);
    }

    const handleAddress = (event) => {

        let Address = event.target.value;
        Address = Address.replace(/[^A-Za-z]/ig, '');
        setAddress(Address);
    }

    const handleEmail = (event) => {

        let Email = event.target.value;
        Email = Email.replace(/[^@]+@[^@]+\.[a-zA-Z]{6,}/, '');
        setEmail(Email);
    }

    const handlePassword = (event) =>{
        let Pass=event.target.value;
        Pass = Pass.replace('^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[0-9]).{8,}$');
        setPassword(Pass);
        }
    

   

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update the formData object with the new input value
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    // Handle submit button action
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (first_name.length == 0 || last_name.length == 0 || user_gmail.length == 0 || user_contact.length == 0 || user_gender.length == 0 || user_password.length == 0 || user_address.length == 0 || user_pincode.length == 0) {
            setError(true);
            alert("Please Enter All Feilds.")
            return;
        }
        console.log(user_password);
        console.log(cpassword);

        // if(password === cpassword)
        // {  
        //       setPassword(password);
        // }
        // else{
        //     console.log("password not match",cpassword);
        // }

        try {

            const response = await fetch('http://192.168.0.48:5000/shopsmart/signup/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                alert("Data store successfully..")
                navigate('/login');
            }

        } catch (error) {
            //   setError("An error occured.Please try again.")
        }

    }
    //handle gender selection
    const options = ['Male', 'Female'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }



    return (
        <>
            <Navbar />
            <div className="scrollbar">
                <Container component="main" maxWidth={false}

                    sx={{ maxWidth: '400px' }}>
                    <Box
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            px: 4,
                            py: 6,
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5" alignItems="center">
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                size="small"
                                type="text"
                                required
                                fullWidth
                                id="fname"
                                value={first_name}
                                maxLength={20}
                                onChange={(event) => {
                                    setFName(event.target.value);
                                    handleInputChange(event);
                                    handleFName(event);
                                    setError(false);
                                }}
                                label="First Name"
                                name="first_name"
                                autoComplete="fname"
                                autoFocus
                            />      
                            {error && first_name.length <= 0 ?
                                <label className="error"> Please enter First Name</label> : ""}

                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="last_name"
                                value={last_name}
                                onChange={(event) => {
                                    setLName(event.target.value);
                                    handleInputChange(event);
                                    handleLName(event);
                                    setError(false);
                                }}
                                label="Last Name"
                                name="last_name"
                                autoComplete="last_name"
                                autoFocus
                            />
                            {error && last_name.length <= 0 ?
                                <label className="error"> Please enter Last Name</label> : ""}

                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="user_gmail"
                                value={user_gmail}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    handleInputChange(event);
                                    handleEmail(event);
                                    setError(false);
                                }}
                                type="email"
                                label="Email"
                                name="user_gmail"
                                autoComplete="user_gmail"
                                autoFocus
                            />
                            {error && user_gmail.length <= 0 ?
                                <label className="error">Please enter EmailId</label> : ""}

                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="user_contact"
                                defaultValue={91}
                                inputProps={{ maxLength: 10 }}
                                onChange={(event) => {
                                    const inputValue = event.target.value;
                                    // console.log("len",inputValue.length);
                                    setError(false);
                                    if (inputValue.length === 12) {
                                        setContact(inputValue);
                                        handleInputChange(event);
                                        setContactNumberErr('');
                                    }
                                    else {
                                        setContactNumberErr("Enter only 10 digits");
                                    }
                                }}
                                label="Contact No."
                                type="number"
                                name="user_contact"
                                autoComplete="user_contact"
                                autoFocus
                            />
                            {contactNumberErr && (
                                <p style={{ color: 'red', fontSize: "14px" }}>{contactNumberErr}</p>
                            )}
                            {error && user_contact.length <= 0 ?
                                <label className="error"> Please enter Contact Number</label> : ""}


                            <TextField
                                margin="normal"
                                size="small"
                                label="Gender"
                                id="user_gender"
                                fullWidth
                                required
                                select
                                // value={user.user_gender}
                                onChange={(event) => {
                                    setGender(event.target.value);
                                    handleInputChange(event);
                                    setError(false);
                                }}
                                name="user_gender"
                                autoComplete="user_gender"

                            >
                                <MenuItem value='Male' >Male</MenuItem>
                                <MenuItem value='Female'>Female</MenuItem>
                                <MenuItem value='Others'>Others</MenuItem>

                            </TextField>
                            {error && user_gender.length <= 0 ?
                                <label className="error">Select Correct Gender</label> : ""}

                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                // value={user.user_password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    handleInputChange(event);
                                    handlePassword(event);
                                    setError(false);
                                }}
                                name="user_password"
                                label="Password"
                                type="password"
                                id="user_password"
                                autoComplete="current-user_password"
                            />
                            {error && user_password.length <= 0 ?
                                <label className="error">Please enter Password</label> : ""}


                            {/* <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        // value={user.cpassword}
                        onChange={(event)=>{
                            setCPassword(event.target.value);
                            // handleInputChange(event);
                            setError(false);
                        }}
                        name="cpassword"
                        label="Confirm Password"
                        type="password"
                        id="psw2"
                        autoComplete="current-password"
                    />
                    {error && cpassword.length <=0 ?
                    <label className="error"> Please enter Password</label>:""} */}

                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                value={user_address}
                                onChange={(event) => {
                                    setAddress(event.target.value);
                                    handleInputChange(event);
                                    handleAddress(event);
                                    setError(false);
                                }}
                                id="user_address"
                                label="Address"
                                name="user_address"
                                autoComplete="user_address"
                                autoFocus
                            />
                            {error && user_address.length <= 0 ?
                                <label className="error"> Please enter Address</label> : ""}
                            <TextField
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                // value={user.user_pincode}
                                onChange={(event) => {
                                    const pin = event.target.value;
                                    setError(false);
                                    if (pin.length === 6) {
                                        setPincode(pin);
                                        handleInputChange(event);
                                        setPincodeErr('');
                                    }
                                    else {
                                        setPincodeErr("Enter only 6 digit");
                                    }

                                }}
                                id="user_pincode"
                                label="Pincode"
                                type="number"
                                name="user_pincode"
                                autoComplete="user_pincode"
                                autoFocus
                            />
                            {pincodeErr && (
                                <p style={{ color: 'red', fontSize: "14px" }}>{pincodeErr}</p>
                            )}
                            {error && user_pincode.length <= 0 ?
                                <label className="error">Please enter Pincode</label> : ""}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                            <Grid container>
                                <Grid item sx={{ ml: 5 }}>
                                    <Link href="/login" variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default Register;