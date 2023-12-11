import { useContext } from "react";
import { SocialMediaContext } from "../store/social-media-store";
import { MdOutlineDeleteForever } from "react-icons/md";

function Post({itemObj}) {

  const {handleDeletePost} = useContext(SocialMediaContext);
  // console.log(title);
  return (
    <div className="card post-card" style={{width: "30rem"}}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-icon" onClick={()=>handleDeletePost(itemObj.id)}><MdOutlineDeleteForever/></span>
        <h5 className="card-title">{itemObj.title}</h5>
        <p className="card-text">{itemObj.body}</p>
        {
          itemObj.tags.map(tag => <span className="badge rounded-pill text-bg-primary social-tag" key={tag}>{tag}</span>)
        }
      </div>
      <div className="alert alert-success social-reactions" role="alert">{itemObj.reactions} people have Reacted to this post </div>

    </div>
  )
}

export default Post;