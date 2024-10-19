import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import './styles/App.css';

function App() {
  const [account, setAccount] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);

  React.useEffect(() => {
    const connectWallet = async () => {
      // Check if Coinbase Wallet is installed
      if (typeof window.ethereum !== 'undefined' && window.ethereum.isCoinbaseWallet) {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          setWeb3(web3Instance);
        } catch (error) {
          console.error("Failed to connect to Coinbase Wallet:", error);
        }
      } else {
        console.log("Please install Coinbase Wallet!");
      }
    };

    connectWallet();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header account={account} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Dashboard account={account} web3={web3} />} />
            <Route path="/marketplace" element={<Marketplace account={account} web3={web3} />} />
            <Route path="/profile" element={<Profile account={account} web3={web3} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
