import { createContext, useReducer } from "react";  

export let SocialMediaContext = createContext({
    postList : [],
    handleAddPost : () => {},
    handleDeletePost : () => {}
  });

function reducer(currState, action) {
  // if(action.type == "ADD_POST"){

  // }

  // else if(action.type == "DELETE_POST"){

  // }
}

export function SocialMediaProvider({children}) {
  

  let [postList, dispatchPostList] = useReducer(reducer, SAMPLE_POST);

  function handleAddPost(newPost) {
    let addPostAction = {
      type : "ADD_POST", 
      payload: newPost
    }

    dispatchPostList(addPostAction);
  }

  function handleDeletePost(deletePost) {
    let deletePostAction = {
      type : "DELETE_POST", 
      payload : {
        deletePost
      }
    }

    dispatchPostList(deletePostAction);
  }

  // console.log(postList);

  return (
    <SocialMediaContext.Provider value={{postList: postList, handleAddPost, handleDeletePost}}>
      {children}
    </SocialMediaContext.Provider>
  )
}


const SAMPLE_POST = [
  {
    id: 1,
    title: "Pass ho gaye",
    body: "This is to inform you that 4 saal ki masti ke baad bhi ho gye hai paas",
    userReaction : 0,
    userId: "santmailo",
    tags : ["graduation","pass","btech"]
  },
  {
    id: 2,
    title: "going to mumbai",
    body: "vacation in mumbai.... hope to enjoy a lot peace out!!",
    userReaction : 0,
    userId: "sunil",
    tags: ["travel", "mumbai", "holiday"]
  },
  {
    id: 3,
    title: "sample post",
    body: "Checking this social media features",
    userReaction : 0,
    userId: "gulu",
    tags : ["sample", "post", "testing", "features"]
  }
  
];
  