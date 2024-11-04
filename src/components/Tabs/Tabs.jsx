import React, { useState } from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const onTabSelected = id => {
    setActiveTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === activeTabId).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn({ 'is-active': activeTabId === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === activeTabId).content}
        </div>
      </div>
    </div>
  );
};
