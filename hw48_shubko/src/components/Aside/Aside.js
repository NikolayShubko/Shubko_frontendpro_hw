import "./Aside.css";
function Aside() {
  return (
    <aside>
      <nav className="aside-nav">
        <p className="aside-nav-text">Search by</p>
        <ul className="aside-list">
          <li className="aside-item">
            <a href="/#" className="aside-link">
              Eagles
            </a>
          </li>
          <li className="aside-item">
            <a href="/#" className="aside-link">
              Pandas
            </a>
          </li>
          <li className="aside-item">
            <a href="/#" className="aside-link">
              Foxes
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Aside;
