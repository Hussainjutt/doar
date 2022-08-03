import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
var LineChart = function (_a) {
    var data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    return (_jsx(Line, { data: data, options: __assign({ responsive: true, maintainAspectRatio: false }, options), width: width, height: height }));
};
LineChart.defaultProps = {
    width: "100%",
    height: "100%",
};
export default LineChart;