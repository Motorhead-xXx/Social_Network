import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {connect} from "react-redux";
import {setAppError} from "../../reducers/app-reducer";
import {AppStateType} from "../../store/store";

type mapStateToPropsType = {
    errorApp: string | null
}

type mapDispatchToProps = {
    setAppError: (error:string|null) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ErrorSnackbars(props:mapDispatchToProps&mapStateToPropsType) {

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setAppError(null)
    };

    const isOpen = props.errorApp !== null

    return (
        <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning" sx={{width: '100%', height:"80px",alignItems:"center",fontSize:"large"}}>
                {props.errorApp}
            </Alert>
        </Snackbar>
    );
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        errorApp: state.app.error
    }
}

export default connect(mapStateToProps, {setAppError})(ErrorSnackbars)