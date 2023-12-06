import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from "./component/Header";
import Sidebar from "./component/Siderbar";
import Footer from './component/Footer';


function App(){
  return (
    <div className='app-container'>
      <Sidebar />
      <div className='app-content'>
        <Header />  
        <Footer />
      </div>
    </div>
  )
}

export default App;