
if (typeof gdjs.evtsExt__waiter__Create !== "undefined") {
  gdjs.evtsExt__waiter__Create.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__waiter__Create = {};
gdjs.evtsExt__waiter__Create.GDObjectObjects1= [];
gdjs.evtsExt__waiter__Create.GDObjectObjects2= [];

gdjs.evtsExt__waiter__Create.conditionTrue_0 = {val:false};
gdjs.evtsExt__waiter__Create.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__waiter__Create.mapOfGDgdjs_46evtsExt_95_95waiter_95_95Create_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__waiter__Create.GDObjectObjects1});
gdjs.evtsExt__waiter__Create.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__waiter__Create.GDObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__waiter__Create.mapOfGDgdjs_46evtsExt_95_95waiter_95_95Create_46GDObjectObjects1Objects, gdjs.evtTools.common.toString((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Parameter")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0), "");
}{for(var i = 0, len = gdjs.evtsExt__waiter__Create.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__waiter__Create.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__waiter__Create.GDObjectObjects1[i].getVariables().get("Health")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HP")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__waiter__Create.func = function(runtimeScene, Object, X, Y, HP, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "HP") return HP;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__waiter__Create.GDObjectObjects1.length = 0;
gdjs.evtsExt__waiter__Create.GDObjectObjects2.length = 0;

gdjs.evtsExt__waiter__Create.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__waiter__Create.registeredGdjsCallbacks = [];