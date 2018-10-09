// export const canUseDOM = !!(
//     typeof window !== "undefined" &&
//     window.document &&
//     window.document.createElement
//   );
  
  export const getConfirmation = (window,message, callback) =>
    callback(window.confirm(message)); // eslint-disable-line no-alert
  

  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */
  export const supportsPopStateOnHashChange = (window) =>
    window.navigator.userAgent.indexOf("Trident") === -1;
  
  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */
  export const supportsGoWithoutReloadUsingHash = (window) =>
    window.navigator.userAgent.indexOf("Firefox") === -1;
  
  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */
  export const isExtraneousPopstateEvent = (window) =>
    event.state === undefined && window.navigator.userAgent.indexOf("CriOS") === -1;