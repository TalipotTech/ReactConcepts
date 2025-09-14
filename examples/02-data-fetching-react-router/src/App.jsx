import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts, { loader as postsLoader } from './pages/Posts.jsx';
import Welcome from './pages/Welcome.jsx';

console.log('1. App.jsx is running');
const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/posts', element: <Posts />, loader: postsLoader },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
