import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-20">
      {/* Added pt-24 for padding top to avoid overlapping with header */}
      <h1 className="text-2xl font-bold mb-6">TECH CATEGORIES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <CategoryCard title="ARTIFICIAL INTELLIGENCE" items={10} />
        <CategoryCard title="WEB DEVELOPMENT" items={10} />
        <CategoryCard title="CYBER SECURITY" items={10} />
        <CategoryCard title="BLOCKCHAIN" items={10} />
        <CategoryCard title="DATA ANALYSIS" items={10} />
        <CategoryCard title="UI/UX" items={10} />
      </div>
    </div>
  );
};

export default Home;
