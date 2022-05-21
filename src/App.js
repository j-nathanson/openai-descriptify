import Form from './components/Form.js';
import Header from './components/Header.js';
import LoadingComponent from './components/LoadinComponent.js';
import Responses from './components/Responses.js';

function App() {
  return (
    <div className="container">

      <Header />
      <Form />
      <LoadingComponent />
      <Responses />
    </div>


  );
}

export default App;
