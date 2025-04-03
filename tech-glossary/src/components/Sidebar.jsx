import { Menu, Home, List, Save, Heart, History, Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-6 shadow-md h-screen">
      <div className="flex items-center mb-6">
        <Menu size={24} className="mr-3" />
        <h1 className="text-xl font-bold">Welcome!</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center border-b pb-2">
            <Home size={20} className="mr-3" /> Create account
          </li>
          <li className="flex items-center border-b pb-2">
            <List size={20} className="mr-3" /> Category list
          </li>
          <li className="flex items-center border-b pb-2">
            <Save size={20} className="mr-3" /> Saved
          </li>
          <li className="flex items-center border-b pb-2">
            <Heart size={20} className="mr-3" /> Favorites
          </li>
          <li className="flex items-center border-b pb-2">
            <History size={20} className="mr-3" /> History
          </li>
        </ul>
      </nav>
      <button className="mt-6 flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg w-full shadow hover:bg-gray-800">
        Add item <Plus size={20} className="ml-auto" />
      </button>
    </aside>
  );
};

export default Sidebar;
