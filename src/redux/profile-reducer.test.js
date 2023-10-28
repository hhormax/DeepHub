import profileReducer, { addPostActionCreator } from "./profile-reducer";

let initialState = {
    posts: []
}  

test('new post should be added', () => {
    let action = addPostActionCreator("text");
    let newState = profileReducer(initialState, action);
    expect(newState.posts.length).toBe(1);
  });

