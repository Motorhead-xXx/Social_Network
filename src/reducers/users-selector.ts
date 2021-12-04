import {AppStateType} from "../store/store";

export const getUsersSelect = (state:AppStateType) => {
 return state.usersPage.users
}
export const getPageSize = (state:AppStateType) => {
 return state.usersPage.pageSize
}
export const getTotalCount = (state:AppStateType) => {
 return state.usersPage.totalUserCount
}
export const getCurrentPage = (state:AppStateType) => {
 return state.usersPage.currentPage
}
export const getIsFetching = (state:AppStateType) => {
 return state.usersPage.isFetching
}
export const getFollowingProgress = (state:AppStateType) => {
  return state.usersPage.followingProgress
}