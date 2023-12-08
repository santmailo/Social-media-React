

function Post({itemObj}) {
  // console.log(title);
  return (
    <div className="card" style={{width: "18rem"}}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{itemObj.title}</h5>
        <p className="card-text">{itemObj.body}</p>
        <a href="#" className="btn btn-primary">{itemObj.userReaction}</a>
      </div>
    </div>
  )
}

export default Post;