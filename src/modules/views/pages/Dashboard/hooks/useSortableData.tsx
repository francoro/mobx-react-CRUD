import React from "react";

export const useSortableData = (store: any, config: {key: string, direction: string}):  any => {

    const [sortConfig, setSortConfig] = React.useState(config);
      React.useMemo(() => {
      store.sortUsers(sortConfig)
    }, [store, sortConfig]);
  
    const requestSort = (key: string): any => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig?.key === key &&
        sortConfig?.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { requestSort, sortConfig };
  };