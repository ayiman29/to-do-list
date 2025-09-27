import icon from '../assets/icon.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={icon} alt="icon" className="image" />
      <h1>TO DO LIST</h1>
    </nav>
  )
}
