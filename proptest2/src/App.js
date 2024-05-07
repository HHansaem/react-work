import logo from './logo.svg';
import './App.css';
import Subject from './Subject';

function App() {
  const subjects = [{key:'js', text:'Javascript'},
                    {key:'java', text:'Java'},
                    {key:'jq', text:'JQuery'},
                    {key:'hs', text:'HTML/CSS'},
                    {key:'spring', text:'Sptring Framework'}];
  return (
    <select name="subject">
      <Subject subjects={subjects}/>
    </select>
  );
}

export default App;
