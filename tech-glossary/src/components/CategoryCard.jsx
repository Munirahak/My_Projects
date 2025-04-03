import { Heart } from "lucide-react";

const CategoryCard = ({ title, items }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg w-48 h-32 flex flex-col justify-between items-center shadow-lg relative">
      <button className="absolute top-2 right-2 text-white hover:text-red-500">
        <Heart size={20} />
      </button>
      <h2 className="text-center text-lg font-semibold">{title}</h2>
      <p className="text-sm">{items} ITEMS</p>
    </div>
  );
};

export default CategoryCard;
