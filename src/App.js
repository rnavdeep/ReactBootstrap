import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./ components/Navigation/Navigation"
import Main from "./ components/Main/Main"
import ReactCarousel from './ components/Carousel/ReactCarousel';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='container-main'>
        <Main/>
      </div>
      <ReactCarousel/>

    </div>
  );
}

export default App;
