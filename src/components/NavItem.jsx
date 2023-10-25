/* eslint-disable react/prop-types */
const NavItem = ({ children }) => {
  return (
    <li className="py-3 md:py-1 cursor-pointer static text-white hover:text-black transition-colors">
      {children}
    </li>
  );
};

export default NavItem;
