import { Planet } from '../types/Planet';
import './Menu.scss';

interface MenuProps {
  planets: Planet[];
  selectPlanetHandler: (planet: Planet) => void;
}

export const Menu: React.FC<MenuProps> = ({ planets, selectPlanetHandler }) => {
  return (
    <div className="menu" id="menu">
      <div className="container">
        <div className="header">
          <a className="header__logo">the planets</a>
          <a href="#" className="menu__close-btn"></a>
        </div>
        <nav className="menu__nav">
          <ul className="menu__nav-list">
            {planets.map(planet => (
              <a
                className="menu__list-item"
                href="#"
                key={planet.name}
                onClick={() => selectPlanetHandler(planet)}
              >
                <div
                  className="menu__list-item-circle"
                  style={{
                    backgroundColor: `var(--${planet.name.toLowerCase()}-color)`,
                  }}
                ></div>
                <div className="menu__list-item-name">{planet.name}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  className="menu__list-item-chevron"
                >
                  <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
                </svg>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
