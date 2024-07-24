import classNames from 'classnames';
import './Tabs.scss';

interface TabsDesktopProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export const TabsDesktop: React.FC<TabsDesktopProps> = ({
  setActiveTab,
  activeTab,
}) => {
  return (
    <div className="tabs tabs--desktop">
      <div
        className={classNames('tab', {
          'tab--active': activeTab === 'overview',
        })}
        onClick={() => setActiveTab('overview')}
      >
        <div className="tab__number">01</div>
        Overview
      </div>
      <div
        className={classNames('tab', {
          'tab--active': activeTab === 'structure',
        })}
        onClick={() => setActiveTab('structure')}
      >
        <div className="tab__number">02</div>
        Structure
      </div>
      <div
        className={classNames('tab', {
          'tab--active': activeTab === 'surface',
        })}
        onClick={() => setActiveTab('surface')}
      >
        <div className="tab__number">03</div>
        Surface
      </div>
    </div>
  );
};
