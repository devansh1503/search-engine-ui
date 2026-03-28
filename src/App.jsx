import { BrowserRouter, Route, Routes } from "react-router"
import { SearchProvider } from "./context/SearchContext"
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"

function App() {

  return (
    <BrowserRouter>
      <SearchProvider>
          <div className="App">
            <Routes>
              <Route path='' element={<Home/>}></Route>
              <Route path='results' element={<SearchResults/>}></Route>
            </Routes>
          </div>
      </SearchProvider>
    </BrowserRouter>
  )
}

export default App
