import React from 'react';
import { Menu, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  isCartOpen: boolean;
  setShowProfile: (value: boolean) => void;
  showProfile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  setIsMenuOpen, 
  isMenuOpen,
  setIsCartOpen,
  isCartOpen,
  setShowProfile,
  showProfile
}) => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-zinc-800 py-4 px-6 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white hover:text-amber-500 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="text-white font-bold text-2xl">Bite me now</div>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)} 
            className="relative hover:text-amber-500 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="text-white h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="hover:text-amber-500 transition-colors"
            aria-label="Open profile"
          >
            <User className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;