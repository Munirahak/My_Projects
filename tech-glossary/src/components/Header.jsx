import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-center items-center shadow-md">
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search term"
          className="w-full p-2 pl-10 pr-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
    </header>
  );
};

export default Header;
