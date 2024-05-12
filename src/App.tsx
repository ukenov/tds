import './App.css';
import { AppRouter } from './setup/routes-manager';
import Footer from 'pages/main/components/footer';

function App() {
  return (
    <div>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
