import { Route, Routes, Link } from 'react-router-dom';
import router from './router';
import './App.scss';

function App() {
  return (
    <div className="page">
      <div className="header">
        <div className="header-content">
          <Link className="header-item" to={'/'}>
            Home
          </Link>
          <Link className="header-item" to={'/list'}>
            List
          </Link>
        </div>
      </div>
      <div className="content">
        <Routes>
          {router.routes.map((item, index) => {
            return (
              <Route path={item.path} element={item.component} key={index} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
