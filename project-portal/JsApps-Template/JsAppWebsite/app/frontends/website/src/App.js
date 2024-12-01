
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Initiatives from './pages/Initiatives';
import Talks from './pages/Talks';
import Communities from './pages/Communities';
import Workshops from './pages/Workshops';
import Eventdocs from './pages/Eventdocs';
import Sponsor from './pages/Sponsor';
import Donate from './pages/Donate';
import WorkshopOrganize from './pages/WorkshopOrganize';
import Organize from './pages/Organize';
import CodeOfConduct from './pages/CodeOfConduct';
import Privacy from './pages/Privacy';

function App() {
  return (
   <BrowserRouter>
      <div className="m-2 App">
         <Navbar />
         
         <Routes>
               <Route path="/" element={<Home />} />        
               <Route path="/Initiatives" element={<Initiatives />} />        
               <Route path="/Talks" element={<Talks />} />            
               <Route path="/Communities" element={<Communities />} />            
               <Route path="/Workshops" element={<Workshops />} />            
               <Route path="/Eventdocs" element={<Eventdocs />} />            
               <Route path="/Sponsor" element={<Sponsor />} />            
               <Route path="/Donate" element={<Donate />} />            
               <Route path="/WorkshopOrganize" element={<WorkshopOrganize />} />            
               <Route path="/Organize" element={<Organize />} />            
               <Route path="/CodeOfConduct" element={<CodeOfConduct />} />            
               <Route path="/Privacy" element={<Privacy />} />            
         </Routes>

         <Footer/>
      </div> 
   </BrowserRouter>
  );
}

export default App;
