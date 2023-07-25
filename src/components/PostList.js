import Post from './Post';
import ShuffleButton from './ShuffleButton';

function PostList({ posts, setSelectedPostName, shuffle }) {
  return (
    <ul className='post-list'>
      <ShuffleButton shuffle={shuffle} />
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
