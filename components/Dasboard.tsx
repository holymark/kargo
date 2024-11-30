"use client"
import React, { useState } from "react";
import jsPDF from "jspdf";

interface Shipment {
  id: string;
  status: string;
  deliveryTime: string;
  from: string;
  to: string;
  shipDate: string;
  service: string;
  specialHandling: string;
}

const mockShipments: Shipment[] = [
  {
    id: "785005280643",
    status: "Delivered",
    deliveryTime: "Tuesday, 10/17/23, 8:56 AM",
    from: "TEMECULA, CA, US",
    to: "WARWICK, RI, US",
    shipDate: "Friday, 10/13/23",
    service: "FedEx 2Day",
    specialHandling: "Deliver Weekday",
  },
  {
    id: "785005280644",
    status: "In Transit",
    deliveryTime: "Expected Thursday, 12/01/23",
    from: "LOS ANGELES, CA, US",
    to: "NEW YORK, NY, US",
    shipDate: "Monday, 11/27/23",
    service: "FedEx Ground",
    specialHandling: "None",
  },
];

const Dashboard: React.FC = () => {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrackShipment = async () => {
    setLoading(true);
    setError("");
    setShipment(null);

    // Simulate a delay to mimic a real-world API call
    setTimeout(() => {
      const foundShipment = mockShipments.find((s) => s.id === trackingId.trim());

      if (foundShipment) {
        setShipment(foundShipment);
        setError("");
      } else {
        setShipment(null);
        setError("Shipment not found. Please verify your tracking ID.");
      }
      setLoading(false);
    }, 1500); // 1.5-second delay
  };

  const handleExportToPDF = () => {
    if (!shipment) return;

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Shipment Details", 20, 20);

    const details = [
      ["Tracking ID", shipment.id],
      ["Delivery Status", shipment.status],
      ["Delivery Time", shipment.deliveryTime],
      ["From", shipment.from],
      ["To", shipment.to],
      ["Ship Date", shipment.shipDate],
      ["Service", shipment.service],
      ["Special Handling", shipment.specialHandling],
    ];

    let y = 30; // Initial Y-axis position
    details.forEach(([key, value]) => {
      doc.setFont("helvetica", "normal");
      doc.text(`${key}:`, 20, y);
      doc.text(value, 70, y);
      y += 10;
    });

    doc.save(`${shipment.id}-shipment-details.pdf`);
  };
  const handleSms = () => { }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Shipment Tracking Dashboard
          </h1>
          <p className="text-gray-600">
            Enter your tracking ID below to check the status of your shipment.
          </p>
        </header>

        {/* Tracking Input Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Track Shipment</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Tracking ID (e.g., 785005280643)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button
              onClick={handleTrackShipment}
              disabled={loading}
              className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
                }`}
            >
              {loading ? "Tracking..." : "Track Shipment"}
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center p-8">
            <svg
              className="animate-spin h-8 w-8 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        )}

        {/* Shipment Details */}
        {shipment && !loading && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Shipment Details</h2>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">Tracking ID</td>
                  <td className="py-2 text-gray-600">{shipment.id}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">Delivery Status</td>
                  <td className="py-2 text-gray-600">{shipment.status}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">Delivery Time</td>
                  <td className="py-2 text-gray-600">{shipment.deliveryTime}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">From</td>
                  <td className="py-2 text-gray-600">{shipment.from}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">To</td>
                  <td className="py-2 text-gray-600">{shipment.to}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">Ship Date</td>
                  <td className="py-2 text-gray-600">{shipment.shipDate}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold text-gray-800">Service</td>
                  <td className="py-2 text-gray-600">{shipment.service}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-gray-800">Special Handling</td>
                  <td className="py-2 text-gray-600">{shipment.specialHandling}</td>
                </tr>
              </tbody>
            </table>

            <div>
              <button
                onClick={handleExportToPDF}
                className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
              >
                Export to PDF
              </button>
              &nbsp;
              &nbsp;
              <button
                onClick={handleSms}
                className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
              >
                Request SMS
              </button>
            </div>
          </div>
        )}

        {/* No Shipment Details */}
        {!shipment && !loading && !error && (
          <div className="bg-gray-100 border border-gray-200 text-gray-500 text-center p-6 rounded-lg mb-8">
            No shipment details to display. Enter a valid tracking ID to view details.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
