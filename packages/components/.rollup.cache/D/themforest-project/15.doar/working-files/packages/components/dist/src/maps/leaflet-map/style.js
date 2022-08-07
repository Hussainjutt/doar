import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { layout } from "@doar/shared/styled";
export var StyledMap = styled(function (_a) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return (_jsx("div", __assign({}, props)));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n\n    /* required styles */\n\n    .leaflet-pane,\n    .leaflet-tile,\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow,\n    .leaflet-tile-container,\n    .leaflet-pane > svg,\n    .leaflet-pane > canvas,\n    .leaflet-zoom-box,\n    .leaflet-image-layer,\n    .leaflet-layer {\n        position: absolute;\n        left: 0;\n        top: 0;\n    }\n    .leaflet-container {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n    }\n    .leaflet-tile,\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n        -webkit-user-drag: none;\n    }\n    /* Prevents IE11 from highlighting tiles in blue */\n    .leaflet-tile::selection {\n        background: transparent;\n    }\n    /* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n    .leaflet-safari .leaflet-tile {\n        image-rendering: -webkit-optimize-contrast;\n    }\n    /* hack that prevents hw layers \"stretching\" when loading new tiles */\n    .leaflet-safari .leaflet-tile-container {\n        width: 1600px;\n        height: 1600px;\n        -webkit-transform-origin: 0 0;\n    }\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow {\n        display: block;\n    }\n    /* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n    /* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n    .leaflet-container .leaflet-overlay-pane svg,\n    .leaflet-container .leaflet-marker-pane img,\n    .leaflet-container .leaflet-shadow-pane img,\n    .leaflet-container .leaflet-tile-pane img,\n    .leaflet-container img.leaflet-image-layer,\n    .leaflet-container .leaflet-tile {\n        max-width: none !important;\n        max-height: none !important;\n    }\n\n    .leaflet-container.leaflet-touch-zoom {\n        -ms-touch-action: pan-x pan-y;\n        touch-action: pan-x pan-y;\n    }\n    .leaflet-container.leaflet-touch-drag {\n        -ms-touch-action: pinch-zoom;\n        /* Fallback for FF which doesn't support pinch-zoom */\n        touch-action: none;\n        touch-action: pinch-zoom;\n    }\n    .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n        -ms-touch-action: none;\n        touch-action: none;\n    }\n    .leaflet-container {\n        -webkit-tap-highlight-color: transparent;\n    }\n    .leaflet-container a {\n        -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n    }\n    .leaflet-tile {\n        filter: inherit;\n        visibility: hidden;\n    }\n    .leaflet-tile-loaded {\n        visibility: inherit;\n    }\n    .leaflet-zoom-box {\n        width: 0;\n        height: 0;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        z-index: 800;\n    }\n    /* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n    .leaflet-overlay-pane svg {\n        -moz-user-select: none;\n    }\n\n    .leaflet-pane {\n        z-index: 400;\n    }\n\n    .leaflet-tile-pane {\n        z-index: 200;\n    }\n    .leaflet-overlay-pane {\n        z-index: 400;\n    }\n    .leaflet-shadow-pane {\n        z-index: 500;\n    }\n    .leaflet-marker-pane {\n        z-index: 600;\n    }\n    .leaflet-tooltip-pane {\n        z-index: 650;\n    }\n    .leaflet-popup-pane {\n        z-index: 700;\n    }\n\n    .leaflet-map-pane canvas {\n        z-index: 100;\n    }\n    .leaflet-map-pane svg {\n        z-index: 200;\n    }\n\n    .leaflet-vml-shape {\n        width: 1px;\n        height: 1px;\n    }\n    .lvml {\n        behavior: url(#default#VML);\n        display: inline-block;\n        position: absolute;\n    }\n\n    /* control positioning */\n\n    .leaflet-control {\n        position: relative;\n        z-index: 800;\n        pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n        pointer-events: auto;\n    }\n    .leaflet-top,\n    .leaflet-bottom {\n        position: absolute;\n        z-index: 1000;\n        pointer-events: none;\n    }\n    .leaflet-top {\n        top: 0;\n    }\n    .leaflet-right {\n        right: 0;\n    }\n    .leaflet-bottom {\n        bottom: 0;\n    }\n    .leaflet-left {\n        left: 0;\n    }\n    .leaflet-control {\n        float: left;\n        clear: both;\n    }\n    .leaflet-right .leaflet-control {\n        float: right;\n    }\n    .leaflet-top .leaflet-control {\n        margin-top: 10px;\n    }\n    .leaflet-bottom .leaflet-control {\n        margin-bottom: 10px;\n    }\n    .leaflet-left .leaflet-control {\n        margin-left: 10px;\n    }\n    .leaflet-right .leaflet-control {\n        margin-right: 10px;\n    }\n\n    /* zoom and fade animations */\n\n    .leaflet-fade-anim .leaflet-tile {\n        will-change: opacity;\n    }\n    .leaflet-fade-anim .leaflet-popup {\n        opacity: 0;\n        -webkit-transition: opacity 0.2s linear;\n        -moz-transition: opacity 0.2s linear;\n        transition: opacity 0.2s linear;\n    }\n    .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n        opacity: 1;\n    }\n    .leaflet-zoom-animated {\n        -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        transform-origin: 0 0;\n    }\n    .leaflet-zoom-anim .leaflet-zoom-animated {\n        will-change: transform;\n    }\n    .leaflet-zoom-anim .leaflet-zoom-animated {\n        -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n        -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n        transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n    }\n    .leaflet-zoom-anim .leaflet-tile,\n    .leaflet-pan-anim .leaflet-tile {\n        -webkit-transition: none;\n        -moz-transition: none;\n        transition: none;\n    }\n\n    .leaflet-zoom-anim .leaflet-zoom-hide {\n        visibility: hidden;\n    }\n\n    /* cursors */\n\n    .leaflet-interactive {\n        cursor: pointer;\n    }\n    .leaflet-grab {\n        cursor: -webkit-grab;\n        cursor: -moz-grab;\n        cursor: grab;\n    }\n    .leaflet-crosshair,\n    .leaflet-crosshair .leaflet-interactive {\n        cursor: crosshair;\n    }\n    .leaflet-popup-pane,\n    .leaflet-control {\n        cursor: auto;\n    }\n    .leaflet-dragging .leaflet-grab,\n    .leaflet-dragging .leaflet-grab .leaflet-interactive,\n    .leaflet-dragging .leaflet-marker-draggable {\n        cursor: move;\n        cursor: -webkit-grabbing;\n        cursor: -moz-grabbing;\n        cursor: grabbing;\n    }\n\n    /* marker & overlays interactivity */\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow,\n    .leaflet-image-layer,\n    .leaflet-pane > svg path,\n    .leaflet-tile-container {\n        pointer-events: none;\n    }\n\n    .leaflet-marker-icon.leaflet-interactive,\n    .leaflet-image-layer.leaflet-interactive,\n    .leaflet-pane > svg path.leaflet-interactive,\n    svg.leaflet-image-layer.leaflet-interactive path {\n        pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n        pointer-events: auto;\n    }\n\n    /* visual tweaks */\n\n    .leaflet-container {\n        background: #ddd;\n        outline: 0;\n    }\n    .leaflet-container a {\n        color: #0078a8;\n    }\n    .leaflet-container a.leaflet-active {\n        outline: 2px solid orange;\n    }\n    .leaflet-zoom-box {\n        border: 2px dotted #38f;\n        background: rgba(255, 255, 255, 0.5);\n    }\n\n    /* general typography */\n    .leaflet-container {\n        font: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n    }\n\n    /* general toolbar styles */\n\n    .leaflet-bar {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n        border-radius: 4px;\n    }\n    .leaflet-bar a,\n    .leaflet-bar a:hover {\n        background-color: #fff;\n        border-bottom: 1px solid #ccc;\n        width: 26px;\n        height: 26px;\n        line-height: 26px;\n        display: block;\n        text-align: center;\n        text-decoration: none;\n        color: black;\n    }\n    .leaflet-bar a,\n    .leaflet-control-layers-toggle {\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        display: block;\n    }\n    .leaflet-bar a:hover {\n        background-color: #f4f4f4;\n    }\n    .leaflet-bar a:first-child {\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n    }\n    .leaflet-bar a:last-child {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n        border-bottom: none;\n    }\n    .leaflet-bar a.leaflet-disabled {\n        cursor: default;\n        background-color: #f4f4f4;\n        color: #bbb;\n    }\n\n    .leaflet-touch .leaflet-bar a {\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n    }\n    .leaflet-touch .leaflet-bar a:first-child {\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n    }\n    .leaflet-touch .leaflet-bar a:last-child {\n        border-bottom-left-radius: 2px;\n        border-bottom-right-radius: 2px;\n    }\n\n    /* zoom control */\n\n    .leaflet-control-zoom-in,\n    .leaflet-control-zoom-out {\n        font: bold 18px \"Lucida Console\", Monaco, monospace;\n        text-indent: 1px;\n    }\n\n    .leaflet-touch .leaflet-control-zoom-in,\n    .leaflet-touch .leaflet-control-zoom-out {\n        font-size: 22px;\n    }\n\n    /* layers control */\n\n    .leaflet-control-layers {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n        background: #fff;\n        border-radius: 5px;\n    }\n    .leaflet-control-layers-toggle {\n        background-image: url(images/layers.png);\n        width: 36px;\n        height: 36px;\n    }\n    .leaflet-retina .leaflet-control-layers-toggle {\n        background-image: url(images/layers-2x.png);\n        background-size: 26px 26px;\n    }\n    .leaflet-touch .leaflet-control-layers-toggle {\n        width: 44px;\n        height: 44px;\n    }\n    .leaflet-control-layers .leaflet-control-layers-list,\n    .leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n        display: none;\n    }\n    .leaflet-control-layers-expanded .leaflet-control-layers-list {\n        display: block;\n        position: relative;\n    }\n    .leaflet-control-layers-expanded {\n        padding: 6px 10px 6px 6px;\n        color: #333;\n        background: #fff;\n    }\n    .leaflet-control-layers-scrollbar {\n        overflow-y: scroll;\n        overflow-x: hidden;\n        padding-right: 5px;\n    }\n    .leaflet-control-layers-selector {\n        margin-top: 2px;\n        position: relative;\n        top: 1px;\n    }\n    .leaflet-control-layers label {\n        display: block;\n    }\n    .leaflet-control-layers-separator {\n        height: 0;\n        border-top: 1px solid #ddd;\n        margin: 5px -10px 5px -6px;\n    }\n\n    /* Default icon URLs */\n    .leaflet-default-icon-path {\n        background-image: url(images/marker-icon.png);\n    }\n\n    /* attribution and scale controls */\n\n    .leaflet-container .leaflet-control-attribution {\n        background: #fff;\n        background: rgba(255, 255, 255, 0.7);\n        margin: 0;\n    }\n    .leaflet-control-attribution,\n    .leaflet-control-scale-line {\n        padding: 0 5px;\n        color: #333;\n    }\n    .leaflet-control-attribution a {\n        text-decoration: none;\n    }\n    .leaflet-control-attribution a:hover {\n        text-decoration: underline;\n    }\n    .leaflet-container .leaflet-control-attribution,\n    .leaflet-container .leaflet-control-scale {\n        font-size: 11px;\n    }\n    .leaflet-left .leaflet-control-scale {\n        margin-left: 5px;\n    }\n    .leaflet-bottom .leaflet-control-scale {\n        margin-bottom: 5px;\n    }\n    .leaflet-control-scale-line {\n        border: 2px solid #777;\n        border-top: none;\n        line-height: 1.1;\n        padding: 2px 5px 1px;\n        font-size: 11px;\n        white-space: nowrap;\n        overflow: hidden;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n\n        background: #fff;\n        background: rgba(255, 255, 255, 0.5);\n    }\n    .leaflet-control-scale-line:not(:first-child) {\n        border-top: 2px solid #777;\n        border-bottom: none;\n        margin-top: -2px;\n    }\n    .leaflet-control-scale-line:not(:first-child):not(:last-child) {\n        border-bottom: 2px solid #777;\n    }\n\n    .leaflet-touch .leaflet-control-attribution,\n    .leaflet-touch .leaflet-control-layers,\n    .leaflet-touch .leaflet-bar {\n        box-shadow: none;\n    }\n    .leaflet-touch .leaflet-control-layers,\n    .leaflet-touch .leaflet-bar {\n        border: 2px solid rgba(0, 0, 0, 0.2);\n        background-clip: padding-box;\n    }\n\n    /* popup */\n\n    .leaflet-popup {\n        position: absolute;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .leaflet-popup-content-wrapper {\n        padding: 1px;\n        text-align: left;\n        border-radius: 12px;\n    }\n    .leaflet-popup-content {\n        margin: 13px 19px;\n        line-height: 1.4;\n    }\n    .leaflet-popup-content p {\n        margin: 18px 0;\n    }\n    .leaflet-popup-tip-container {\n        width: 40px;\n        height: 20px;\n        position: absolute;\n        left: 50%;\n        margin-left: -20px;\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .leaflet-popup-tip {\n        width: 17px;\n        height: 17px;\n        padding: 1px;\n\n        margin: -10px auto 0;\n\n        -webkit-transform: rotate(45deg);\n        -moz-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n    .leaflet-popup-content-wrapper,\n    .leaflet-popup-tip {\n        background: white;\n        color: #333;\n        box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);\n    }\n    .leaflet-container a.leaflet-popup-close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 4px 4px 0 0;\n        border: none;\n        text-align: center;\n        width: 18px;\n        height: 14px;\n        font: 16px/14px Tahoma, Verdana, sans-serif;\n        color: #c3c3c3;\n        text-decoration: none;\n        font-weight: bold;\n        background: transparent;\n    }\n    .leaflet-container a.leaflet-popup-close-button:hover {\n        color: #999;\n    }\n    .leaflet-popup-scrolled {\n        overflow: auto;\n        border-bottom: 1px solid #ddd;\n        border-top: 1px solid #ddd;\n    }\n\n    .leaflet-oldie .leaflet-popup-content-wrapper {\n        -ms-zoom: 1;\n    }\n    .leaflet-oldie .leaflet-popup-tip {\n        width: 24px;\n        margin: 0 auto;\n\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n        filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n    }\n    .leaflet-oldie .leaflet-popup-tip-container {\n        margin-top: -1px;\n    }\n\n    .leaflet-oldie .leaflet-control-zoom,\n    .leaflet-oldie .leaflet-control-layers,\n    .leaflet-oldie .leaflet-popup-content-wrapper,\n    .leaflet-oldie .leaflet-popup-tip {\n        border: 1px solid #999;\n    }\n\n    /* div icon */\n\n    .leaflet-div-icon {\n        background: #fff;\n        border: 1px solid #666;\n    }\n\n    /* Tooltip */\n    /* Base styles for the element that has a tooltip */\n    .leaflet-tooltip {\n        position: absolute;\n        padding: 6px;\n        background-color: #fff;\n        border: 1px solid #fff;\n        border-radius: 3px;\n        color: #222;\n        white-space: nowrap;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        pointer-events: none;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    .leaflet-tooltip.leaflet-clickable {\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    .leaflet-tooltip-top:before,\n    .leaflet-tooltip-bottom:before,\n    .leaflet-tooltip-left:before,\n    .leaflet-tooltip-right:before {\n        position: absolute;\n        pointer-events: none;\n        border: 6px solid transparent;\n        background: transparent;\n        content: \"\";\n    }\n\n    /* Directions */\n\n    .leaflet-tooltip-bottom {\n        margin-top: 6px;\n    }\n    .leaflet-tooltip-top {\n        margin-top: -6px;\n    }\n    .leaflet-tooltip-bottom:before,\n    .leaflet-tooltip-top:before {\n        left: 50%;\n        margin-left: -6px;\n    }\n    .leaflet-tooltip-top:before {\n        bottom: 0;\n        margin-bottom: -12px;\n        border-top-color: #fff;\n    }\n    .leaflet-tooltip-bottom:before {\n        top: 0;\n        margin-top: -12px;\n        margin-left: -6px;\n        border-bottom-color: #fff;\n    }\n    .leaflet-tooltip-left {\n        margin-left: -6px;\n    }\n    .leaflet-tooltip-right {\n        margin-left: 6px;\n    }\n    .leaflet-tooltip-left:before,\n    .leaflet-tooltip-right:before {\n        top: 50%;\n        margin-top: -6px;\n    }\n    .leaflet-tooltip-left:before {\n        right: 0;\n        margin-right: -12px;\n        border-left-color: #fff;\n    }\n    .leaflet-tooltip-right:before {\n        left: 0;\n        margin-left: -12px;\n        border-right-color: #fff;\n    }\n"], ["\n    ", ";\n\n    /* required styles */\n\n    .leaflet-pane,\n    .leaflet-tile,\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow,\n    .leaflet-tile-container,\n    .leaflet-pane > svg,\n    .leaflet-pane > canvas,\n    .leaflet-zoom-box,\n    .leaflet-image-layer,\n    .leaflet-layer {\n        position: absolute;\n        left: 0;\n        top: 0;\n    }\n    .leaflet-container {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n    }\n    .leaflet-tile,\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n        -webkit-user-drag: none;\n    }\n    /* Prevents IE11 from highlighting tiles in blue */\n    .leaflet-tile::selection {\n        background: transparent;\n    }\n    /* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n    .leaflet-safari .leaflet-tile {\n        image-rendering: -webkit-optimize-contrast;\n    }\n    /* hack that prevents hw layers \"stretching\" when loading new tiles */\n    .leaflet-safari .leaflet-tile-container {\n        width: 1600px;\n        height: 1600px;\n        -webkit-transform-origin: 0 0;\n    }\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow {\n        display: block;\n    }\n    /* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n    /* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n    .leaflet-container .leaflet-overlay-pane svg,\n    .leaflet-container .leaflet-marker-pane img,\n    .leaflet-container .leaflet-shadow-pane img,\n    .leaflet-container .leaflet-tile-pane img,\n    .leaflet-container img.leaflet-image-layer,\n    .leaflet-container .leaflet-tile {\n        max-width: none !important;\n        max-height: none !important;\n    }\n\n    .leaflet-container.leaflet-touch-zoom {\n        -ms-touch-action: pan-x pan-y;\n        touch-action: pan-x pan-y;\n    }\n    .leaflet-container.leaflet-touch-drag {\n        -ms-touch-action: pinch-zoom;\n        /* Fallback for FF which doesn't support pinch-zoom */\n        touch-action: none;\n        touch-action: pinch-zoom;\n    }\n    .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n        -ms-touch-action: none;\n        touch-action: none;\n    }\n    .leaflet-container {\n        -webkit-tap-highlight-color: transparent;\n    }\n    .leaflet-container a {\n        -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n    }\n    .leaflet-tile {\n        filter: inherit;\n        visibility: hidden;\n    }\n    .leaflet-tile-loaded {\n        visibility: inherit;\n    }\n    .leaflet-zoom-box {\n        width: 0;\n        height: 0;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n        z-index: 800;\n    }\n    /* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n    .leaflet-overlay-pane svg {\n        -moz-user-select: none;\n    }\n\n    .leaflet-pane {\n        z-index: 400;\n    }\n\n    .leaflet-tile-pane {\n        z-index: 200;\n    }\n    .leaflet-overlay-pane {\n        z-index: 400;\n    }\n    .leaflet-shadow-pane {\n        z-index: 500;\n    }\n    .leaflet-marker-pane {\n        z-index: 600;\n    }\n    .leaflet-tooltip-pane {\n        z-index: 650;\n    }\n    .leaflet-popup-pane {\n        z-index: 700;\n    }\n\n    .leaflet-map-pane canvas {\n        z-index: 100;\n    }\n    .leaflet-map-pane svg {\n        z-index: 200;\n    }\n\n    .leaflet-vml-shape {\n        width: 1px;\n        height: 1px;\n    }\n    .lvml {\n        behavior: url(#default#VML);\n        display: inline-block;\n        position: absolute;\n    }\n\n    /* control positioning */\n\n    .leaflet-control {\n        position: relative;\n        z-index: 800;\n        pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n        pointer-events: auto;\n    }\n    .leaflet-top,\n    .leaflet-bottom {\n        position: absolute;\n        z-index: 1000;\n        pointer-events: none;\n    }\n    .leaflet-top {\n        top: 0;\n    }\n    .leaflet-right {\n        right: 0;\n    }\n    .leaflet-bottom {\n        bottom: 0;\n    }\n    .leaflet-left {\n        left: 0;\n    }\n    .leaflet-control {\n        float: left;\n        clear: both;\n    }\n    .leaflet-right .leaflet-control {\n        float: right;\n    }\n    .leaflet-top .leaflet-control {\n        margin-top: 10px;\n    }\n    .leaflet-bottom .leaflet-control {\n        margin-bottom: 10px;\n    }\n    .leaflet-left .leaflet-control {\n        margin-left: 10px;\n    }\n    .leaflet-right .leaflet-control {\n        margin-right: 10px;\n    }\n\n    /* zoom and fade animations */\n\n    .leaflet-fade-anim .leaflet-tile {\n        will-change: opacity;\n    }\n    .leaflet-fade-anim .leaflet-popup {\n        opacity: 0;\n        -webkit-transition: opacity 0.2s linear;\n        -moz-transition: opacity 0.2s linear;\n        transition: opacity 0.2s linear;\n    }\n    .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n        opacity: 1;\n    }\n    .leaflet-zoom-animated {\n        -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        transform-origin: 0 0;\n    }\n    .leaflet-zoom-anim .leaflet-zoom-animated {\n        will-change: transform;\n    }\n    .leaflet-zoom-anim .leaflet-zoom-animated {\n        -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n        -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n        transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n    }\n    .leaflet-zoom-anim .leaflet-tile,\n    .leaflet-pan-anim .leaflet-tile {\n        -webkit-transition: none;\n        -moz-transition: none;\n        transition: none;\n    }\n\n    .leaflet-zoom-anim .leaflet-zoom-hide {\n        visibility: hidden;\n    }\n\n    /* cursors */\n\n    .leaflet-interactive {\n        cursor: pointer;\n    }\n    .leaflet-grab {\n        cursor: -webkit-grab;\n        cursor: -moz-grab;\n        cursor: grab;\n    }\n    .leaflet-crosshair,\n    .leaflet-crosshair .leaflet-interactive {\n        cursor: crosshair;\n    }\n    .leaflet-popup-pane,\n    .leaflet-control {\n        cursor: auto;\n    }\n    .leaflet-dragging .leaflet-grab,\n    .leaflet-dragging .leaflet-grab .leaflet-interactive,\n    .leaflet-dragging .leaflet-marker-draggable {\n        cursor: move;\n        cursor: -webkit-grabbing;\n        cursor: -moz-grabbing;\n        cursor: grabbing;\n    }\n\n    /* marker & overlays interactivity */\n    .leaflet-marker-icon,\n    .leaflet-marker-shadow,\n    .leaflet-image-layer,\n    .leaflet-pane > svg path,\n    .leaflet-tile-container {\n        pointer-events: none;\n    }\n\n    .leaflet-marker-icon.leaflet-interactive,\n    .leaflet-image-layer.leaflet-interactive,\n    .leaflet-pane > svg path.leaflet-interactive,\n    svg.leaflet-image-layer.leaflet-interactive path {\n        pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n        pointer-events: auto;\n    }\n\n    /* visual tweaks */\n\n    .leaflet-container {\n        background: #ddd;\n        outline: 0;\n    }\n    .leaflet-container a {\n        color: #0078a8;\n    }\n    .leaflet-container a.leaflet-active {\n        outline: 2px solid orange;\n    }\n    .leaflet-zoom-box {\n        border: 2px dotted #38f;\n        background: rgba(255, 255, 255, 0.5);\n    }\n\n    /* general typography */\n    .leaflet-container {\n        font: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n    }\n\n    /* general toolbar styles */\n\n    .leaflet-bar {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n        border-radius: 4px;\n    }\n    .leaflet-bar a,\n    .leaflet-bar a:hover {\n        background-color: #fff;\n        border-bottom: 1px solid #ccc;\n        width: 26px;\n        height: 26px;\n        line-height: 26px;\n        display: block;\n        text-align: center;\n        text-decoration: none;\n        color: black;\n    }\n    .leaflet-bar a,\n    .leaflet-control-layers-toggle {\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        display: block;\n    }\n    .leaflet-bar a:hover {\n        background-color: #f4f4f4;\n    }\n    .leaflet-bar a:first-child {\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n    }\n    .leaflet-bar a:last-child {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n        border-bottom: none;\n    }\n    .leaflet-bar a.leaflet-disabled {\n        cursor: default;\n        background-color: #f4f4f4;\n        color: #bbb;\n    }\n\n    .leaflet-touch .leaflet-bar a {\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n    }\n    .leaflet-touch .leaflet-bar a:first-child {\n        border-top-left-radius: 2px;\n        border-top-right-radius: 2px;\n    }\n    .leaflet-touch .leaflet-bar a:last-child {\n        border-bottom-left-radius: 2px;\n        border-bottom-right-radius: 2px;\n    }\n\n    /* zoom control */\n\n    .leaflet-control-zoom-in,\n    .leaflet-control-zoom-out {\n        font: bold 18px \"Lucida Console\", Monaco, monospace;\n        text-indent: 1px;\n    }\n\n    .leaflet-touch .leaflet-control-zoom-in,\n    .leaflet-touch .leaflet-control-zoom-out {\n        font-size: 22px;\n    }\n\n    /* layers control */\n\n    .leaflet-control-layers {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n        background: #fff;\n        border-radius: 5px;\n    }\n    .leaflet-control-layers-toggle {\n        background-image: url(images/layers.png);\n        width: 36px;\n        height: 36px;\n    }\n    .leaflet-retina .leaflet-control-layers-toggle {\n        background-image: url(images/layers-2x.png);\n        background-size: 26px 26px;\n    }\n    .leaflet-touch .leaflet-control-layers-toggle {\n        width: 44px;\n        height: 44px;\n    }\n    .leaflet-control-layers .leaflet-control-layers-list,\n    .leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n        display: none;\n    }\n    .leaflet-control-layers-expanded .leaflet-control-layers-list {\n        display: block;\n        position: relative;\n    }\n    .leaflet-control-layers-expanded {\n        padding: 6px 10px 6px 6px;\n        color: #333;\n        background: #fff;\n    }\n    .leaflet-control-layers-scrollbar {\n        overflow-y: scroll;\n        overflow-x: hidden;\n        padding-right: 5px;\n    }\n    .leaflet-control-layers-selector {\n        margin-top: 2px;\n        position: relative;\n        top: 1px;\n    }\n    .leaflet-control-layers label {\n        display: block;\n    }\n    .leaflet-control-layers-separator {\n        height: 0;\n        border-top: 1px solid #ddd;\n        margin: 5px -10px 5px -6px;\n    }\n\n    /* Default icon URLs */\n    .leaflet-default-icon-path {\n        background-image: url(images/marker-icon.png);\n    }\n\n    /* attribution and scale controls */\n\n    .leaflet-container .leaflet-control-attribution {\n        background: #fff;\n        background: rgba(255, 255, 255, 0.7);\n        margin: 0;\n    }\n    .leaflet-control-attribution,\n    .leaflet-control-scale-line {\n        padding: 0 5px;\n        color: #333;\n    }\n    .leaflet-control-attribution a {\n        text-decoration: none;\n    }\n    .leaflet-control-attribution a:hover {\n        text-decoration: underline;\n    }\n    .leaflet-container .leaflet-control-attribution,\n    .leaflet-container .leaflet-control-scale {\n        font-size: 11px;\n    }\n    .leaflet-left .leaflet-control-scale {\n        margin-left: 5px;\n    }\n    .leaflet-bottom .leaflet-control-scale {\n        margin-bottom: 5px;\n    }\n    .leaflet-control-scale-line {\n        border: 2px solid #777;\n        border-top: none;\n        line-height: 1.1;\n        padding: 2px 5px 1px;\n        font-size: 11px;\n        white-space: nowrap;\n        overflow: hidden;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n\n        background: #fff;\n        background: rgba(255, 255, 255, 0.5);\n    }\n    .leaflet-control-scale-line:not(:first-child) {\n        border-top: 2px solid #777;\n        border-bottom: none;\n        margin-top: -2px;\n    }\n    .leaflet-control-scale-line:not(:first-child):not(:last-child) {\n        border-bottom: 2px solid #777;\n    }\n\n    .leaflet-touch .leaflet-control-attribution,\n    .leaflet-touch .leaflet-control-layers,\n    .leaflet-touch .leaflet-bar {\n        box-shadow: none;\n    }\n    .leaflet-touch .leaflet-control-layers,\n    .leaflet-touch .leaflet-bar {\n        border: 2px solid rgba(0, 0, 0, 0.2);\n        background-clip: padding-box;\n    }\n\n    /* popup */\n\n    .leaflet-popup {\n        position: absolute;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .leaflet-popup-content-wrapper {\n        padding: 1px;\n        text-align: left;\n        border-radius: 12px;\n    }\n    .leaflet-popup-content {\n        margin: 13px 19px;\n        line-height: 1.4;\n    }\n    .leaflet-popup-content p {\n        margin: 18px 0;\n    }\n    .leaflet-popup-tip-container {\n        width: 40px;\n        height: 20px;\n        position: absolute;\n        left: 50%;\n        margin-left: -20px;\n        overflow: hidden;\n        pointer-events: none;\n    }\n    .leaflet-popup-tip {\n        width: 17px;\n        height: 17px;\n        padding: 1px;\n\n        margin: -10px auto 0;\n\n        -webkit-transform: rotate(45deg);\n        -moz-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n    .leaflet-popup-content-wrapper,\n    .leaflet-popup-tip {\n        background: white;\n        color: #333;\n        box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4);\n    }\n    .leaflet-container a.leaflet-popup-close-button {\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 4px 4px 0 0;\n        border: none;\n        text-align: center;\n        width: 18px;\n        height: 14px;\n        font: 16px/14px Tahoma, Verdana, sans-serif;\n        color: #c3c3c3;\n        text-decoration: none;\n        font-weight: bold;\n        background: transparent;\n    }\n    .leaflet-container a.leaflet-popup-close-button:hover {\n        color: #999;\n    }\n    .leaflet-popup-scrolled {\n        overflow: auto;\n        border-bottom: 1px solid #ddd;\n        border-top: 1px solid #ddd;\n    }\n\n    .leaflet-oldie .leaflet-popup-content-wrapper {\n        -ms-zoom: 1;\n    }\n    .leaflet-oldie .leaflet-popup-tip {\n        width: 24px;\n        margin: 0 auto;\n\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\n        filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n    }\n    .leaflet-oldie .leaflet-popup-tip-container {\n        margin-top: -1px;\n    }\n\n    .leaflet-oldie .leaflet-control-zoom,\n    .leaflet-oldie .leaflet-control-layers,\n    .leaflet-oldie .leaflet-popup-content-wrapper,\n    .leaflet-oldie .leaflet-popup-tip {\n        border: 1px solid #999;\n    }\n\n    /* div icon */\n\n    .leaflet-div-icon {\n        background: #fff;\n        border: 1px solid #666;\n    }\n\n    /* Tooltip */\n    /* Base styles for the element that has a tooltip */\n    .leaflet-tooltip {\n        position: absolute;\n        padding: 6px;\n        background-color: #fff;\n        border: 1px solid #fff;\n        border-radius: 3px;\n        color: #222;\n        white-space: nowrap;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        pointer-events: none;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    .leaflet-tooltip.leaflet-clickable {\n        cursor: pointer;\n        pointer-events: auto;\n    }\n    .leaflet-tooltip-top:before,\n    .leaflet-tooltip-bottom:before,\n    .leaflet-tooltip-left:before,\n    .leaflet-tooltip-right:before {\n        position: absolute;\n        pointer-events: none;\n        border: 6px solid transparent;\n        background: transparent;\n        content: \"\";\n    }\n\n    /* Directions */\n\n    .leaflet-tooltip-bottom {\n        margin-top: 6px;\n    }\n    .leaflet-tooltip-top {\n        margin-top: -6px;\n    }\n    .leaflet-tooltip-bottom:before,\n    .leaflet-tooltip-top:before {\n        left: 50%;\n        margin-left: -6px;\n    }\n    .leaflet-tooltip-top:before {\n        bottom: 0;\n        margin-bottom: -12px;\n        border-top-color: #fff;\n    }\n    .leaflet-tooltip-bottom:before {\n        top: 0;\n        margin-top: -12px;\n        margin-left: -6px;\n        border-bottom-color: #fff;\n    }\n    .leaflet-tooltip-left {\n        margin-left: -6px;\n    }\n    .leaflet-tooltip-right {\n        margin-left: 6px;\n    }\n    .leaflet-tooltip-left:before,\n    .leaflet-tooltip-right:before {\n        top: 50%;\n        margin-top: -6px;\n    }\n    .leaflet-tooltip-left:before {\n        right: 0;\n        margin-right: -12px;\n        border-left-color: #fff;\n    }\n    .leaflet-tooltip-right:before {\n        left: 0;\n        margin-left: -12px;\n        border-right-color: #fff;\n    }\n"])), layout);
var templateObject_1;
