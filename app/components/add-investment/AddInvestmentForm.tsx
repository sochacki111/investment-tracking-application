'use client';

import { useState } from 'react';
import { addInvestmentAction } from '../../actions/addInvestment.action';

export function AddInvestmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    buyPrice: '',
    currentPrice: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addInvestmentAction({
        name: formData.name,
        quantity: Number(formData.quantity),
        buyPrice: Number(formData.buyPrice),
        currentPrice: Number(formData.currentPrice),
      });

      // Reset form
      setFormData({
        name: '',
        quantity: '',
        buyPrice: '',
        currentPrice: ''
      });

    } catch (error) {
      console.error('Error adding investment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Investment Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="buyPrice" className="block text-sm font-medium">
          Buy Price
        </label>
        <input
          type="number"
          id="buyPrice"
          step="0.01"
          value={formData.buyPrice}
          onChange={(e) => setFormData({ ...formData, buyPrice: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="currentPrice" className="block text-sm font-medium">
          Current Price
        </label>
        <input
          type="number"
          id="currentPrice"
          step="0.01"
          value={formData.currentPrice}
          onChange={(e) => setFormData({ ...formData, currentPrice: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Investment
      </button>
    </form>
  );
}
