import React from 'react';
import { Trophy, MapPin, Medal, Award, Star } from 'lucide-react';

const LeaderboardPage = () => {
  const leaderboard = [
    { rank: 1, name: 'Rahul Sharma', bottles: 1247, points: 8329, location: 'Bangalore', streak: 45, badge: 'Eco Champion' },
    { rank: 2, name: 'Priya Patel', bottles: 1156, points: 7892, location: 'Mumbai', streak: 38, badge: 'Green Warrior' },
    { rank: 3, name: 'Arjun Singh', bottles: 1089, points: 7234, location: 'Delhi', streak: 42, badge: 'Recycle Hero' },
    { rank: 4, name: 'Sneha Reddy', bottles: 967, points: 6543, location: 'Hyderabad', streak: 33, badge: 'Planet Saver' },
    { rank: 5, name: 'Vikram Kumar', bottles: 845, points: 5876, location: 'Chennai', streak: 28, badge: 'Eco Enthusiast' },
    { rank: 6, name: 'Ananya Gupta', bottles: 789, points: 5432, location: 'Pune', streak: 25, badge: 'Green Guardian' },
    { rank: 7, name: 'Ravi Mehta', bottles: 723, points: 4987, location: 'Kolkata', streak: 22, badge: 'Waste Warrior' },
    { rank: 8, name: 'Kavya Nair', bottles: 678, points: 4656, location: 'Kochi', streak: 19, badge: 'Eco Helper' },
    { rank: 9, name: 'Amit Jain', bottles: 634, points: 4234, location: 'Jaipur', streak: 16, badge: 'Green Friend' },
    { rank: 10, name: 'Pooja Desai', bottles: 589, points: 3987, location: 'Ahmedabad', streak: 14, badge: 'Eco Supporter' },
  ];

  const monthlyStats = [
    { month: 'January', bottles: 12450, users: 2340, points: 89230 },
    { month: 'February', bottles: 15670, users: 2890, points: 112450 },
    { month: 'March', bottles: 18920, users: 3456, points: 135670 },
    { month: 'April', bottles: 22340, users: 4123, points: 159880 },
    { month: 'May', bottles: 26780, users: 4890, points: 189450 },
    { month: 'June', bottles: 31240, users: 5567, points: 223560 },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-500" size={24} />;
      case 2:
        return <Medal className="text-gray-400" size={24} />;
      case 3:
        return <Award className="text-orange-500" size={24} />;
      default:
        return <span className="text-gray-300 font-bold text-lg">{rank}</span>;
    }
  };

  const getBadgeColor = (rank) => {
    if (rank <= 3) return 'from-yellow-500 to-yellow-600';
    if (rank <= 5) return 'from-green-500 to-green-600';
    return 'from-blue-500 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Leaderboard</h1>
          <p className="text-xl text-gray-400">Top recyclers making the biggest impact</p>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-16">
          <div className="flex justify-center items-end gap-8 mb-8">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal size={32} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">{leaderboard[1].name}</h3>
                <p className="text-gray-300">{leaderboard[1].points.toLocaleString()} pts</p>
                <p className="text-gray-400 text-sm">{leaderboard[1].bottles} bottles</p>
              </div>
              <div className="bg-gray-700 h-24 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 mb-4 transform hover:scale-110 transition-transform duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy size={36} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">{leaderboard[0].name}</h3>
                <p className="text-gray-100">{leaderboard[0].points.toLocaleString()} pts</p>
                <p className="text-yellow-100 text-sm">{leaderboard[0].bottles} bottles</p>
              </div>
              <div className="bg-yellow-500 h-32 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">{leaderboard[2].name}</h3>
                <p className="text-gray-300">{leaderboard[2].points.toLocaleString()} pts</p>
                <p className="text-gray-400 text-sm">{leaderboard[2].bottles} bottles</p>
              </div>
              <div className="bg-orange-500 h-20 rounded-t-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Community Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left pb-4">Rank</th>
                  <th className="text-left pb-4">User</th>
                  <th className="text-right pb-4">Bottles</th>
                  <th className="text-right pb-4">Points</th>
                  <th className="text-right pb-4">Location</th>
                  <th className="text-right pb-4">Streak</th>
                  <th className="text-right pb-4">Badge</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((user) => (
                  <tr key={user.rank} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                          <span className="text-white font-medium">{user.name.charAt(0)}</span>
                        </div>
                        <span className="text-white font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-right text-gray-300">{user.bottles.toLocaleString()}</td>
                    <td className="py-4 text-right text-green-400 font-medium">{user.points.toLocaleString()}</td>
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-1 text-gray-300">
                        <MapPin size={16} />
                        {user.location}
                      </div>
                    </td>
                    <td className="py-4 text-right text-yellow-400 font-medium">{user.streak} days</td>
                    <td className="py-4 text-right">
                      <span className={`inline-block bg-gradient-to-r ${getBadgeColor(user.rank)} text-white px-3 py-1 rounded-full text-sm`}>
                        {user.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Statistics */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Monthly Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-bold text-lg mb-4">{stat.month}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bottles Recycled</span>
                    <span className="text-green-400 font-medium">{stat.bottles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Active Users</span>
                    <span className="text-blue-400 font-medium">{stat.users.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Points Earned</span>
                    <span className="text-yellow-400 font-medium">{stat.points.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current User Stats */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Recycling Stats</h2>
              <p className="text-green-100">See how you compare to the community</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center min-w-[120px]">
                <p className="text-green-100 text-sm mb-1">Your Rank</p>
                <p className="text-white font-bold text-2xl">#42</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center min-w-[120px]">
                <p className="text-green-100 text-sm mb-1">Your Bottles</p>
                <p className="text-white font-bold text-2xl">287</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center min-w-[120px]">
                <p className="text-green-100 text-sm mb-1">Your Points</p>
                <p className="text-white font-bold text-2xl">1,934</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center min-w-[120px]">
                <p className="text-green-100 text-sm mb-1">Current Streak</p>
                <p className="text-white font-bold text-2xl">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;