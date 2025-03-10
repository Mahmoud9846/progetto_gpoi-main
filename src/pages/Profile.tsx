import React, { useState } from 'react';
import { User, Lock, Trash2, Camera, LogOut, Settings, ChevronRight, Edit, Shield, CreditCard } from 'lucide-react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@university.edu',
    profilePicture: '/api/placeholder/150/150'
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Colors based on iOS design
  const colors = {
    background: isDarkMode ? '#000000' : '#F2F2F7',
    card: isDarkMode ? '#1C1C1E' : '#FFFFFF',
    primary: '#FF9500', // Orange (avoiding blue)
    danger: '#FF3B30',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    textSecondary: isDarkMode ? '#8E8E93' : '#6E6E73',
    border: isDarkMode ? '#38383A' : '#E5E5EA',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="max-w-md mx-auto pt-8 px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4" style={{ borderColor: colors.primary }}>
              <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 rounded-full" 
              style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}>
              <Camera size={16} />
            </button>
          </div>
          <h1 className="text-xl font-semibold" style={{ color: colors.text }}>
            {user.firstName} {user.lastName}
          </h1>
          <p style={{ color: colors.textSecondary }}>{user.email}</p>
          <button className="mt-2 px-4 py-1.5 rounded-full text-sm font-medium" 
            style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}>
            Edit Profile
          </button>
        </div>

        {/* Settings Sections */}
        <div className="space-y-4">
          {/* Account Section */}
          <div className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: colors.card }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: colors.border }}>
              <h2 className="font-medium" style={{ color: colors.text }}>Account</h2>
            </div>
            
            <div className="divide-y" style={{ borderColor: colors.border }}>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: 'rgba(255, 149, 0, 0.1)' }}>
                    <User size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Personal Information</span>
                </div>
                <ChevronRight size={16} style={{ color: colors.textSecondary }} />
              </div>
              
              <div className="flex items-center justify-between px-4 py-3" 
                onClick={() => setIsPasswordModalOpen(true)}>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: 'rgba(255, 149, 0, 0.1)' }}>
                    <Lock size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Change Password</span>
                </div>
                <ChevronRight size={16} style={{ color: colors.textSecondary }} />
              </div>
              
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: 'rgba(255, 149, 0, 0.1)' }}>
                    <Shield size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Privacy</span>
                </div>
                <ChevronRight size={16} style={{ color: colors.textSecondary }} />
              </div>
            </div>
          </div>
          
          {/* Preferences Section */}
          <div className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: colors.card }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: colors.border }}>
              <h2 className="font-medium" style={{ color: colors.text }}>Preferences</h2>
            </div>
            
            <div className="divide-y" style={{ borderColor: colors.border }}>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: 'rgba(255, 149, 0, 0.1)' }}>
                    <CreditCard size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Payment Methods</span>
                </div>
                <ChevronRight size={16} style={{ color: colors.textSecondary }} />
              </div>
              
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                    style={{ backgroundColor: 'rgba(255, 149, 0, 0.1)' }}>
                    <Settings size={16} style={{ color: colors.primary }} />
                  </div>
                  <span style={{ color: colors.text }}>Appearance</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-sm" style={{ color: colors.textSecondary }}>
                    {isDarkMode ? 'Dark' : 'Light'}
                  </span>
                  <div 
                    className="w-10 h-6 rounded-full relative cursor-pointer"
                    style={{ backgroundColor: isDarkMode ? colors.primary : colors.border }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  >
                    <div 
                      className="absolute w-5 h-5 rounded-full top-0.5 transition-all duration-300"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        left: isDarkMode ? '18px' : '2px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Danger Zone */}
          <div className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: colors.card }}>
            <div className="px-4 py-3 border-b" style={{ borderColor: colors.border }}>
              <h2 className="font-medium" style={{ color: colors.danger }}>Danger Zone</h2>
            </div>
            
            <div className="px-4 py-3" onClick={() => setIsDeleteModalOpen(true)}>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                  style={{ backgroundColor: 'rgba(255, 59, 48, 0.1)' }}>
                  <Trash2 size={16} style={{ color: colors.danger }} />
                </div>
                <div>
                  <span style={{ color: colors.danger }}>Delete Account</span>
                  <p className="text-xs" style={{ color: colors.textSecondary }}>
                    Permanently delete your account and all associated data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Version info - iOS style */}
        <div className="mt-8 mb-4 text-center">
          <p className="text-xs" style={{ color: colors.textSecondary }}>School Bar v2.4.1</p>
        </div>
      </div>

      {/* Password Change Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-2xl max-w-xs w-full p-6" style={{ backgroundColor: colors.card }}>
            <h3 className="text-lg font-medium mb-4" style={{ color: colors.text }}>Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>Current Password</label>
                <input
                  type="password"
                  className="block w-full px-3 py-2 rounded-lg border"
                  style={{ 
                    backgroundColor: isDarkMode ? '#2C2C2E' : '#FFFFFF',
                    borderColor: colors.border,
                    color: colors.text
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>New Password</label>
                <input
                  type="password"
                  className="block w-full px-3 py-2 rounded-lg border"
                  style={{ 
                    backgroundColor: isDarkMode ? '#2C2C2E' : '#FFFFFF',
                    borderColor: colors.border,
                    color: colors.text
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1" style={{ color: colors.textSecondary }}>Confirm New Password</label>
                <input
                  type="password"
                  className="block w-full px-3 py-2 rounded-lg border"
                  style={{ 
                    backgroundColor: isDarkMode ? '#2C2C2E' : '#FFFFFF',
                    borderColor: colors.border,
                    color: colors.text
                  }}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                className="px-4 py-2 rounded-full"
                style={{ backgroundColor: isDarkMode ? '#2C2C2E' : '#E5E5EA', color: colors.text }}
                onClick={() => setIsPasswordModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 rounded-full"
                style={{ backgroundColor: colors.primary, color: '#FFFFFF' }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-2xl max-w-xs w-full p-6" style={{ backgroundColor: colors.card }}>
            <h3 className="text-lg font-medium mb-2" style={{ color: colors.danger }}>Delete Account</h3>
            <p className="mb-4" style={{ color: colors.textSecondary }}>
              This action cannot be undone. All your data will be permanently deleted.
            </p>
            <div>
              <label className="block text-sm mb-2" style={{ color: colors.textSecondary }}>
                Type your password to confirm
              </label>
              <input
                type="password"
                className="block w-full px-3 py-2 rounded-lg border"
                style={{ 
                  backgroundColor: isDarkMode ? '#2C2C2E' : '#FFFFFF',
                  borderColor: colors.border,
                  color: colors.text
                }}
              />
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                className="px-4 py-2 rounded-full"
                style={{ backgroundColor: isDarkMode ? '#2C2C2E' : '#E5E5EA', color: colors.text }}
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 rounded-full"
                style={{ backgroundColor: colors.danger, color: '#FFFFFF' }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
