import Footer from './components/footer/footer';
import Title from './components/title/title';
import CertificateDownloadInput from "./components/cetificate-download-input/certifiate-download-input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title primaryText="Download Your Certificate" alignCenter />
      </header>
      <CertificateDownloadInput />
      <Footer />
    </div>
  );
}

export default App;
