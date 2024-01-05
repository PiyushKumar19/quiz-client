import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Center from './Center';
import useForm from '../hooks/useForm';

const getFreshModel = () => ({
    name:'',
    email:''
})

export default function Login() {
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);
    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{textAlign:'center'}}>
                    <Typography variant='h3' sx={{my:3}}>
                        Quiz App
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 2,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete='off'>
                            <TextField
                                id="outlined-read-only-input"
                                label="Email"
                                value={values.email}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Name"
                                value={values.name}
                            />
                            <Button
                                type="submit"
                                size="large"
                                variant="contained"
                                sx={{ width: '90%' }}
                            >Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>

    )
}
