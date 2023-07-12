
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [showModal, setShowModal ] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
        </div>
    </div>
  )
}

export default App
