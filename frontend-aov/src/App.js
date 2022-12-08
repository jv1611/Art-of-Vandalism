import { Navigate, Route, Routes } from "react-router-dom";
import Art from "./artornot/pages/Art";
import Home from "./artornot/pages/Home";
import Vandalism from "./artornot/pages/Vandalism";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/kunst' element={<Art />} />
      <Route path='/vandalisme' element={<Vandalism />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}

export default App;
