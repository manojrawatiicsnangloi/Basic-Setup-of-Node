import { Route, Routes } from "react-router-dom"
import MyLogin from "./pages/auth/LoginPage/LoginPage"

function App() {
  
  return (
    <>

    <Routes>
      <Route path="/login" Component={MyLogin}/>
    </Routes>
      
    </>
  )
}

export default App
