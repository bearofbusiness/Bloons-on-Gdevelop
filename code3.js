gdjs.MenuCode = {};
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDStartGameObjects1= [];
gdjs.MenuCode.GDStartGameObjects2= [];
gdjs.MenuCode.GDStart2Objects1= [];
gdjs.MenuCode.GDStart2Objects2= [];
gdjs.MenuCode.GDmonkeyObjects1= [];
gdjs.MenuCode.GDmonkeyObjects2= [];
gdjs.MenuCode.GDdartObjects1= [];
gdjs.MenuCode.GDdartObjects2= [];
gdjs.MenuCode.GDBloonObjects1= [];
gdjs.MenuCode.GDBloonObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartGameObjects1Objects = Hashtable.newFrom({"StartGame": gdjs.MenuCode.GDStartGameObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart2Objects1Objects = Hashtable.newFrom({"Start2": gdjs.MenuCode.GDStart2Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.MenuCode.GDStartGameObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartGameObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs.MenuCode.GDStart2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStart2Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDStartGameObjects1.length = 0;
gdjs.MenuCode.GDStartGameObjects2.length = 0;
gdjs.MenuCode.GDStart2Objects1.length = 0;
gdjs.MenuCode.GDStart2Objects2.length = 0;
gdjs.MenuCode.GDmonkeyObjects1.length = 0;
gdjs.MenuCode.GDmonkeyObjects2.length = 0;
gdjs.MenuCode.GDdartObjects1.length = 0;
gdjs.MenuCode.GDdartObjects2.length = 0;
gdjs.MenuCode.GDBloonObjects1.length = 0;
gdjs.MenuCode.GDBloonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
