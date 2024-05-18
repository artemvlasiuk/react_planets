import { Planet } from '../types/Planet';
import './PlanetFacts.scss';

interface PlanetFactsProps {
  selectedPlanet: Planet | null;
}

export const PlanetFacts: React.FC<PlanetFactsProps> = ({ selectedPlanet }) => {
  return (
    <section className="planet__facts">
      <div className="planet__fact">
        <div className="planet__fact-name">Rotation time</div>
        <div className="planet__fact-value">{selectedPlanet?.rotation}</div>
      </div>
      <div className="planet__fact">
        <div className="planet__fact-name">Revolution time</div>
        <div className="planet__fact-value">{selectedPlanet?.revolution}</div>
      </div>
      <div className="planet__fact">
        <div className="planet__fact-name">Radius</div>
        <div className="planet__fact-value">{selectedPlanet?.radius}</div>
      </div>
      <div className="planet__fact">
        <div className="planet__fact-name">Averege temp.</div>
        <div className="planet__fact-value">{selectedPlanet?.temperature}</div>
      </div>
    </section>
  );
};
