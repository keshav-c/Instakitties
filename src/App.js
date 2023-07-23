import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import SelectedItem from './components/SelectedItem';
import Mummy from './kitties/instakitties1.jpg';
import ChengaLaxmi from './kitties/instakitties2.jpg';
import Ivy from './kitties/instakitties3.jpg';
import Eeshu from './kitties/instakitties4.jpg';
import Cheetu from './kitties/instakitties5.jpg';

const kitties = [
  { image: Mummy, name: "Mummy" },
  { image: ChengaLaxmi, name: "Chenga and Laxmi" },
  { image: Ivy, name: "Ivy" },
  { image: Eeshu, name: "Eeshu" },
  { image: Cheetu, name: "Cheetu" }
];

function App() {
  return (
    <div>
      <Header />
      <div className='app-content'>
        <ul className='post-list'>
          {kitties.map(({ image, name }, id) => (
            <Post
              image={image}
              name={name}
              key={id}
            />
          ))}
        </ul>
        <SelectedItem image={kitties[0].image} name={kitties[0].name} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
