import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LoginPage from './views/LoginPage';
import RecipeSearch from './views/RecipeSearch';
import theme from './theme';
import './styles/body.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/recipes" element={<RecipeSearch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
