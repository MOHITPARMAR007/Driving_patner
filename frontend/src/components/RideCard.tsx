import React from "react";

interface RideProps {
  ride: {
    vehicleName: string;
    username: string;
    travelFrom: string;
    travelTo: string;
    travelDate: string;
    availableSeats: number;
    contactNumber: string;
    males: number;
    females: number;
  };
}

const RideCard: React.FC<RideProps> = ({ ride }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 max-w-md w-full mx-auto my-6 transition-transform hover:scale-105">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://img.icons8.com/ios-filled/100/car--v1.png"
          alt="Vehicle"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {ride.vehicleName}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            by {ride.username}
          </p>
        </div>
      </div>

      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        <p className="flex items-center justify-between">
          <span>Route:</span>
          <span className="font-medium">
            {ride.travelFrom} → {ride.travelTo}
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span>Date:</span>
          <span>{ride.travelDate}</span>
        </p>
        <p className="flex items-center justify-between">
          <span>Seats Available:</span>
          <span className="text-green-600 dark:text-green-400 font-semibold">
            {ride.availableSeats}
          </span>
        </p>
        <p className="flex items-center justify-between">
          <span>Contact:</span>
          <span>{ride.contactNumber}</span>
        </p>
        <p className="flex items-center justify-between">
          <span>Males:</span>
          <span>{ride.males}</span>
        </p>
        <p className="flex items-center justify-between">
          <span>Females:</span>
          <span>{ride.females}</span>
        </p>
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Join Ride
      </button>
    </div>
  );
};

export default RideCard;
