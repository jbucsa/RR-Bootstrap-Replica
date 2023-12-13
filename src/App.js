// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;

import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoresList from './components/StoreListings';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoresList />
    </div>
  );
};

export default App;;