import React from 'react';

const RewardsPage = () => {
  const rewards = [
    { id: 1, name: 'Swiggy ₹50 Off', points: 50, type: 'gold', category: 'Food', image: '🍔' },
    { id: 2, name: 'Ola ₹30 Ride Credit', points: 30, type: 'gold', category: 'Transport', image: '🚗' },
    { id: 3, name: 'Adidas 10% Off', points: 25, type: 'blue', category: 'Fashion', image: '👟' },
    { id: 4, name: 'Zomato ₹40 Off', points: 40, type: 'gold', category: 'Food', image: '🍕' },
    { id: 5, name: 'Nike 15% Off', points: 35, type: 'blue', category: 'Fashion', image: '👕' },
    { id: 6, name: 'Empire Restaurant ₹100 Off', points: 100, type: 'gold', category: 'Dining', image: '🍽️' },
    { id: 7, name: 'Zepto ₹25 Off', points: 25, type: 'gold', category: 'Grocery', image: '🛒' },
    { id: 8, name: 'Blinkit Free Delivery', points: 15, type: 'gold', category: 'Delivery', image: '📦' },
    { id: 9, name: 'Puma 20% Off', points: 40, type: 'blue', category: 'Fashion', image: '👔' },
    { id: 10, name: 'Himalayan 15% Off', points: 30, type: 'blue', category: 'Health', image: '💊' },
    { id: 11, name: 'McDonald\'s ₹60 Off', points: 60, type: 'gold', category: 'Food', image: '🍟' },
    { id: 12, name: 'Starbucks ₹80 Off', points: 80, type: 'gold', category: 'Beverages', image: '☕' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Reward Store</h1>
          <p className="text-xl text-gray-400">Redeem your ReCred points for amazing rewards</p>
        </div>

        {/* User Balance Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600 shadow-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1,247 Points</div>
              <div className="text-gray-400 text-lg">Your Balance</div>
              <div className="mt-4 flex gap-4 justify-center">
                <div className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg border border-yellow-500/30">
                  <span className="font-medium">Gold: 847</span>
                </div>
                <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30">
                  <span className="font-medium">Blue: 400</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 hover:border-green-400 transition-colors duration-300">
            All Rewards
          </button>
          <button className="bg-yellow-500/10 text-yellow-400 px-6 py-3 rounded-lg font-medium border border-yellow-500/30 hover:bg-yellow-500/20 transition-colors duration-300">
            Gold Points
          </button>
          <button className="bg-blue-500/10 text-blue-400 px-6 py-3 rounded-lg font-medium border border-blue-500/30 hover:bg-blue-500/20 transition-colors duration-300">
            Blue Points
          </button>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{reward.image}</div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  reward.type === 'gold' 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {reward.type === 'gold' ? 'Gold' : 'Blue'}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reward.name}</h3>
              <p className="text-gray-400 mb-4">{reward.category}</p>
              <div className="flex items-center justify-between">
                <div className="text-green-400 font-bold text-lg">{reward.points} Points</div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 hover:shadow-lg">
                  Redeem
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Brands Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Brand Partners</h2>
            <p className="text-gray-400">Trusted brands offering exclusive rewards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Swiggy', logo: '🍔' },
              { name: 'Zomato', logo: '🍕' },
              { name: 'Ola', logo: '🚗' },
              { name: 'Adidas', logo: '👟' },
              { name: 'Nike', logo: '👕' },
              { name: 'Empire', logo: '🍽️' }
            ].map((brand, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-2">{brand.logo}</div>
                <div className="text-white font-medium">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Redeem Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-3xl p-8 border border-green-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">How to Redeem Rewards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-bold mb-2">Select Reward</h3>
              <p className="text-gray-400">Choose from our extensive catalog of rewards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-bold mb-2">Confirm Points</h3>
              <p className="text-gray-400">Ensure you have enough points to redeem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-bold mb-2">Get Voucher</h3>
              <p className="text-gray-400">Receive your digital voucher instantly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;