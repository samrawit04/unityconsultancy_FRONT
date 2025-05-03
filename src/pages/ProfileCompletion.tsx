import React from 'react';
import { Button } from '@/components/ui/button';
import { IconCheck } from '@tabler/icons-react';

const ProfileCompletion = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4b2a75] bg-opacity-70 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-md w-full rounded-2xl shadow-lg p-8 space-y-8 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-500 mb-2 flex items-center justify-center">
            <IconCheck size={20} className="mr-2" />
            You have registered successfully!!
          </h2>
          <p className="text-white text-lg font-bold">
            Complete Your Profile
          </p>
          <p className="text-gray-200 text-sm">
            Add more details to personalize your experience. You can skip this step and update later.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Button className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-base font-semibold">
            Next
          </Button>
          <Button className="w-full bg-gray-300 hover:bg-gray-400 text-black py-3 rounded-lg text-base font-semibold">
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;