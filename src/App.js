import TodoList from './components/TodoList'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
