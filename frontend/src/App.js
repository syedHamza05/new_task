import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Form from './components/Form/Form'
import Entry from './components/Entry/Entry'
import List from './components/List/List'
import Header from './components/Headers/Header'

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path= "/" element={<Form/>}/>
        <Route path= "/Entry" element={<Entry/>}/>
        <Route path= "/List" element={<List/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
