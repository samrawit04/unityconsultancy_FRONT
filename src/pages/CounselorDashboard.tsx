import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconUser, IconBell } from '@tabler/icons-react';

const CounselorDashboard = () => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

  const toggleNotifications = () => {
    setIsNotificationsVisible(!isNotificationsVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/src/asset/logo.png" alt="Unity Logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">
              Home
            </Link>
            <Link to="/clients" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">
              Clients
            </Link>
            <Link to="/counselor-posts" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">
              Posts
            </Link>
            <Link to="/logout" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Logout</Link>
            <Link to="/profile" className="text-[#4b2a75] hover:text-[#3a2057]">
              <IconUser size={24} />
            </Link>
            <button onClick={toggleNotifications} className="text-[#4b2a75] hover:text-[#3a2057]">
              <IconBell size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#4b2a75] mb-2">Welcome Abebe, Thank you for being here!</h1>
              <p className="text-gray-600">Your work supports healthier relationships every day.</p>
            </div>
            <button className="bg-[#4b2a75] text-white px-6 py-2 rounded-lg hover:bg-[#3a2057] transition-colors">
              Job Application
            </button>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#4b2a75] mb-6">UP COMING SESSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Session Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Pre-Marital Guidance Session</h3>
              <p className="text-gray-600 mb-2">Date: 12/03/2018</p>
              <p className="text-gray-600 mb-2">Time: 2:00pm LT</p>
              <p className="text-gray-600">Client: MELOS WERKUK</p>
            </div>
            {/* Session Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Conflict Resolution</h3>
              <p className="text-gray-600 mb-2">Date: 12/03/2018</p>
              <p className="text-gray-600 mb-2">Time: 2:00pm LT</p>
              <p className="text-gray-600">Client: MELOS WERKUK</p>
            </div>
            {/* Session Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Couple Therapy</h3>
              <p className="text-gray-600 mb-2">Date: 12/03/2018</p>
              <p className="text-gray-600 mb-2">Time: 2:00pm LT</p>
              <p className="text-gray-600">Client: MELOS WERKUK</p>
            </div>
          </div>
        </div>

        {/* Your Clients Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#4b2a75] mb-6">Your Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Client Card (repeated 5 times) */}
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <IconUser size={40} className="text-gray-400" />
                </div>
                <p className="font-medium text-[#4b2a75]">Abebe kebede</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      {isNotificationsVisible && (
        <div className="fixed right-0 top-20 bg-blue-50 w-80 p-6 rounded-l-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#4b2a75] flex items-center gap-2">
              <IconBell size={20} />
              Notifications
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">hello abebe, here is your session link join and build a healthy relationship.</p>
              <a href="#" className="text-xs text-[#4b2a75] hover:underline mt-1 block">https://www.figma.com/design/</a>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">New Session Booked: Client Melos has scheduled a session for April 5 at 2:00 PM.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">You have a session with Counselor Helen tomorrow at 10:00 AM.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">lorem ipsum</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">hello , counselor you have registered successfully!!</p>
            </div>
          </div>
          {/* Send Notification Form */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Send a Notification to your Client ..."
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CounselorDashboard;