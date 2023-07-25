function ShuffleButton({ shuffle }) {
  return (
    <li className="post-component">
      <button className="shuffle-button" onClick={shuffle}>
        Shuffle
      </button>
    </li>
  );
}

export default ShuffleButton;
