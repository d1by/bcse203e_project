import './App.css';
import Header from './Header'
import Body from './Body'
import data from './data'
import AboutMe from './AboutMe';
import SuggestLoc from './SuggestLoc';
import Space from './Space';

function App() {
  return (
    <div>
      <Header/>
      <Space/>
      <Body data={data}/>
      <Space/>
      <AboutMe/>
      <Space/>
      <SuggestLoc/>
      <Space/>
    </div>
  )
}

export default App;
