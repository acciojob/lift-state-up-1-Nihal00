
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [showModal, setShowModal ] = useState(false);

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent"> 
          Parent Component
          <div>Child Component</div>
          <button onClick={() => setShowModal(true)}>Show Modal</button>
          {showModal ? <div>
            Modal Content
            <p>This is modal content</p>
          </div> : ""}
        </div>

    </div>
  )
}

export default App
