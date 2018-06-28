// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("Example");

function make(greeting, _) {
  return /* record */Block.record([
            "debugName",
            "reactClassInternal",
            "handedOffState",
            "willReceiveProps",
            "didMount",
            "didUpdate",
            "willUnmount",
            "willUpdate",
            "shouldUpdate",
            "render",
            "initialState",
            "retainedProps",
            "reducer",
            "subscriptions",
            "jsElementWrapped"
          ], [
            component[/* debugName */0],
            component[/* reactClassInternal */1],
            component[/* handedOffState */2],
            component[/* willReceiveProps */3],
            component[/* didMount */4],
            component[/* didUpdate */5],
            component[/* willUnmount */6],
            component[/* willUpdate */7],
            component[/* shouldUpdate */8],
            (function (self) {
                var message = "You've clicked this " + (String(self[/* state */1][/* count */0]) + " times(s)");
                var match = self[/* state */1][/* show */1];
                return React.createElement("div", undefined, React.createElement("button", {
                                onClick: (function () {
                                    return Curry._1(self[/* send */3], /* Click */0);
                                  })
                              }, message), React.createElement("button", {
                                onClick: (function () {
                                    return Curry._1(self[/* send */3], /* Toggle */1);
                                  })
                              }, "Toggle greeting"), match ? greeting : null);
              }),
            (function () {
                return /* record */Block.record([
                          "count",
                          "show"
                        ], [
                          0,
                          true
                        ]);
              }),
            component[/* retainedProps */11],
            (function (action, state) {
                if (action) {
                  return /* Update */Block.variant("Update", 0, [/* record */Block.record([
                                "count",
                                "show"
                              ], [
                                state[/* count */0],
                                !state[/* show */1]
                              ])]);
                } else {
                  return /* Update */Block.variant("Update", 0, [/* record */Block.record([
                                "count",
                                "show"
                              ], [
                                state[/* count */0] + 1 | 0,
                                state[/* show */1]
                              ])]);
                }
              }),
            component[/* subscriptions */13],
            component[/* jsElementWrapped */14]
          ]);
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
