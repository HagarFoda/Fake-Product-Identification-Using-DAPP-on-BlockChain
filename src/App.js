import React, { useState } from 'react';
import './App.css';
import AddProducts from './AddProducts';
import VerifyProduct from './VerifyProduct';
import RegisterProduct from './RegisterProduct';
import TransferOwnership from './TransferOwnership';
import CheckAuthenticity from './CheckAuthenticity';

function App() {
  const [activeComponent, setActiveComponent] = useState('addProducts');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addProducts':
        return <AddProducts />;
      case 'verifyProduct':
        return <VerifyProduct />;
      case 'registerProduct':
        return <RegisterProduct />;
      case 'transferOwnership':
        return <TransferOwnership />;
      
        default:
        return <AddProducts />;
    }
  };

  return (
    <div className="App">
      <h1 className="App-title">Fake Product Identification</h1> {/* Title */}
      <nav>
        <button onClick={() => setActiveComponent('addProducts')}>Add Products</button>
        <button onClick={() => setActiveComponent('verifyProduct')}>Verify Product</button>
        <button onClick={() => setActiveComponent('registerProduct')}>Register Product</button>
        <button onClick={() => setActiveComponent('TransferOwnership')}>Transfer Ownership</button>

      </nav>
      {renderComponent()}
    </div>
  );
}

export default App;
