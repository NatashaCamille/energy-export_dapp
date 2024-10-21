import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const Marketplace = ({ account, web3 }) => {
  const [listings, setListings] = useState([]);
  const [newListing, setNewListing] = useState({ amount: '', price: '' });
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      if (web3) {
        // Fetch listings from smart contract (to be implemented)
        
        // const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        // const fetchedListings = await contract.methods.getAllListings().call();
        // setListings(fetchedListings);

        // Placeholder data for demo
        setListings([
          { id: 1, seller: '0x123...', amount: 100, price: 50 },
          { id: 2, seller: '0x456...', amount: 200, price: 90 },
        ]);

        // Test data
        setEnergyData([
          { name: 'Jan', production: 4000, consumption: 2400 },
          { name: 'Feb', production: 3000, consumption: 1398 },
          { name: 'Mar', production: 2000, consumption: 9800 },
          { name: 'Apr', production: 2780, consumption: 3908 },
          { name: 'May', production: 1890, consumption: 4800 },
          { name: 'Jun', production: 2390, consumption: 3800 },
        ]);
      }
    };
    fetchListings();
  }, [account, web3]);

  const handlePurchase = async (listingId) => {
    // Implementing purchase logic here
   
    // const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    // await contract.methods.purchaseEnergy(listingId).send({ from: account });
    console.log(`Purchasing listing ${listingId}`);
  };

  const handleInputChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  const handleCreateListing = async (e) => {
    e.preventDefault();
    if (newListing.amount && newListing.price) {
      // Implementing create listing logic here
      
      // const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
      // await contract.methods.createListing(newListing.amount, newListing.price).send({ from: account });
      
      // adds the new listing 
      const newListingObject = {
        id: listings.length + 1,
        seller: account || '0xYOUR_ADDRESS...',
        amount: parseFloat(newListing.amount),
        price: parseFloat(newListing.price),
      };
      setListings([...listings, newListingObject]);
      
      console.log('Creating new listing:', newListingObject);
      // Resets form after submission
      setNewListing({ amount: '', price: '' });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Energy Marketplace</h1>
      
      <Card className="mb-6">
        <CardHeader>Create New Listing</CardHeader>
        <CardContent>
          <form onSubmit={handleCreateListing} className="space-y-4">
            <Input
              type="number"
              name="amount"
              value={newListing.amount}
              onChange={handleInputChange}
              placeholder="Amount (kWh)"
              required
            />
            <Input
              type="number"
              name="price"
              value={newListing.price}
              onChange={handleInputChange}
              placeholder="Price (tokens)"
              required
            />
            <Button type="submit">Create Listing</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>Energy Production vs Consumption</CardHeader>
        <CardContent>
           {energyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={energyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="production" fill="#8884d8" name="Production" />
              <Bar dataKey="consumption" fill="#82ca9d" name="Consumption" />
            </BarChart>
          </ResponsiveContainer>
           ) : (
              <p>Loading energy data....</p>
           )}
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Current Listings</h2>
      <div className="space-y-4">
        {listings.map((listing) => (
          <Card key={listing.id}>
            <CardContent className="flex justify-between items-center">
              <div>
                <p>Listing #{listing.id}</p>
                <p>Seller: {listing.seller}</p>
                <p>Amount: {listing.amount} kWh</p>
                <p>Price: {listing.price} tokens</p>
              </div>
              <Button onClick={() => handlePurchase(listing.id)}>Buy</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;