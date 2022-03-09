import './App.css'
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from "./containers/HomeContainer";


function App() {
  return (
    <>
    <div className="App">
      <HeaderContainer/>
    <HomeContainer/>
    </div>
    {/* <AppState>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Routes>
    <Route index exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </AppState> */}
    </>
  );
}

export default App;
