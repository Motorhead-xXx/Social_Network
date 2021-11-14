import React from "react";
import {useFormik, Field} from "formik";
import style from './LoginStyle.module.css'
import {Button, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@material-ui/core";
import * as yup from 'yup';


const validationSchema = yup.object({
    email: yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/, "Password must meet complexity requirements")
        .required('Password is required')

});

const LoginForm = (props: any) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            toggle: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.onSubmit(values)
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.form}>
                    <div className={style.loginFormContainer}>
                        <Typography color={"orange"} component={"h2"} variant={"h4"}>
                            Login
                        </Typography>
                        <TextField sx={{maxWidth: "400px",minWidth: "350px"}} size={"small"} color={"success"}
                                   id="email"
                                   name="email"
                                   label="Email"
                                   value={formik.values.email}
                                   onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   required
                        />
                        <TextField sx={{maxWidth: "400px", minWidth: "350px"}} size={"small"} color={"success"}
                                   id="password"
                                   name="password"
                                   label="Password"
                                   type="password"
                                   value={formik.values.password}
                                   onChange={formik.handleChange}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                                   required
                        />
                        <FormControlLabel onChange={formik.handleChange} control={<Checkbox defaultChecked name={"toggle"}/>} label="Label"/>
                        <Button color={"warning"} variant={"contained"} type="submit">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const Login = () => {
    const submitOn = (values: any) => {
        console.log(values)
    }
    return (
        <div>
            <LoginForm onSubmit={submitOn}/>
        </div>
    )
}
