const isActiveTab = (currentTab, activeTab) =>
  currentTab === activeTab ? "border-t dark:border-neutral-400" : "";

const Tab = ({ activeTab, setActiveTab }) => (
  <div className="flex items-center justify-center text-center gap-5 border-t mb-4 dark:border-neutral-800">
    <button
      onClick={() => setActiveTab("photos")}
      className={`uppercase tracking-tight font-semibold text-sm border-black pt-3 px-3 ${isActiveTab(
        "photos",
        activeTab
      )}`}
    >
      Photos
    </button>
    <button
      onClick={() => setActiveTab("videos")}
      className={`uppercase tracking-tight font-semibold text-sm pt-3 px-3 border-black ${isActiveTab(
        "videos",
        activeTab
      )}`}
    >
      Videos
    </button>
  </div>
);

export default Tab;
