// src/App.tsx
import React from "react";
import Forma from "./components/Forma";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div>
        <Forma />
      </div>
    </div>
  );
};

export default App;
