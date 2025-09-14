import PostsList from '../components/PostsList.jsx';

function Posts() {
  return (
    <main>
      <h1>Your Posts</h1>
      <PostsList />
    </main>
  );
}

export default Posts;

export async function loader({request}) {
  console.log('request.url : ' + request.url);
  const sortDirection = new URL(request.url).searchParams.get('sort');
  console.log('Sort Direction : ' + sortDirection);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Could not fetch posts');
  }
  return response;
}
