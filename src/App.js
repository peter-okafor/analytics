import { Route, Routes } from 'react-router-dom';
import { Analytics } from './pages';
import 'antd/dist/antd.css';
import '../src/shared/css/custom.css';

function App() {
  return (
    <Routes>
      <Route element={<Analytics />} path='/' />
    </Routes>
  );
}

export default App;
