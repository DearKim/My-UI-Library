import { jsx as _jsx } from "react/jsx-runtime";
export var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.type, type = _b === void 0 ? "button" : _b;
    return (_jsx("button", { onClick: onClick, type: type, style: {
            padding: "10px 20px",
            border: "none",
            background: "#007bff",
            color: "white",
            borderRadius: "4px",
        }, children: children }));
};
