import { useEffect, useState } from 'react';
import './App.scss';
import { getAllPlanets } from './api/api';
import { Planet as PlanetType } from './types/Planet';
import { PlanetFacts } from './components/PlanetFacts';
import { Header } from './components/Header';
import { Planet } from './components/Planet';
import { Menu } from './components/Menu';

export const App = () => {
  const [planets, setplanets] = useState<PlanetType[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const selectPlanetHandler = (planet: PlanetType) => {
    setSelectedPlanet(planet);
    setActiveTab('overview');
  };

  useEffect(() => {
    getAllPlanets().then(planetsFromApi => {
      setplanets(planetsFromApi);
      setSelectedPlanet(planetsFromApi[0]);
    });
  }, []);

  return (
    <div className="container">
      <Header planets={planets} setSelectedPlanet={selectPlanetHandler} />

      <Menu planets={planets} selectPlanetHandler={selectPlanetHandler} />

      <Planet
        selectedPlanet={selectedPlanet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <PlanetFacts selectedPlanet={selectedPlanet} />
    </div>
  );
};
