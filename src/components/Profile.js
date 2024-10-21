import React from 'react';

function Profile({ account, web3 }) {
  const [username] = React.useState('');
  const [reputation] = React.useState(0);

  React.useEffect(() => {
    const fetchProfileData = async () => {
      if (web3 && account) {
        // Fetch profile data from smart contract (to be implemented)
        // Example:
        // const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        // const userData = await contract.methods.getUserProfile(account).call();
        // setUsername(userData.username);
        // setReputation(userData.reputation);
      }
    };

    fetchProfileData();
  }, [account, web3]);

  return (
    <div className="profile">
    <h1>User Profile</h1>
    <div className="profile-grid">
      <div className="profile-info">
        <h2>Username</h2>
        <p>{username}</p>
      </div>
      <div className="profile-info">
        <h2>Wallet Address</h2>
        <p>{account}</p>
      </div>
      <div className="profile-info">
        <h2>Reputation Score</h2>
        <p>{reputation}</p>
      </div>
    </div>
  </div>
  );
}

export default Profile;