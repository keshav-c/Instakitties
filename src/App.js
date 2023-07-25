import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectedItem from './components/SelectedItem';
import Mummy from './kitties/instakitties1.jpg';
import ChengaLaxmi from './kitties/instakitties2.jpg';
import Ivy from './kitties/instakitties3.jpg';
import Eeshu from './kitties/instakitties4.jpg';
import Cheetu from './kitties/instakitties5.jpg';
import PostList from './components/PostList';

const kitties = [
  { image: Mummy, name: "Mummy" },
  { image: ChengaLaxmi, name: "Chenga and Laxmi" },
  { image: Ivy, name: "Ivy" },
  { image: Eeshu, name: "Eeshu" },
  { image: Cheetu, name: "Cheetu" }
];

function App() {
  const [selectedPostName, setSelectedPostName] = useState('Mummy');
  const selectedPost = kitties.find(({ name }) => name === selectedPostName);

  const [posts, setPosts] = useState(kitties);
  const shuffle = () => {
    const [firstPost, ...restOfPosts] = posts;
    setPosts([...restOfPosts, firstPost]);
  };

  return (
    <div>
      <Header />
      <div className='app-content'>
        <PostList posts={posts} setSelectedPostName={setSelectedPostName} shuffle={shuffle} />
        <SelectedItem image={selectedPost.image} name={selectedPost.name} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
