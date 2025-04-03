import { useState } from "react";

const SavedPage = () => {
  const [savedTerms, setSavedTerms] = useState([
    { id: 1, term: "API", definition: "Application Programming Interface" },
    {
      id: 2,
      term: "React",
      definition: "A JavaScript library for building user interfaces",
    },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Saved Terms</h2>
      {savedTerms.length > 0 ? (
        <ul className="bg-white p-4 rounded-lg shadow-lg">
          {savedTerms.map((item) => (
            <li key={item.id} className="p-3 border-b last:border-none">
              <strong>{item.term}:</strong> {item.definition}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No saved terms yet.</p>
      )}
    </div>
  );
};

export default SavedPage;
