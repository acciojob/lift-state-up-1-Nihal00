
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [showModal, setShowModal ] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          <div className="child">
            <h2>Child Component</h2>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {showModal ? <>
              <h3>Modal Content</h3>
              <p>This is the modal content.</p>
            </>: ""}
          </div>
        </div>
    </div>
  )
}

export default App
