import React from "react";
import {useFormik} from "formik";
import style from './LoginStyle.module.css'
import {Button, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@material-ui/core";
import * as yup from 'yup';
import {connect} from "react-redux";
import {loginTC} from "../../reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../store/store";
import {LoginApiType} from "../../api/paramsAPI";
import ErrorSnackbars from "../common/errorSnackbar";

type mapDispatchToPropsType = {
    loginTC: (data:LoginApiType) => void
}

type mapStateToProsType = {
    isAuth: boolean
}

type loginType = mapStateToProsType & mapDispatchToPropsType

const validationSchema = yup.object({
    email: yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup.string()
        .min(4, 'Password should be of minimum 4 characters length')
        // .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/, "Password must meet complexity requirements")
        .required('Password is required')

});

const LoginForm = (props: { onSubmit: (data: LoginApiType) => void }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
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
                    <Paper className={style.loginFormContainer}>
                        <Typography color={"orange"} component={"h1"} variant={"h4"} fontSize={"xxx-large"}>
                            Login
                        </Typography>
                        <TextField sx={{maxWidth: "400px", minWidth: "350px"}} size={"small"} color={"success"}
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
                        <FormControlLabel onChange={formik.handleChange} control={<Checkbox {...formik.getFieldProps("rememberMe")}
                                                                                            checked={formik.values.rememberMe}/>} label="Remember me"/>
                        <Button color={"warning"} variant={"contained"} type="submit">Submit</Button>

                    </Paper>
                </div>
            </form>
        </div>
    )
}

const Login = (props: loginType) => {
    const submitOn = (values:LoginApiType) => {
        props.loginTC(values)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <LoginForm onSubmit={submitOn}/>
            <ErrorSnackbars/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType): mapStateToProsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {loginTC})(Login)
