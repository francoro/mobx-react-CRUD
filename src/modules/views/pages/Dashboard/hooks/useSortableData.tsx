import React from "react";
import UserStore from "../../../../../store/users/UserStore";
import { ISortConfig } from "../components/types/types";

export const useSortableData = (store: UserStore, config: ISortConfig) => {

    const [sortConfig, setSortConfig] = React.useState(config);
      React.useMemo(() => {
      store.sortUsers(sortConfig)
    }, [store, sortConfig]);
  
    const requestSort = (key: string) => {
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