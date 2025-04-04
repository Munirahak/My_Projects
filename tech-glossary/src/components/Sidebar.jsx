// import { Menu, Home, List, Save, Heart, History, Plus } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile Sidebar Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden p-2 bg-gray-700 text-white fixed top-4 left-4 z-50"
//       >
//         <Menu size={24} />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:relative bg-gray-100 p-6 shadow-md h-screen w-64 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform`}
//       >
//         <div className="flex items-center mb-6">
//           <Menu
//             size={24}
//             className="mr-3 cursor-pointer md:hidden"
//             onClick={() => setIsOpen(false)}
//           />
//           <h1 className="text-xl font-bold">Welcome!</h1>
//         </div>
//         <nav>
//           <ul className="space-y-4">
//             <li className="flex items-center border-b pb-2">
//               <Home size={20} className="mr-3" />{" "}
//               <Link to="/register">Create account</Link>
//             </li>
//             <li className="flex items-center border-b pb-2">
//               <List size={20} className="mr-3" />{" "}
//               <Link to="/">Category list</Link>
//             </li>
//             <li className="flex items-center border-b pb-2">
//               <Save size={20} className="mr-3" /> <Link to="/saved">Saved</Link>
//             </li>
//             <li className="flex items-center border-b pb-2">
//               <Heart size={20} className="mr-3" />{" "}
//               <Link to="/favorites">Favorites</Link>
//             </li>
//             <li className="flex items-center border-b pb-2">
//               <History size={20} className="mr-3" />{" "}
//               <Link to="/history">History</Link>
//             </li>
//           </ul>
//         </nav>
//         <button className="mt-6 flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg w-full shadow hover:bg-gray-800">
//           Add item <Plus size={20} className="ml-auto" />
//         </button>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

// Sidebar.jsx
import { Menu, Home, List, Save, Heart, History, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 md:static md:block`}
    >
      {/* Top section */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-bold">Welcome!</h1>
        <button className="md:hidden text-gray-600" onClick={toggleSidebar}>
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-4">
        <Link to="/register" className="flex items-center space-x-3">
          <Home size={20} />
          <span>Create Account</span>
        </Link>
        <Link to="/" className="flex items-center space-x-3">
          <List size={20} />
          <span>Category List</span>
        </Link>
        <Link to="/saved" className="flex items-center space-x-3">
          <Save size={20} />
          <span>Saved</span>
        </Link>
        <Link to="/favorites" className="flex items-center space-x-3">
          <Heart size={20} />
          <span>Favorites</span>
        </Link>
        <Link to="/history" className="flex items-center space-x-3">
          <History size={20} />
          <span>History</span>
        </Link>
      </nav>

      {/* Bottom button */}
      <div className="p-4">
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg w-full shadow hover:bg-gray-800">
          Add Item <Plus size={20} className="ml-auto" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
