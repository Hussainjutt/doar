var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import classnames from "classnames";
import { StyledGroup } from "./style";
var ButtonGroup = function (_a) {
    var children = _a.children, size = _a.size, vertical = _a.vertical, label = _a.label, className = _a.className, restProps = __rest(_a, ["children", "size", "vertical", "label", "className"]);
    return (_jsx(StyledGroup, __assign({ role: "group", "$size": size, "$vertical": vertical, "aria-label": label, className: classnames(className, "btn-group") }, restProps, { children: children })));
};
ButtonGroup.defaultProps = {
    label: "button group",
};
export default ButtonGroup;
//# sourceMappingURL=button-group.js.map