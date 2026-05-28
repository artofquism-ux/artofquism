"use client";

export default function UniversalTabs({
  tabs = [],
  activeTab = 0,
  setActiveTab,
}) {

  return (

    <div className="tabs-wrap">

      {tabs.map((tab, i) => {

        return (
          <button
            key={i}
            className={`tab-button ${
              activeTab === i ? "active" : ""
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab.name}
          </button>
        );

      })}

    </div>

  );
}