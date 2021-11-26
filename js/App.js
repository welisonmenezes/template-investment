function LoaderScripts(src, cb, ordered){
    var tmp;
    var ref = document.getElementsByTagName( "script" )[ 0 ];
    var script = document.createElement( "script" );

    if (typeof(cb) === 'boolean') {
        tmp = ordered;
        ordered = cb;
        cb = tmp;
    }

    script.src = src;
    script.async = !ordered;
    ref.parentNode.insertBefore( script, ref );

    if (cb && typeof(cb) === "function") {
        script.onload = cb;
    }
    return script;
}


// utilities
LoaderScripts("js/FakeData.js", true);
LoaderScripts("js/Utils.js", true);

//vendors
LoaderScripts("vendors/apexcharts.min.js", true);
LoaderScripts("vendors/OverlayScrollbars/OverlayScrollbars.min.js", true);

// layout
LoaderScripts("js/layout/MainHeader.js", true);
LoaderScripts("js/layout/MainLayout.js", true);
LoaderScripts("js/layout/MainMenu.js", true);

// components
LoaderScripts("js/components/Charts.js", true);
LoaderScripts("js/components/Collapse.js", true);
LoaderScripts("js/components/CollapseChart.js", true);
LoaderScripts("js/components/OverlayScrollbars.js", true);
LoaderScripts("js/components/SideContent.js", function() {
    
    // from js/components/Charts.js
    InitDefaultChart(document.querySelector('.chart-demo-1'), demoData);
    InitDefaultChart(document.querySelector('.chart-demo-2'), demoData, null, true);
    InitSmallChart(document.querySelector('.chart-demo-3'), demoMicroData);
    InitMicroChart(document.querySelector('.chart-demo-4'), demoMicroData, null, true);
    InitSmallChart(document.querySelector('.chart-demo-quotation'), demoMicroData);
    InitMicroChart(document.querySelector('.chart-table-demo-1'), demoMicroData);
    InitMicroChart(document.querySelector('.chart-table-demo-2'), demoMicroData, null, true);
    InitMicroChart(document.querySelector('.chart-table-demo-3'), demoMicroData);
    InitMicroChart(document.querySelector('.chart-table-demo-4'), demoMicroData, null, true);
    InitMicroChart(document.querySelector('.chart-table-demo-5'), demoMicroData);
    InitMicroChart(document.querySelector('.chart-table-demo-6'), demoMicroData, null, true);
    InitMicroChart(document.querySelector('.chart-table-demo-7'), demoMicroData);

    // from js/components/OverslayScrollbars.js
    InitOverlayScrollbars(document.querySelector('.overlay-scrollbars-table-demo'));
    InitOverlayScrollbars(document.querySelector('.overlay-scrollbars-demo'));

    // from js/layot/MainLayout.js
    AddScrollListernerToMainLayout();

    // from js/components/SideContent.js
    AddScrollListernerToSideContent();

    // from js/layout/MainHeader.js
    SetDarkOrLightModeOnLoad();
}, true);
