import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList, { loader } from './component/PostList.jsx';
import CreatePost, { createPostAction } from './component/CreatePost.jsx';

const router = createBrowserRouter([{
  path: "/", 
  element: <App />, 
  children : [
  {
    path: "/", 
    element: <PostList />,
    loader : loader, 
  },
  {
    path: "create-post", 
    element: <CreatePost />,
    action: createPostAction
  }
]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
