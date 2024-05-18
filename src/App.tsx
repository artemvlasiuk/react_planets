import { useEffect, useState } from 'react';
import './App.scss';
import { getAllPlanets } from './api/api';
import { Planet } from './types/Planet';
import { loadContent } from './components/helpers';
import { PlanetFacts } from './components/PlanetFacts';
import { Header } from './components/Header';

export const App = () => {
  const [planets, setplanets] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    getAllPlanets().then(planetsFromApi => {
      setplanets(planetsFromApi);
      setSelectedPlanet(planetsFromApi[0]);
    });
  }, []);

  let content, source, image;

  if (selectedPlanet) {
    [content, source, image] = loadContent(activeTab, selectedPlanet);
  } else {
    content = source = image = null;
  }

  return (
    <div className="container">
      <Header planets={planets} setSelectedPlanet={setSelectedPlanet} />

      <section className="planet">
        <div className="tabs">
          <div className="tab" onClick={() => setActiveTab('overview')}>
            <div className="tab__number">01</div>
            Overview
          </div>
          <div className="tab" onClick={() => setActiveTab('structure')}>
            <div className="tab__number">02</div>
            Structure
          </div>
          <div className="tab" onClick={() => setActiveTab('surface')}>
            <div className="tab__number">03</div>
            Surface
          </div>
        </div>

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
            <a href={source || undefined} className="planet__wiki-link">
              Source: <span>Wikipedia</span>
            </a>
          </div>

          <div className="tabs tabs--desktop">
            <div className="tab" onClick={() => setActiveTab('overview')}>
              <div className="tab__number">01</div>
              Overview
            </div>
            <div className="tab" onClick={() => setActiveTab('structure')}>
              <div className="tab__number">02</div>
              Structure
            </div>
            <div className="tab" onClick={() => setActiveTab('surface')}>
              <div className="tab__number">03</div>
              Surface
            </div>
          </div>
        </div>
      </section>

      <PlanetFacts selectedPlanet={selectedPlanet} />
    </div>
  );
};
