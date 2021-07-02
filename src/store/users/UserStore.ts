import { users as userData } from '../../modules/constants';
import {
    action,
    computed,
    makeObservable,
    observable,
    autorun,
    runInAction,
    toJS
  } from "mobx";
  
  class UserStore {
    users: any = [];
  
    constructor() {
      makeObservable(this, {
        users: observable,
        deleteUser: action,
        editUser: action,
        totalUsers: computed,
        setUsers: action,
        sortUsers: action
      });
      autorun(this.logStoreDetails);
      runInAction(this.prefetchData);
    }
  
    get totalUsers() {
      return this.users.length;
    }

    sortUsers(sortConfig: any) {
    this.users = this.users.slice().sort((a: any, b: any) => {
         
        if (a[sortConfig?.key] < b[sortConfig?.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig?.key] > b[sortConfig?.key]) {
          return sortConfig.direction === 'descending' ? -1 : 1;
        }
        return 0;
      });

      return toJS(this.users)
    }

    setUsers(users: any) {
      this.users = users
    }
  
  
    editUser(userId: any, userUpdated: any) {
      const userIndexAtId = this.users.findIndex((user: any) => user.id === userId);
      if (userIndexAtId > -1 && userUpdated) {
        this.users[userIndexAtId] = userUpdated;
        return this.users[userIndexAtId];
      }
    }
  
    deleteUser(userId: any) {
      const userIndexAtId = this.users.findIndex((user: any) => user.id === userId);
      if (userIndexAtId > -1) {
        this.users.splice(userIndexAtId, 1);
      }
    }
  
    get storeDetails() {
      return `We have ${this.totalUsers} users!!`;
    }
  
    logStoreDetails = () => {
      console.log(this.storeDetails);
    };

    prefetchData = () => {
      
       this.users = userData
     
    };
  }
  
  export default UserStore;
  