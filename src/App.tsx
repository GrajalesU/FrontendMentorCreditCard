import CardBack from './components/CardBack';
import CardForm from './components/CardForm';
import CardFront from './components/CardFront';

function App() {
  return (
    <div className='container'>
      <div className='background' />
      <div className='cardContainer'>
        <div className='cardContainerBack'>
          <CardBack />
        </div>
        <div className='cardContainerFront'>
          <CardFront />
        </div>
      </div>
      <CardForm />
    </div>
  );
}

export default App;
