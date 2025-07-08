import React from 'react';
import { ArrowRight, Recycle, Zap, Coins, Gift } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'2\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Turn Your
                  <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text block">
                    Plastic Waste
                  </span>
                  Into Rewards
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  ReCred revolutionizes recycling with smart reverse vending machines. 
                  Deposit plastic bottles and wrappers, earn points, and get amazing rewards from your favorite brands.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
                  Find ReCred Machine
                  <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
                  How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-3xl p-8 backdrop-blur-sm border border-green-400/30">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <span className="text-white font-medium">Today's Impact</span>
                    <span className="text-green-400 font-bold">+2,847 bottles</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                      <div className="text-2xl font-bold text-green-400">125K+</div>
                      <div className="text-gray-300">Bottles Recycled</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/30 rounded-xl">
                      <div className="text-2xl font-bold text-green-400">50K+</div>
                      <div className="text-gray-300">Active Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How ReCred Works</h2>
            <p className="text-xl text-gray-400">Simple steps to turn waste into rewards</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Deposit Waste', desc: 'Place plastic bottles or wrappers into ReCred machine', icon: Recycle, color: 'from-blue-500 to-blue-600' },
              { step: '02', title: 'Get QR Code', desc: 'Machine prints/displays QR code with reward points', icon: Zap, color: 'from-purple-500 to-purple-600' },
              { step: '03', title: 'Earn Points', desc: 'Gold points for bottles, Blue points for wrappers', icon: Coins, color: 'from-yellow-500 to-yellow-600' },
              { step: '04', title: 'Claim Rewards', desc: 'Scan QR on app to redeem points for cash & offers', icon: Gift, color: 'from-green-500 to-green-600' }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-800 rounded-2xl p-6 h-full border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="text-sm font-bold text-green-400 mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points System Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Smart Points System</h2>
            <p className="text-xl text-gray-400">Different rewards for different waste types</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-3xl p-8 border border-yellow-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <Coins className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Gold Points</h3>
              </div>
              <p className="text-gray-300 mb-6">For plastic bottles - redeemable for cash and offers</p>
              <div className="space-y-4">
                {[
                  { size: '250ml bottle', points: '5 Points' },
                  { size: '500ml bottle', points: '7 Points' },
                  { size: '1L bottle', points: '10 Points' },
                  { size: '2L+ bottle', points: '20 Points' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{item.size}</span>
                    <span className="text-yellow-400 font-bold">{item.points}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-yellow-400 font-medium">💰 10 Gold Points = ₹1</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl p-8 border border-blue-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Coins className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Blue Points</h3>
              </div>
              <p className="text-gray-300 mb-6">For plastic wrappers - redeemable for brand offers only</p>
              <div className="space-y-4">
                {[
                  { type: 'Snack wrappers', points: '3 Points' },
                  { type: 'Shopping bags', points: '5 Points' },
                  { type: 'Food packaging', points: '4 Points' },
                  { type: 'Product covers', points: '6 Points' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">{item.type}</span>
                    <span className="text-blue-400 font-bold">{item.points}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-blue-400 font-medium">🎁 Brand discounts & exclusive offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Recycling?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of users making a difference while earning rewards</p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Find Nearest ReCred Machine
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;