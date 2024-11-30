"use client"
import React, { useState } from "react";

const WaybillForm: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderAddress: "",
    senderContact: "",
    receiverName: "",
    receiverAddress: "",
    receiverContact: "",
    shipmentType: "Parcel",
    weight: "",
    specialInstructions: "",
    preferredDeliveryDate: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waybill Data Submitted:", formData);
    setSuccessMessage("Waybill booked successfully!");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Book a Waybill</h1>

        {successMessage && (
          <div className="mb-4 p-4 text-green-700 bg-green-100 border border-green-400 rounded">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Sender Information */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Sender Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Sender Name</label>
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Sender Contact</label>
              <input
                type="text"
                name="senderContact"
                value={formData.senderContact}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Sender Address</label>
            <textarea
              name="senderAddress"
              value={formData.senderAddress}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
            />
          </div>

          {/* Receiver Information */}
          <h2 className="text-lg font-semibold mt-8 mb-4 text-gray-700">Receiver Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Receiver Name</label>
              <input
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Receiver Contact</label>
              <input
                type="text"
                name="receiverContact"
                value={formData.receiverContact}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Receiver Address</label>
            <textarea
              name="receiverAddress"
              value={formData.receiverAddress}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
            />
          </div>

          {/* Shipment Details */}
          <h2 className="text-lg font-semibold mt-8 mb-4 text-gray-700">Shipment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-2">Shipment Type</label>
              <select
                name="shipmentType"
                value={formData.shipmentType}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              >
                <option value="Parcel">Parcel</option>
                <option value="Document">Document</option>
                <option value="Large Freight">Large Freight</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Special Instructions</label>
            <textarea
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-2">Preferred Delivery Date</label>
            <input
              type="date"
              name="preferredDeliveryDate"
              value={formData.preferredDeliveryDate}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full p-3 text-white font-semibold bg-primary rounded-lg hover:bg-primary-dark transition"
            >
              Submit Waybill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaybillForm;
