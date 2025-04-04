// import { Search } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4 flex justify-center items-center shadow-md">
//       <div className="relative w-1/2">
//         <input
//           type="text"
//           placeholder="Search term"
//           className="w-full p-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
//         />
//         <Search
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//           size={20}
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/term/${searchTerm.trim()}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-700 text-black p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-center px-4">
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-100 p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
