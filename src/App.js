import Form from './components/form-components/Form.js';
import Header from './components/Header.js';
import LoadingComponent from './components/LoadinComponent.js';
import Responses from './components/response-components/Responses.js';

function App() {
  return (
    <div className="container app-container">
      <Header />
      <Form />
      <LoadingComponent />
      <Responses />
    </div>


  );
}

export default App;
