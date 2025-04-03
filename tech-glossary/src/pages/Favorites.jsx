import { useState } from "react";

const FavoritesPage = () => {
  const [favoriteTerms, setFavoriteTerms] = useState([
    {
      id: 1,
      term: "JavaScript",
      definition: "A programming language for the web.",
    },
    {
      id: 2,
      term: "Node.js",
      definition: "A JavaScript runtime built on Chrome's V8 engine.",
    },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Favorite Terms</h2>
      {favoriteTerms.length > 0 ? (
        <ul className="bg-white p-4 rounded-lg shadow-lg">
          {favoriteTerms.map((item) => (
            <li key={item.id} className="p-3 border-b last:border-none">
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No favorite terms yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
