"use client";

export default function UniversalTabs({
  tabs = [],
  activeTab = 0,
  setActiveTab,
  lang,
  className = "",
}) {
  return (
    <div className={`tabs-wrap ${className}`}>
      {tabs.map((tab, i) => {
        return (
          <button
            key={i}
            className={`tab-button ${
              activeTab === i ? "active" : ""
            }`}
            onClick={() => setActiveTab(i)}
          >
            {tab.name?.[lang] || tab.name?.en}
          </button>
        );
      })}
    </div>
  );
}