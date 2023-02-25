import './App.css';
import Header from './views/Header';
import Content from './views/Content';
import Footer from './views/Footer';
import background from './photos/photo8.jpg'

function App() {
 
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>

       <Header /> 

       <Content />

       <Footer />

    </div>
  );
}

export default App;
