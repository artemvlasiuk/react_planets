import './Tabs.scss';

interface TabsProps {
  setActiveTab: (tab: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ setActiveTab }) => {
  return (
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
  );
};
