import './App.css';
import Header from './Header'
import Body from './Body'
import data from './data'
import AboutMe from './AboutMe';
import SuggestLoc from './SuggestLoc';
import Space from './Space';
import RandomCard from './RandomCard';

function App() {
  return (
    <div>
      <Header/>
      <Space/>
      <Body data={data}/>
      <Space/>
      <SuggestLoc/>
      <Space/>
      <RandomCard data={data}/>
      <Space/>
      <AboutMe/>
      <Space/>
    </div>
  )
}

export default App;
