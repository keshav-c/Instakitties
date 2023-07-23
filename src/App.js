import './App.css';
import Mummy from './kitties/instakitties1.jpg';
import ChengaLaxmi from './kitties/instakitties2.jpg';
import Ivy from './kitties/instakitties3.jpg';
import Eeshu from './kitties/instakitties4.jpg';
import Cheetu from './kitties/instakitties5.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Instakitties</h1>
      </header>
      <ul>
        <li>
          <button>
            <img src={Mummy} alt="Mummy" />
            <p>Mummy</p>
          </button>
        </li>
        <li>
          <button>
            <img src={ChengaLaxmi} alt="Chenga and Laxmi" />
            <p>Chenga and Laxmi</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Ivy} alt="" />
            <p>Ivy</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Eeshu} alt="Eeshu" />
            <p>Eeshu</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Cheetu} alt="Cheetu" />
            <p>Cheetu</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
