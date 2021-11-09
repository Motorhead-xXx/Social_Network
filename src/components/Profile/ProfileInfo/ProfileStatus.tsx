import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type stateType = {
    editMod: boolean
    status: string
}


export class ProfileStatus extends React.Component <ProfileStatusPropsType> {

    state = {
        editMod: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMod: true
        })
    }

    onBlurEditMode = () => {
        this.setState({
            editMod: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate = (prevProps: ProfileStatusPropsType, prevState: stateType) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {

        return (
            <div>

                {!this.state.editMod ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "Add status"}
                        </span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.onBlurEditMode} value={this.state.status}/>
                    </div>
                }


            </div>
        )
    }

}
