import { useRides } from "../hooks";
import RideCard from "../components/RideCard"; // adjust path as needed

const BulkRides = () => {
  const { loading, rides } = useRides();

  if (loading) return <p className="text-center mt-10">Loading rides...</p>;
  if (!rides || rides.length === 0) return <p className="text-center mt-10">No rides available.</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-300">
        Available Rides
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rides.map((ride) => (
          <RideCard key={ride._id} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default BulkRides;
