import { useEffect, useState } from 'react';
import './App.scss';
import { getAllPlanets } from './api/api';
import { Planet as PlanetType } from './types/Planet';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Planet } from './components/Planet';
import { PlanetFacts } from './components/PlanetFacts';
import {
  loadSelectedPlanetFromLocalStorage,
  saveSelectedPlanetToLocalStorage,
} from './components/helpers';

export const App = () => {
  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetType | null>(
    loadSelectedPlanetFromLocalStorage(),
  );
  const [activeTab, setActiveTab] = useState('overview');

  const selectPlanetHandler = (planet: PlanetType) => {
    setSelectedPlanet(planet);
    setActiveTab('overview');
    saveSelectedPlanetToLocalStorage(planet);
  };

  useEffect(() => {
    getAllPlanets().then(planetsFromApi => {
      setPlanets(planetsFromApi);
      if (!selectedPlanet) {
        setSelectedPlanet(planetsFromApi[0]);
      }
    });
  }, [selectedPlanet]);

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
