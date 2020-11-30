import React from 'react'
import {Button,TextField,Container,Grid} from "@material-ui/core"
import {makeStyles } from "@material-ui/styles"
import {useFormik} from "formik"
import firebase from "../firebase/firebase.utils"
console.log("firebase:", firebase)

const styles=makeStyles({
    wrapper:{
        marginTop:"5rem",
        justifyContent:"center",
        alignItems:"center"
    }
})



export const SignUp = () => {

        const formik = useFormik({
          initialValues: {
            displayName: '',
            email:"",
            password:""
          },
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          },
        });
    
    
    const signUpStyle=styles();
  


    return (
        <Container className={signUpStyle.wrapper} maxWidth="sm">
            <form  onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                 <Grid item xs={12}>
                    <TextField 
                        name="displayName"
                        label="Display Name" 
                        variant="outlined" 
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.displayName}
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <TextField 
                        name="email"
                        label="E-mail" 
                        variant="outlined" 
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                 </Grid>
                 <Grid item xs={12}>
                    <TextField 
                        name="password"
                        label="Password" 
                        variant="outlined" 
                        fullWidth
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                 </Grid>
                 <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="secondary" fullWidth> Sign In </Button>
                 </Grid>
                 <Grid item xs={12}>
                        <Button variant="contained" color="secondary" fullWidth> Sign In with Google </Button>
                 </Grid>
               
            </Grid>
            </form>
        </Container>
    )
}
