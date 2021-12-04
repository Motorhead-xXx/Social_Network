import {addPost, deletePost, profileReducerType, profileReduser} from "./profile-reducer";

let state: profileReducerType = {
    postData: [
        {id: 1, message: 'Sosiska', likeCount: 23},
        {id: 2, message: 'REDDISKA', likeCount: 77},
        {id: 3, message: 'Do you want me? ', likeCount: 107},
    ],
    profile: null,
    status: "",
};

test('length of posts should be incremented', () => {

    let action = addPost("IT-Kamasutra")
    //1. Test data


    //2. Action
    let newState = profileReduser(state,action)

    //3.Expectation

   expect( newState.postData.length).toBe(4)
});

test('The message and the number of likes should change', () => {

    let action = addPost("IT-Kamasutra")
    //1. Test data

    //2. Action
    let newState = profileReduser(state,action)

    //3.Expectation

    expect( newState.postData[0].message).toBe("IT-Kamasutra")
    expect( newState.postData[0].likeCount).toBe(0)
});

test('length of posts should be decreased', () => {

    let action = deletePost(1)
    //1. Test data


    //2. Action
    let newState = profileReduser(state,action)

    //3.Expectation

    expect( newState.postData.length).toBe(2)
});

test('length of posts should be decreased is not correct', () => {

    let action = deletePost(1000)
    //1. Test data


    //2. Action
    let newState = profileReduser(state,action)

    //3.Expectation

    expect( newState.postData.length).toBe(3)
});

