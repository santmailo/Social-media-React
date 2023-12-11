import { createContext, useReducer } from "react";  

export let SocialMediaContext = createContext({
  postList : [],
  handleDefaultPostList: () => {},
  handleAddPost : () => {},
  handleDeletePost : () => {}
});

function reducer(currState, action) {
  let postList = currState;
  
  if(action.type == "ADD_POST"){
    postList = [action.payload.newPost, ...currState]
  }
  
  else if(action.type == "DELETE_POST"){
    postList = currState.filter((post) => post.id!==action.payload.postId)
  }
  
  return postList;
}

export function SocialMediaProvider({children}) {
  
  
  let [postList, dispatchPostList] = useReducer(reducer, []);
  

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






  return (
    <SocialMediaContext.Provider value={{ postList, handleAddPost, handleDeletePost}}>
      {children}
    </SocialMediaContext.Provider>
  )
}


  