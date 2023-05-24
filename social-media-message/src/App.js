import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SocialMediaMessage from './components/SocialMediaMessage';

function App() {
  return (
    <>
      <div className='h-screen flex flex-col'>
        <Header />
        <SocialMediaMessage />
        <Footer />
      </div>
    </>
  );
}

export default App;
