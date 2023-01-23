gdjs.LoseCode = {};
gdjs.LoseCode.GDNewTextObjects1= [];
gdjs.LoseCode.GDNewTextObjects2= [];
gdjs.LoseCode.GDmenuObjects1= [];
gdjs.LoseCode.GDmenuObjects2= [];

gdjs.LoseCode.conditionTrue_0 = {val:false};
gdjs.LoseCode.condition0IsTrue_0 = {val:false};
gdjs.LoseCode.condition1IsTrue_0 = {val:false};
gdjs.LoseCode.condition2IsTrue_0 = {val:false};


gdjs.LoseCode.mapOfGDgdjs_46LoseCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.LoseCode.GDmenuObjects1});
gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.LoseCode.GDmenuObjects1);

gdjs.LoseCode.condition0IsTrue_0.val = false;
gdjs.LoseCode.condition1IsTrue_0.val = false;
{
gdjs.LoseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.LoseCode.condition0IsTrue_0.val ) {
{
gdjs.LoseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LoseCode.mapOfGDgdjs_46LoseCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.LoseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDNewTextObjects1.length = 0;
gdjs.LoseCode.GDNewTextObjects2.length = 0;
gdjs.LoseCode.GDmenuObjects1.length = 0;
gdjs.LoseCode.GDmenuObjects2.length = 0;

gdjs.LoseCode.eventsList0(runtimeScene);

return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
