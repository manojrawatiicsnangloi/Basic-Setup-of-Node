import { Route, Routes } from "react-router-dom"
import MyLogin from "./pages/auth/LoginPage/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage/RegisterPage"

function App() {
  
  return (
    <>

    <Routes>
      <Route path="/login" Component={MyLogin}/>
      <Route path="/register" Component={RegisterPage}/>
    </Routes>
      
    </>
  )
}

export default App
