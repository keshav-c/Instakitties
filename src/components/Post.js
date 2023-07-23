function Post({ image, name }) {
  const handleClick = (catName) => {
    console.log('You clicked ' + catName);
  };

  return (
    <li className="post-component">
      <button onClick={() => handleClick(name)}>
        <img src={image} alt={name}></img>
        <p className="post-name">{name}</p>
      </button>
    </li>
  );
}

export default Post;
