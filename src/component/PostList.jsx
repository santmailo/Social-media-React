import { useContext, useEffect, useState } from 'react';
import { SocialMediaContext } from '../store/social-media-store';
import WelcomeMessage from './WelcomeMessage';
import Post from './Post'
import LoadingAnimation from './LoadingAnimation';

function PostList() {

  const {postList, handleDefaultPostList} = useContext(SocialMediaContext);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    setLoadingData(true);
    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then((data) => {
      handleDefaultPostList(data.posts);
      setLoadingData(false);
    });
    
    // return () => {

    // }
    return () => {
      controller.abort();
    }
  }, [])

  return (

    
    <div className='posts-container-'>
      {loadingData && <LoadingAnimation />}
      {!loadingData &&(postList.length==0) ? <WelcomeMessage /> :       
        postList.map((item) => {
          return <Post key={item.id} itemObj={item} />
        })}

    </div>
  )
}

export default PostList;