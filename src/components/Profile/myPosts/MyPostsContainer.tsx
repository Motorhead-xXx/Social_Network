import {addPost, postDataType} from "../../../reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../store/store";

type MapStateProfileType = {
    profilePage: Array<postDataType>
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
}
export type PostPropsType = MapStateProfileType & MapDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStateProfileType => {
    return {
        profilePage: state.profilePage.postData,
    }
}
export default connect(mapStateToProps, {addPost})(MyPosts)