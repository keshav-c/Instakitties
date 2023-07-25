import Post from './Post';

function PostList({ posts, setSelectedPostName }) {
  return (
    <ul className='post-list'>
      {posts.map(({ image, name }, id) => (
        <Post
          image={image}
          name={name}
          key={id}
          setSelectedPostName={setSelectedPostName}
        />
      ))}
    </ul>
  );
}

export default PostList;
