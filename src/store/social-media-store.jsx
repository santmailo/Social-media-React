import { createContext, useReducer } from "react";  

export let SocialMediaContext = createContext({
    postList : [],
    handleDefaultPostList: () => {},
    handleAddPost : () => {},
    handleDeletePost : () => {}
  });

function reducer(currState, action) {
  let postList = currState;
  if(action.type =="GET_API_POSTS"){
    postList = action.payload.getPost
  }
  
  else if(action.type == "ADD_POST"){
    postList = [action.payload.newPost, ...currState]
  }

  else if(action.type == "DELETE_POST"){
    postList = currState.filter((post) => post.id!==action.payload.postId)
  }

  return postList;
}

export function SocialMediaProvider({children}) {
  

  let [postList, dispatchPostList] = useReducer(reducer, []);


  function handleDefaultPostList(getPost){
    // this method handles getting posts from API
    let apiPostAction = {
      type : "GET_API_POSTS",
      payload : {
        getPost
      }
    }

    dispatchPostList(apiPostAction)
  }

  function handleAddPost(newPost) {
    let addPostAction = {
      type : "ADD_POST", 
      payload: {
        newPost
      }
    }

    dispatchPostList(addPostAction);
  }

  function handleDeletePost(postId) {
    let deletePostAction = {
      type : "DELETE_POST", 
      payload : {
        postId
      }
    }

    dispatchPostList(deletePostAction);
  }

  // console.log(postList);

  return (
    <SocialMediaContext.Provider value={{postList: postList, handleAddPost, handleDeletePost, handleDefaultPostList}}>
      {children}
    </SocialMediaContext.Provider>
  )
}


  