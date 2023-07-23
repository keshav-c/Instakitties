import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Mummy from './kitties/instakitties1.jpg';
import ChengaLaxmi from './kitties/instakitties2.jpg';
import Ivy from './kitties/instakitties3.jpg';
import Eeshu from './kitties/instakitties4.jpg';
import Cheetu from './kitties/instakitties5.jpg';

function App() {
  return (
    <div>
      <Header />
      <ul className='post-list'>
        <Post image={Mummy} name="Mummy" />
        <Post image={ChengaLaxmi} name="Chenga and Laxmi" />
        <Post image={Ivy} name="Ivy" />
        <Post image={Eeshu} name="Eeshu" />
        <Post image={Cheetu} name="Cheetu" />
      </ul>
    </div>
  );
}

export default App;
