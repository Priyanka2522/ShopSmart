import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from 'axios';
import { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import {useNavigate}from 'react-router-dom';

// import '../Component/Login.css';


const Login = () => {

    const [user_gmail, setUserEmail] = useState('');
    const [user_password, setUserPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();


        if(user_gmail==='' && user_password==='')
        {
            setError(true)
            return;
        }
        
        try
        {
            const result = await fetch("http://192.168.0.48:5000/shopsmart/signin/", {
                method: 'post',
                body: JSON.stringify({ user_gmail, user_password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (result.ok) {
               alert("Successful");
               navigate('/products');
              } else {
                setError('Invalid Username and Password');
              }
             
            console.log(result);
        }catch(error)
        {
            setError("An error occured.Please try again.");
        }
        
       
    };



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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={user_gmail}
                        onChange={(e) => {setUserEmail(e.target.value);setError(false);}}
                        autoComplete="email"
                        autoFocus
                    />
                     {error && user_gmail.length <=0 ?<p style={{ color: "red", marginLeft: "16px" }}>Please enter Username</p>:""}
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={user_password}
                        onChange={(e) => {setUserPassword(e.target.value);setError(false);}}
                        autoComplete="current-password"
                    />
                     {error && user_password.length <=0 ? <p style={{ color: "red", marginLeft: "16px" }}>Please enter Password</p>:""}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {error && <p style={{ color: "red", marginLeft: "16px" }}>{error}</p>}

                    <Grid container>
                        <Grid item sx={{ ml: 5 }}>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </>
    );
}

export default Login;