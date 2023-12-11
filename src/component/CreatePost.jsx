import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

function CreatePost () {
  return (
    <Form className="create-post" method="post">
  
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Name</label>
      <input type="number" className="form-control" id="userId"  placeholder="Enter your User ID" name="userId"/>
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" id="title"  placeholder="How are you feeling toda..." name="title"/>
    </div>
  
    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Post Description</label>
      <textarea type="text" className="form-control" id="desc"  placeholder="Any more thoughts About this." rows={4}  name="body"/>
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input type="number" className="form-control" id="reactions"  placeholder="How many people reacted to this post..." name="reactions"/>
    </div>

    
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input type="text" className="form-control" id="tags"  placeholder="Please enter your tags using spaces" name="tags"/>
    </div>
  
    <button type="submit" className="btn btn-primary">Post</button>
  </Form>
  )
}


export async function createPostAction(data) {

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then((res) => {
      return res.posts;
    });
    return redirect("/")
}

export default CreatePost;

