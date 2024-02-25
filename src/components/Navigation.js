import { ethers } from 'ethers'
import image from '../assets/logo.png'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600 flex justify-between items-center px-60 py-2 bg-opacity-80 bg-clip-padding blur-backdrop-filter">
      <div className='nav__brand'>
      <img src={image} className="w-[7vh] h-auto mr-[40vh]" alt="Description of the image" />
        {/* <h1 className="text-white font-bold text-xl">Virtual Ticket</h1> */}

        <ul className='flex space-x-4 justify-center items-center' style={{ margin: 'auto' }}>
          <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="/" className="text-white hover:text-gray-400">Booking</a></li>
          <li><a href="/" className="text-white hover:text-gray-400">Upcoming</a></li>
          <li><a href="/" className="text-white hover:text-gray-400">Features</a></li>
          <li><a href="/" className="text-white hover:text-gray-400">Team</a></li>
        </ul>
      </div>

      {account ? (
        <button
          type="button"
          className='text-white bg-blue-900 hover:bg-blue-950 rounded-lg px-4 py-2 focus:outline-none'
        >
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className='text-white bg-blue-900 hover:bg-blue-950 rounded-lg px-4 py-2 focus:outline-none'
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
);


}

export default Navigation;