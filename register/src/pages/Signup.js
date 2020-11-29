import React from 'react'
import {Button,TextField,Container,Grid} from "@material-ui/core"
import {makeStyles } from "@material-ui/styles"
import {useFormik} from "formik"

export const SignUp = () => {

    const styles=makeStyles({
        wrapper:{
            marginTop:"5rem",
            justifyContent:"center",
            alignItems:"center"
        }
    })
    const signUpStyle=styles();

    const SignupForm = () => {     
        const formik = useFormik({
          initialValues: {
            displayName: '',
            email:"",
            password:""
          },
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });
    console.log(formik)
    }
     

    return (
        <Container className={signUpStyle.wrapper} maxWidth="sm">
            <form>
                <Grid container spacing={3}>
                 <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                        <Button variant="contained" color="secondary" fullWidth> Sign In </Button>
                 </Grid>
                 <Grid item xs={12}>
                        <Button variant="contained" color="secondary" fullWidth> Sign In with Google </Button>
                 </Grid>
               
            </Grid>
            </form>
        </Container>
    )
}
