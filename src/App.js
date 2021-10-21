import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import { Container } from 'react-bootstrap';
import MyCarousel from './components/MyCarrusel';
import MediaCard from './components/CardInterest';

function App() {
  return (
    <Container>
      <MyNavBar/>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-body">
            line
          </div>
        </div>
      </div>
    <div class="container">
      <div class="row">
    <div class="col-2">
    <ButtonCounter/>
    </div>
    <div class="col-8">
    <MyCarousel/>
    <div class="col-1">
      
      </div>
   
    </div>
    
  </div>

  <MediaCard/>
      

  </div>

      

    </Container>
  )
}

export default App;
