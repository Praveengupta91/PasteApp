import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'
const router = createBrowserRouter(
  [
    {path:"/",
      element:
      <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Home/>
      </div>

    },

    
    {path:"/pastes",
      element:
      <div className="w-full h-full flex flex-col">
         <Navbar/>
         <Pastes/>
      </div>

    },
    
    {path:"/pastes/:id",
      element:
      <div className="w-full h-full flex flex-col">
         <Navbar/>
        <ViewPaste/>
      </div>

    },
  ]
)
  
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <RouterProvider router={router}/>
   
   </div>
  )
}

export default App
