import { Row } from 'react-bootstrap';
import './styles/App.css';
import Calculator from './Calculator';

function App() {
  return (
    <Row className="app-container">
      <Calculator />
    </Row>
  );
}

export default App;
