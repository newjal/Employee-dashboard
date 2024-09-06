
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Sidebar from './component/Sidebar'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className='bg-black text-white min-h-screen max-w-screen overflow-x-hidden'>
    <div className='relative'>
      <div className='flex gap-[30px]'>
        <Sidebar />
        <div className='flex-grow pr-[30px] z-[200] h-[100vh] my-auto overflow-y-auto'>
        <App/>
        </div>
      </div>
    <div className="absolute bg-gradient-to-b from-[#FB03F5] to-[#AA9CFF] blur-[10rem] h-[400px] -z-12 w-[400px] -top-[30px] left-[20%] rounded-[200px]" />
    <div className="absolute bg-gradient-to-b from-[#FB03F5] to-[#AA9CFF] blur-[10rem] h-[400px] -z-12 w-[400px] -top-[30px] -right-[10%] rounded-[200px]" />
    </div>
  </div>
  </BrowserRouter>
)
