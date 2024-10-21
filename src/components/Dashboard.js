import React from 'react';

function Dashboard({ account, web3 }) {
  const [energyProduced] = React.useState(0);
  const [energyConsumed] = React.useState(0);

  React.useEffect(() => {
    const fetchEnergyData = async () => {
      if (web3 && account) {
        // Fetch data from smart contract (to be implemented)
        // Example:
        // const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        // const produced = await contract.methods.getEnergyProduced(account).call();
        // const consumed = await contract.methods.getEnergyConsumed(account).call();
        // setEnergyProduced(web3.utils.fromWei(produced, 'ether'));
        // setEnergyConsumed(web3.utils.fromWei(consumed, 'ether'));
      }
    };

    fetchEnergyData();
  }, [account, web3]);

  return (
    <div className="dashboard">
    <h1>Dashboard</h1>
    <div className="dashboard-grid">
      <div className="energy-stat">
        <h2>Energy Produced</h2>
        <p>{energyProduced} kWh</p>
      </div>
      <div className="energy-stat">
        <h2>Energy Consumed</h2>
        <p>{energyConsumed} kWh</p>
      </div>
      <div className="energy-stat">
        <h2>Net Energy</h2>
        <p>{energyProduced - energyConsumed} kWh</p>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;