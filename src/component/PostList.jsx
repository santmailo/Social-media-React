import WelcomeMessage from './WelcomeMessage';
import Post from './Post'
import { useLoaderData } from 'react-router-dom';
  
function PostList() {

  const postList = useLoaderData();
  return (
    <div className='posts-container-'>
      {/* {<LoadingAnimation />} */}
      {(postList.length==0) ? <WelcomeMessage /> :       
        postList.map((item) => {
          return <Post key={item.id} itemObj={item} />
        })}
    </div>
  )
}

export default PostList;


export const loader = () => {
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      return data.posts;
    })
}