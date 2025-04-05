import { useState } from "react";
import { Menu, Home, List, Save, Heart, History, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 fixed top-4 left-4 bg-gray-800 text-white rounded-md z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-500  bg-gray-100 p-6 shadow-md transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Welcome!</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 rounded-full bg-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center border-b pb-2">
              <Home size={20} className="mr-3" />
              <Link to="/register" className="hover:text-blue-500">
                Create account
              </Link>
            </li>
            <li className="flex items-center border-b pb-2">
              <List size={20} className="mr-3" />
              <Link to="/categories" className="hover:text-blue-500">
                Category list
              </Link>
            </li>
            <li className="flex items-center border-b pb-2">
              <Save size={20} className="mr-3" />
              <Link to="/saved" className="hover:text-blue-500">
                Saved
              </Link>
            </li>
            <li className="flex items-center border-b pb-2">
              <Heart size={20} className="mr-3" />
              <Link to="/favorites" className="hover:text-blue-500">
                Favorites
              </Link>
            </li>
            <li className="flex items-center border-b pb-2">
              <History size={20} className="mr-3" />
              <Link to="/history" className="hover:text-blue-500">
                History
              </Link>
            </li>
          </ul>
        </nav>

        {/* Add Item Button */}
        <Link
          to="/add-term"
          className="mt-6 flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg w-full shadow hover:bg-gray-800"
        >
          Add item <Plus size={20} className="ml-auto" />
        </Link>
      </aside>

      {/* Overlay (for mobile view) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
