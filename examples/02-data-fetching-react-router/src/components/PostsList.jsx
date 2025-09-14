import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const loadedPosts = useLoaderData();

  return (
    <>
      {console.log('4. PostsList.jsx is running')}
      <ul className="posts">
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {console.log('5. PostsList.jsx is done')}
    </>
  );
}

export default PostsList;
