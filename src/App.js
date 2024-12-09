import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer';
import FixedComponent from './components/fixed/FixedComponent';


function App() {
  return (
    <>
    <div className=' sticky top-0 bg-white z-[10000]'>
    <Header/>
    </div>
    <main className="min-h-[calc(100vh-120px)]">
    <Outlet />
    <Footer/>
    {/* <FixedComponent/> */}


    </main>
    
    </>
  );
}

export default App;
