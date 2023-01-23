gdjs.WinCode = {};
gdjs.WinCode.GDWinObjects1= [];
gdjs.WinCode.GDWinObjects2= [];
gdjs.WinCode.GDMenuObjects1= [];
gdjs.WinCode.GDMenuObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.WinCode.GDMenuObjects1});
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.WinCode.GDMenuObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDWinObjects1.length = 0;
gdjs.WinCode.GDWinObjects2.length = 0;
gdjs.WinCode.GDMenuObjects1.length = 0;
gdjs.WinCode.GDMenuObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
