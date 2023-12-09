import { useContext } from 'react';
import { SocialMediaContext } from '../store/social-media-store';
import Post from './Post'

function PostList() {

  const {postList} = useContext(SocialMediaContext);
  return (
    <div className='posts-container-'>
      {
        postList.map((item) => {
          return <Post key={item.id} itemObj={item} />
        })
      }
    </div>
  )
}

export default PostList;