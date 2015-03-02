(function(){
    // 获取ng-app掌管的dom节点
    function getNgApp(){
        // 如果直接绑在<html>上, 需要专门对这个tag做检测
        if(document.documentElement.getAttribute('ng-app') !== null){
            return document.documentElement;
        }
        else{
            return document.querySelector('ng-app')
        }
    }

    // 在ng-app下查找controller
    function getController(appDOM){
        return appDOM.querySelectorAll('ng-controller');
    }

    // 将controller实现
    function makeController(module, ctrlFunc){

    }


    var Modules = {};
    var app;

    // 顺序流程
    var appDOM = getNgApp();
    var appName = appDOM.getAttribute('ng-app');
    if(appName == ''){
        appName = 'anonymous';
    }
    
    // 这里只实现controller
    app = Modules[appName] = {};

    var controllers = appDOM.querySelector('ng-controller');


})();