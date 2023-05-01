import "./Menu.css";
function Menu() {
  return (
    <div>
      <nav className="menu-nav">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="/#" className="menu-link">
              Main
            </a>
          </li>
          <li className="menu-item">
            <a href="/#" className="menu-link">
              ABOUT US
            </a>
          </li>
          <li className="menu-item">
            <a href="/#" className="menu-link">
              ANIMALS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Menu;
