import React from 'react';
import { Link } from 'react-router-dom';
import { IconUser, IconHeart } from '@tabler/icons-react';

const CounselorPosts = () => {
  const posts = [
    {
      id: 1,
      counselor: {
        name: 'Dr. Sarah Johnson',
        image: 'https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        specialization: 'Marriage Counselor'
      },
      title: 'Building Trust in Your Relationship',
      content: 'Trust is the foundation of any healthy relationship. Here are key strategies to build and maintain trust with your partner...',
      likes: 245,
      date: '2024-01-15'
    },
    {
      id: 2,
      counselor: {
        name: 'Dr. Michael Chen',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        specialization: 'Pre-Marriage Counselor'
      },
      title: 'Essential Conversations Before Marriage',
      content: 'Before taking the big step, make sure you and your partner have discussed these important topics...',
      likes: 189,
      date: '2024-01-14'
    },
    {
      id: 3,
      counselor: {
        name: 'Dr. Emily Williams',
        image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
        specialization: 'Relationship Expert'
      },
      title: 'Effective Communication in Relationships',
      content: 'Learn how to express your feelings and listen actively to strengthen your bond...',
      likes: 312,
      date: '2024-01-13'
    }
  ];

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
            <Link to="/counselor-posts" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">
              Counselor Posts
            </Link>
            <Link to="/logout" className="text-[#4b2a75] hover:text-[#3a2057] font-medium">Logout</Link>
            <Link to="/profile" className="text-[#4b2a75] hover:text-[#3a2057]">
              <IconUser size={24} />
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#4b2a75] mb-8">From Our Counselors</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={post.counselor.image}
                  alt={post.counselor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{post.counselor.name}</h3>
                  <p className="text-sm text-gray-500">{post.counselor.specialization}</p>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              
              <div className="flex items-center space-x-2 text-[#4b2a75]">
                <button className="flex items-center space-x-1 hover:text-[#3a2057]">
                  <IconHeart size={20} />
                  <span>{post.likes}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounselorPosts;