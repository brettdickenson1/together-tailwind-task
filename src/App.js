import './App.css';
import Footer from './components/Sections/Footer/Footer';
import PageOne from './components/Sections/Section1/Section1';
import Section2 from './components/Sections/Section2/Section2Main/Section2';
import Section3 from './components/Sections/Section3/Section3Main/Section3';
import Section4 from './components/Sections/Section4/Section4Main/Section4';
import BigNav from './components/UI/Nav/BigNav/BigNav';
import SmallNav from './components/UI/Nav/SmallNav/SmallNav';

function App() {
  return (
  <div className="bg-white">
    <SmallNav/>
    <div className="bigNav h-100">
    <BigNav/>
    </div>
    <div className="section2">
      <Section2/>
    </div>
    <div className="section3">
      <Section3/>
    </div>
    <div className="section4">
      <Section4/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
  </div>
  );
}

export default App;
