'use client';

import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { getInvestments } from '../data/investments';

type Investment = {
  id: number;
  name: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
};

const columnHelper = createColumnHelper<Investment>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Stock Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('quantity', {
    header: 'Quantity',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('buyPrice', {
    header: 'Buy Price',
    cell: info => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor('currentPrice', {
    header: 'Current Price',
    cell: info => `$${info.getValue().toFixed(2)}`,
  }),
  columnHelper.accessor(row => (row.currentPrice - row.buyPrice) * row.quantity, {
    id: 'gainLoss',
    header: 'Gain/Loss',
    cell: info => `$${info.getValue().toFixed(2)}`,
  }),
];

const InvestmentTracker: React.FC = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getInvestments();
      setInvestments(data);
    }
    fetchData();
  }, []);

  const table = useReactTable({
    data: investments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalInvestment = investments.reduce((sum, investment) => sum + investment.quantity * investment.buyPrice, 0);
  const totalCurrentValue = investments.reduce((sum, investment) => sum + investment.quantity * investment.currentPrice, 0);
  const totalGainLoss = totalCurrentValue - totalInvestment;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Investment Details</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="border border-gray-300 p-2 bg-gray-100">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border border-gray-300 p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Investment Summary</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100">Total Investment</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Total Current Value</th>
              <th className="border border-gray-300 p-2 bg-gray-100">Total Gain/Loss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">${totalInvestment.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">${totalCurrentValue.toFixed(2)}</td>
              <td className="border border-gray-300 p-2">${totalGainLoss.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentTracker;
