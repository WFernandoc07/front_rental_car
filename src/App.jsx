import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateUser from './components/usersC/CreateUser'
import ListUser from './components/usersC/ListUsers'
import { UpdateUser } from './components/usersC/UpdateUser'
import SearchUser from './components/usersC/SearchUser'
import Login from './components/Auth/Login'
import ListCar from './components/Cars/ListCar'
import RegisterCar from './components/Cars/RegisterCar'
import RegisterRent from './components/Rentas/RegisterRent'
import Menu from './components/basic/Menu'
import { AuthProvider } from './components/provider/userProviderLogin'
import SearchCar from './components/Cars/SearchCar'
import { ListRent } from './components/Rentas/ListRent'
import SearchRent from './components/Rentas/SearchRents'
import { ResetPassword } from './components/Auth/ResetPassword'
function App() {


  return (
    <AuthProvider >
      <div className='row w-100 h-100'>
        <div className="col col-2 p-0">
          <Menu />
        </div>
        <div className='col col-10 p-0'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/resetpassword' element={<ResetPassword />} />
            <Route path='/users/list-user' element={<ListUser />} />
            <Route path='/users/update-user' element={<UpdateUser />} />
            <Route path='/users/create-user' element={<CreateUser />} />
            <Route path='/users/search-user/:id' element={<SearchUser />} />
            <Route path='/vehicles/list-vehicle' element={<ListCar />} />
            <Route path='/vehicles/register-vehicle' element={<RegisterCar />} />
            <Route path='/vehicles/search-vehicle' element={<SearchCar />} />
            <Route path='/rents/register-rent' element={<RegisterRent />} />
            <Route path='/rents/list-rents' element={<ListRent />} />
            <Route path='/rents/search-rent' element={<SearchRent />} />
            <Route path='*' element={<p>No Fund</p>} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
