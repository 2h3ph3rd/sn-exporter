import ComponentManager from 'sn-components-api';

export default class BridgeManager {

  /* Singleton */
  static instance = null;
  static get() {
    if (this.instance == null) { this.instance = new BridgeManager(); }
    return this.instance;
  }

  constructor() {
    this.updateObservers = [];
    this.initiateBridge();
  }

  addUpdateObserver(callback) {
    let observer = {callback: callback};
    this.updateObservers.push(observer);
    return observer;
  }

  notifyObserversOfUpdate() {
    for(var observer of this.updateObservers) {
      observer.callback();
    }
  }

  getNote() {
    return this.note;
  }

  initiateBridge() {
    var permissions = [
      {
        name: "stream-context-item"
        // name: "stream-items"
      }
    ]

    this.componentManager = new ComponentManager(permissions, function(){
      // on ready
    });

    // this.componentManager.streamContextItem((item) => {
    //   this.note = item;
    //   this.notifyObserversOfUpdate();
  	// })

    // this.componentManager.streamItems(["SN|Component", "SN|Theme", "SF|Extension"], (items) => {
    //   this.items = items.filter((item) => {return !item.isMetadataUpdate});
    // });
  }


}
