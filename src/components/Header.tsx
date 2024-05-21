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
    <>
      <div className="header">
        <a className="header__logo">the planets</a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {planets.map(element => (
              <li
                className="header__nav-item"
                key={element.name}
                onClick={() => setSelectedPlanet(element)}
              >
                {element.name}
              </li>
            ))}
          </ul>
        </nav>
        <a href="#menu" className="header__nav-btn"></a>
      </div>
    </>
  );
};
