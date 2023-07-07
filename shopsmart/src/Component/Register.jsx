import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";


// import PhoneInput from "@mui/material/PhoneInput";
import Container from "@mui/material/Container";
// import '../Component/Login.css';
import '../App.css';
import Navbar from "./Navbar";


const Register = () => {
 
    const[gender,setGender]=useState('');

    const [user,setUser] = useState ({
        fname : '',
        lname : '',
        email : '',
        contact : '',
        gender : '',
        password : '',
        cpassword : '',
        address : '',
        pincode : ''

    });

    const handleInput = (e) =>
    {
        e.persist();
        setUser({...user, [e.target.fname]:e.target.value});
    }


    const onGenderhandle = (e)=>
    {
        setGender(e.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    const handleChange = () => {

    }

    const options = ['Male', 'Female'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }

    return (
        <>
        <Navbar/>
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
                        required
                        fullWidth
                        id="fname"
                        value={user.fname}
                        onChange={handleInput}
                        label="First Name"
                        name="fname"
                        autoComplete="fname"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="lname"
                        value={user.lname}
                        onChange={handleInput}
                        label="Last Name"
                        name="lname"
                        autoComplete="lname"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="email"
                        value={user.email}
                        onChange={handleInput}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="contact"
                        value={user.contact}
                        onChange={handleInput}
                        label="Contact No"
                        type="number"
                        name="contact"
                        autoComplete="contact"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        size="small"
                        label="Gender"
                        id="gender"
                        fullWidth
                        required
                        select
                        value={user.gender}
                        onChange={onGenderhandle}
                        name="gender"
                        autoComplete="gender"

                    >
                        <MenuItem value='male' >Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>

                    </TextField>

                    {/* <select onChange={onOptionChangeHandler} placeholder="Gender" req>

                        <option>Gender</option>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select> */}

                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        value={user.password}
                        onChange={handleInput}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        value={user.cpassword}
                        onChange={handleInput}
                        name="cpassword"
                        label="Confirm Password"
                        type="password"
                        id="psw2"
                        autoComplete="current-password"
                    />
                      <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        value={user.address}
                        onChange={handleInput}
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        autoFocus
                    />
                        <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        value={user.pincode}
                        onChange={handleInput}
                        id="pincode"
                        label="Pincode"
                        type="number"
                        name="pincode"
                        autoComplete="pincode"
                        autoFocus
                    />
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
                            <Link href="#" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </>
    );
}

export default Register;