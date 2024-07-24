import './Planet.scss';
import { Planet as PlanetType } from '../../types/Planet';
import { Tabs } from '../Tabs/Tabs';
import { TabsDesktop } from '../Tabs/TabsDesktop';
import { loadContent } from '../helpers';

interface PlanetProps {
  selectedPlanet: PlanetType | null;
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export const Planet: React.FC<PlanetProps> = ({
  selectedPlanet,
  setActiveTab,
  activeTab,
}) => {
  let content, source, image;

  if (selectedPlanet) {
    [content, source, image] = loadContent(activeTab, selectedPlanet);
  } else {
    content = source = image = null;
  }

  return (
    <section className="planet">
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

      <div className="planet__image">
        <img
          src={image || undefined}
          className={`planet__image--${selectedPlanet?.name.toLowerCase()}`}
          alt="Planet image"
        />
        {activeTab === 'surface' && (
          <img
            src={selectedPlanet?.images.geology}
            className="planet__image--surface"
            alt="Surface Image"
          />
        )}
      </div>

      <div className="planet__desktop">
        <div className="planet__content">
          <div className="planet__name">{selectedPlanet?.name}</div>
          <p className="planet__summary">{content}</p>
          <a
            href={source || undefined}
            className="planet__wiki-link"
            target="_blank"
            rel="noreferrer"
          >
            Source: <span>Wikipedia</span>
            <div className="planet__wiki-icon"></div>
          </a>
        </div>

        <TabsDesktop setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
    </section>
  );
};
