import CardRazasPerros from 'components/CardRazasPerros';
import logo from 'media/logo.png';
import 'styles/styles.css';
import borderCollie from "media/borderCollie.jpg";
import rhodesian from "media/rhodesian.jpeg";


function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="perrito" className="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza" type="search" />
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>                
            </li>
            <li>
                <button className="button mainButton">Registro</button>                
            </li>
        </ul>
        
    </header>
    <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza="Border Collie" imagen={borderCollie}  />
                <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian}  />
                <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie}  />
                <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian}  />
                <CardRazasPerros nombreRaza="BorderCollie" imagen={borderCollie}  />
                <CardRazasPerros nombreRaza="Rhodesian" imagen={rhodesian}  />
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}


export default App;
