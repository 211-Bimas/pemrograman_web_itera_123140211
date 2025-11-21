import { useState } from 'react';
import { BookProvider } from './components/BookContext.jsx';
import AppNavigator from './components/AppNavigator.jsx';
import HomePage from './components/pages/Home.jsx';
import StatsPage from './components/pages/Stats.jsx';
import './index.css';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <BookProvider>
      <div className="app-container">
        <AppNavigator page={page} setPage={setPage} />
        <main className="main-content">
          {page === 'home' && <HomePage />}
          {page === 'stats' && <StatsPage />}
        </main>
        <footer className="app-footer">
          123140211 | Muhammad Bimastiar
        </footer>
      </div>
    </BookProvider>
  );
};

export default App;