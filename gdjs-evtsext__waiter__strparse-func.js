
if (typeof gdjs.evtsExt__waiter__strParse !== "undefined") {
  gdjs.evtsExt__waiter__strParse.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__waiter__strParse = {};

gdjs.evtsExt__waiter__strParse.conditionTrue_0 = {val:false};
gdjs.evtsExt__waiter__strParse.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__waiter__strParse.userFunc0x8fea80 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var part = JSON.parse(eventsFunctionContext.getArgument("string"))[eventsFunctionContext.getArgument("round")].split(" ")[eventsFunctionContext.getArgument("part")];
console.log(part);
//console.log(eventsFunctionContext.getArgument("string"));
//console.log(eventsFunctionContext);
if(eventsFunctionContext.getArgument("want") == "type"){
    if(part[1] == "w"){
        eventsFunctionContext.returnValue = -1;
    }else if(part[1] == "r"){
        eventsFunctionContext.returnValue = 0;
    }else if(part[1] == "b"){
        eventsFunctionContext.returnValue = 1;
    }else if(part[1] == "g"){
        eventsFunctionContext.returnValue = 2;
    }else if(part[1] == "y"){
        eventsFunctionContext.returnValue = 3;
    }else{
        console.log("error unknown bloon type: " + part[1]);
    }
}else if(eventsFunctionContext.getArgument("want") == "number"){
    console.log( Number(part[0]));
    eventsFunctionContext.returnValue = Number(part[0]);
    return;
}else if(eventsFunctionContext.getArgument("want") == "delay"){
    eventsFunctionContext.returnValue = Number(part[2]);
}else if(eventsFunctionContext.getArgument("want") == "HMPart"){
    //console.log("HMPART: "+JSON.parse(eventsFunctionContext.getArgument("string"))[eventsFunctionContext.getArgument("round")].split(" ").length);
    eventsFunctionContext.returnValue = JSON.parse(eventsFunctionContext.getArgument("string"))[eventsFunctionContext.getArgument("round")].split(" ").length;
}else{
    console.log("error unknown type: " + eventsFunctionContext.getArgument("want"));
    eventsFunctionContext.returnValue = -2;
}
};
gdjs.evtsExt__waiter__strParse.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__waiter__strParse.userFunc0x8fea80(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__waiter__strParse.func = function(runtimeScene, string, want, part, round, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "string") return string;
if (argName === "want") return want;
if (argName === "part") return part;
if (argName === "round") return round;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__waiter__strParse.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__waiter__strParse.registeredGdjsCallbacks = [];