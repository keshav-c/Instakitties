function Post({ image, name }) {
  const handleClick = (catName) => {
    console.log('You clicked ' + catName);
  };

  const handleMouseEnter = (catName) => {
    console.log(`Hello, ${catName}`);
  };

  const handleMouseLeave = (catName) => {
    console.log(`Goodbye, ${catName}`);
  };

  return (
    <li className="post-component">
      <button
        onClick={() => handleClick(name)}
        onMouseEnter={() => handleMouseEnter(name)}
        onMouseLeave={() => handleMouseLeave(name)}
      >
        <img src={image} alt={name}></img>
        <p className="post-name">{name}</p>
      </button>
    </li>
  );
}

export default Post;
