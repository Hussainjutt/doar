import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapKey } from "@doar/shared/data";
import Map from "./map";
import Marker from "./marker";
import { StyledMap } from "./style";
var render = function (status) {
    return _jsx("h1", { children: status });
};
var MyMap = function (_a) {
    var width = _a.width, height = _a.height, marker = _a.marker, options = __rest(_a, ["width", "height", "marker"]);
    return (_jsx(StyledMap, __assign({ width: width, height: height }, { children: _jsx(Wrapper, __assign({ apiKey: MapKey, render: render }, { children: _jsx(Map, __assign({}, options, { children: marker && _jsx(Marker, { position: options.center }) })) })) })));
};
MyMap.defaultProps = {
    center: { lat: -3.745, lng: -38.523 },
    width: "100%",
    height: "400px",
    zoom: 12,
};
export default MyMap;
