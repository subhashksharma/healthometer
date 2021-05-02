import { reactive, provide, inject } from 'vue';

export class State {
         error = '';
         screenLock = true;
         showSpinner = true;
         email = 'demo@demo.com';
         password = 'demo';
         isLoggedIn = false;
         loginAs = '';
         tasks = [];
         async getTasks() {
           this.screenLock = true;
           this.showSpinner = true;
           try {
             const response = await fetch('/api/health');

             await new Promise((resolve) => setTimeout(resolve, 300));
             if (!response.ok) {
               throw Error(response.statusText);
             }
             const respobject = await response.json();
             this.tasks = respobject;
             this.screenLock = false;
             this.showSpinner = false;

             console.log(respobject);
           } catch (error) {
             this.screenLock = false;
             this.showSpinner = false;
             this.error = error;
           }
         }
       }

export const stateSymbol = Symbol('state');

export const createState = () => {
  return reactive(new State());
};

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(stateSymbol, createState());
