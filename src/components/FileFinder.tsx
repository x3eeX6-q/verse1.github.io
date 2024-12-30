import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface FileFinderProps {
  onClose: () => void;
}

export function FileFinder({ onClose }: FileFinderProps) {
  const [code, setCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;

    setIsSearching(true);
    // Here you would implement the actual file finding logic
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated search
    setIsSearching(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Find File</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Transfer Code
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter the file code"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!code || isSearching}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isSearching ? 'Searching...' : 'Find File'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}