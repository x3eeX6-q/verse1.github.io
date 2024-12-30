import React, { useState } from 'react';
import { FileUp, Search } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { FileFinder } from './components/FileFinder';

function App() {
  const [showUpload, setShowUpload] = useState(false);
  const [showFinder, setShowFinder] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          File Transfer
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={() => setShowUpload(true)}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileUp className="w-6 h-6" />
            <span>Upload File</span>
          </button>

          <button
            onClick={() => setShowFinder(true)}
            className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Search className="w-6 h-6" />
            <span>Find File</span>
          </button>
        </div>

        {showUpload && <FileUpload onClose={() => setShowUpload(false)} />}
        {showFinder && <FileFinder onClose={() => setShowFinder(false)} />}
      </div>
    </div>
  );
}

export default App;