import React, { useRef } from 'react';
import { X, User, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';

interface ProfileProps {
  setShowProfile: (value: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ setShowProfile }) => {
  const profileRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileRef, () => setShowProfile(false));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div ref={profileRef} className="  w-full md:w-96 h-full absolute right-0 p-6 overflow-y-auto transform transition-transform duration-300 ease-out">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-xl font-bold">Profilo</h2>
          <button
            onClick={() => setShowProfile(false)}
            className="text-white hover:text-amber-500 transition-colors"
            aria-label="Close profile"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-blue-700 rounded-full flex items-center justify-center mb-4 hover:bg-blue-600 transition-colors">
            <User className="text-white h-12 w-12" />
          </div>
          <h3 className="text-white text-xl font-bold">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
          
          {/* New button to open full profile page */}
          <Link
            to={"/profile"}
            className="mt-4 flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors transform hover:scale-105 active:scale-95 duration-200"
          >
            Profilo Completo
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-700 p-4 rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105 duration-200 cursor-pointer">
            <h4 className="text-white font-bold mb-2">Ordini Passati</h4>
            <p className="text-gray-400">Visualizza i tuoi ordini passati</p>
          </div>
          <button className="w-full bg-red-500 text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition-colors transform hover:scale-105 active:scale-95 duration-200">
            Esci
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;