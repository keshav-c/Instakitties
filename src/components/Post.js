function Post({ image, name, setSelectedPostName }) {
  const handleMouseEnter = (catName) => {
    console.log(`Hello, ${catName}`);
  };

  const handleMouseLeave = (catName) => {
    console.log(`Goodbye, ${catName}`);
  };

  return (
    <li className="post-component">
      <button
        onClick={() => setSelectedPostName(name)}
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
