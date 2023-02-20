import './App.css';
import Navbar from './Components/Navbar'
import Textarea from './Components/Textarea'
import Donate from './Components/Donate'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {

  return (
    <div className='App'>
    <Navbar />
    <Textarea />
    <Donate />
    </div>    
  );
}

export default App;
