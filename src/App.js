import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
function App() {
  return (
    <section className="container">
      <div className="clock_content">
        <h1>Entah berapa...</h1>
        <h3>muhammadafiq.com</h3>
        <FlipClockCountdown className='flip-clock' 
        to={new Date().getTime() +  730 * 3600 * 1000 + 5000} 
        duration={0.5}
        />;
      </div>
    </section>
  );
}

export default App;
