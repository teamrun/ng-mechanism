(function(){
    function getNgApp(){
        if(document.documentElement.getAttribute('ng-app') !== null){
            return document.documentElement;
        }
        else{
            return document.querySelector('ng-app')
        }
    }

    function getController(appDOM){
        return appDOM.querySelectorAll('ng-controller');
    }

    function makeController(controllerName){

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

    var controllers = appDOM.querySelector();


})();