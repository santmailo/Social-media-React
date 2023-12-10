import { useContext, useRef } from "react";
import { SocialMediaContext } from "../store/social-media-store";

function CreatePost() {

  const {handleAddPost} = useContext(SocialMediaContext);

  const userIdE = useRef();
  const titleE = useRef();
  const descE = useRef();
  const reactionsE = useRef();
  const tagsE = useRef();

  function handleSubmit(e){
    e.preventDefault();

    const id =  userIdE.current.value;
    const title =  titleE.current.value;
    const body = descE.current.value;
    const userReaction  =  reactionsE.current.value;
    const userId =  userIdE.current.value;
    const tags  =  tagsE.current.value.split(" ")

    handleAddPost({id, title, body, userReaction, userId, tags});

    userIdE.current.value = "";
    titleE.current.value = "";
    descE.current.value = "";
    reactionsE.current.value = "";
    userIdE.current.value = "";
    tagsE.current.value = "";
  }


  return (
    <form className="create-post" onSubmit={handleSubmit}>
  
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Name</label>
      <input type="text" className="form-control" id="userId"  placeholder="Enter your User ID" ref={userIdE}/>
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="title"  placeholder="How are you feeling toda..." ref={titleE}/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Post Description</label>
      <textarea type="text" className="form-control" id="desc"  placeholder="Any more thoughts About this." rows={4}  ref={descE}/>
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input type="text" className="form-control" id="reactions"  placeholder="How many people reacted to this post..." ref={reactionsE}/>
    </div>

    
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input type="text" className="form-control" id="tags"  placeholder="Please enter your tags using spaces" ref={tagsE}/>
    </div>
  
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
  )
}

export default CreatePost;