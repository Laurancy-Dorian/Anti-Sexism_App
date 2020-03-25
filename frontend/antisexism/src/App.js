import React from 'react';
import RemarksList from './components/Remarks/RemarksList'

import RemarkPage from './composers/RemarkPage'

function App() {
  return (
    <div className="App container">
      <RemarksList />
      <hr />
      <RemarkPage idRemark="1" />
    </div>
  );
}

export default App;
