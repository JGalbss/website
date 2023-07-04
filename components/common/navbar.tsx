/* Component */
const Navbar = () => {
  return (
    <nav className="flex w-full bg-gray-11 p-2">
      <ul className="flex space-x-4 text-gray-1">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
