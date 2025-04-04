import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TermDetailPage = () => {
  const { word } = useParams();
  const [termDetails, setTermDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTermDetails = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        console.log("API Response:", data); // Debugging line to check API data

        if (!Array.isArray(data) || data.length === 0) {
          setError("No definition found.");
        } else {
          setTermDetails(data[0]);
        }
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTermDetails();
  }, [word]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-6">{error}</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">
        {termDetails?.word || "No word found"}
      </h2>
      {termDetails?.meanings?.map((meaning, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold text-lg">{meaning.partOfSpeech}</h3>
          <ul className="list-disc pl-5">
            {meaning.definitions?.map((def, idx) => (
              <li key={idx} className="mb-2">
                {def.definition}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TermDetailPage;
