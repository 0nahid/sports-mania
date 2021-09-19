import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
