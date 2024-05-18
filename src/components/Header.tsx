import { Planet } from '../types/Planet';
import './Header.scss';

interface HeaderProps {
  planets: Planet[];
  setSelectedPlanet: (planet: Planet) => void;
}

export const Header: React.FC<HeaderProps> = ({
  planets,
  setSelectedPlanet,
}) => {
  return (
    <div className="header">
      <a className="header__logo">the planets</a>
      <nav className="header__menu">
        <ul className="header__menu-list">
          {planets.map(element => (
            <li
              className="header__menu-item"
              key={element.name}
              onClick={() => setSelectedPlanet(element)}
            >
              {element.name}
            </li>
          ))}
        </ul>
      </nav>
      <a href="" className="header__menu-btn"></a>
    </div>
  );
};
