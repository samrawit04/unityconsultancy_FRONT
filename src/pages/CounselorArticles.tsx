import React from 'react';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';

const articles = [
  {
    title: 'Marriage and Happiness',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Marriage and Happiness',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Marriage and Happiness',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const CounselorArticles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/src/asset/logo.png" alt="Unity Logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Home</Link>
            <Link to="/clients" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Clients</Link>
            <Link to="/counselor-posts" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Posts</Link>
            <Link to="/logout" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Logout</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#4b2a75] mb-8 text-center">Your Articles</h1>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#4b2a75] mb-4">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-8 right-8 bg-[#4b2a75] text-white p-4 rounded-full shadow-lg hover:bg-[#3a2057] transition-colors">
        <IconPlus size={24} />
      </button>
    </div>
  );
};

export default CounselorArticles;