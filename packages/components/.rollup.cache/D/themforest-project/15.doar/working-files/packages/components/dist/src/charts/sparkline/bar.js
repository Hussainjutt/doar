import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Sparklines, SparklinesBars } from "react-sparklines";
var SparklinesBar = function (_a) {
    var data = _a.data, limit = _a.limit, width = _a.width, height = _a.height, svgWidth = _a.svgWidth, svgHeight = _a.svgHeight, preserveAspectRatio = _a.preserveAspectRatio, margin = _a.margin, min = _a.min, max = _a.max, style = _a.style, points = _a.points, barStyle = _a.barStyle, barHeight = _a.barHeight, barWidth = _a.barWidth, onMouseMove = _a.onMouseMove;
    return (_jsx(Sparklines, __assign({ data: data, limit: limit, width: width, height: height, svgWidth: svgWidth, svgHeight: svgHeight, preserveAspectRatio: preserveAspectRatio, margin: margin, min: min, max: max, style: style }, { children: _jsx(SparklinesBars, { points: points, height: barHeight, style: barStyle, barWidth: barWidth, margin: margin, onMouseMove: onMouseMove }) })));
};
export default SparklinesBar;
