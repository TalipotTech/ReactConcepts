import { useParams, useRouteLoaderData } from 'react-router-dom';

function PostDetails() {
  const params = useParams();
  // we are using parent loader data
  //new hook to access parent loader data
  const posts = useRouteLoaderData('posts'); //id of the route whose loader data we want to access
  const post = posts.find((post) => post.id.toString() === params.id);
  return (
    <div id="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
/*
-- not needed anymore as we are using parent loader data
--useRouteLoaderData() is used to access the loader data of a specific route in the route hierarchy by providing the route's ID as an argument.
export async function loader({ params,request }) {
  console.log('Loading details for post id ' + params.id);
  console.log('Request : ' + request);
  
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + params.id
  );
  if (!response.ok) {
    throw new Error('Could not fetch post for id ' + params.id);
  }
  return response;
}
  */
