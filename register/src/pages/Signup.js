import React from 'react'
import {Button,TextField,Container,Grid} from "@material-ui/core"

export const SignUp = () => {
    return (
      
        <Container maxWidth="sm">
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
        </Container>
    )
}
