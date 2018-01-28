var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var state = {
    name: "Ichiro Morita",
    tel: "893-893893",
    age: 32
};
state = __assign({}, state, { tel: "4643-893" });
console.log(state);
function updateUser(newState) {
    state = __assign({}, state, newState);
}
updateUser({ age: 35 });
console.log(state);
