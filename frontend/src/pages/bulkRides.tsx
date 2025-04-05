import { useRides } from "../hooks";

const BulkRides = () => {
  const { loading, rides } = useRides();

  if (loading) {
    return <p>Loading rides...</p>;
  }

  if (!rides || rides.length === 0) {
    return <p>No rides available.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Available Rides</h2>
      <ul className="space-y-2">
        {rides.map((ride) => (
          <li
            key={ride._id}
            className="border p-3 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <p>
              <strong>{ride.vehicleName}</strong> —{" "}
              {ride.travelFrom} to {ride.travelTo}
            </p>
            <p>
              <span className="text-sm text-gray-500">
                Seats: {ride.availableSeats} | Date:{" "}
                {new Date(ride.travelDate).toLocaleDateString()}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulkRides;
