import {
    wrap
} from "svelte-spa-router/wrap";
import Events from "./routes/events.svelte";
import WorkingCSS from "./routes/workingWithCss.svelte";
import Modifiers from "./routes/counter.svelte";
import ColorPicker from "./routes/colorPicker.svelte"
// import WorkingCSSGlobal from "./routes/workingWithCssGlobal.svelte";

import dollarOperator from "./routes/dollarOperator.svelte";
import Slots from "./routes/slots.svelte";
import Directives from "./routes/sveltDirectives.svelte";
import webcomponents  from "./routes/webcomponent.svelte"


// Export the route definition object

// let items = [
//     {
//     url:"/#/events",
//     element: "events"
//     },
//     {
//     url:"/#/WorkingCSS",
//     element: "workingWithCss"
//     },
//     {
//     url:"/#/events/modifiers",
//     element: "events with modifiers"
//     },
//     {
//     url:"/#/WorkingCSS/colorPicker",
//     element: "events with modifiers"
//     },
//     {
//     url:"/#/WorkingCSS/global",
//     element: "events with global css"
//     },

// ];

export const routes = {
    // Exact path
    "/WorkingCSS": wrap({
        component: WorkingCSS,
        props: {
            name: "workingWithCss"
        }
    }),
    "/WorkingCSS/ColorPicker": wrap({
        component: ColorPicker,
        props: {
            name: "events with modifiers"
        }
    }),
    //TODO remover cuando se cambie de url
    "/WorkingCSS/global": wrap({
        asyncComponent: () => import('./routes/workingWithCssGlobal.svelte'),
        conditions: [
            // First pre-condition function
            (detail) => {
                // Pre-condition succeeds only 50% of times
                if (
                    window.location.href == "http://localhost:5173/#/WorkingCSS/global"
                ) {
                    return true
                } else {
                    return false
                }
            },
        ],  
        props: {
            name: "events with global css"
        }

    }),
    // Using named parameters, with last being optional
    // '/hello/:first/:last?': Name,

    // Wildcard parameter
    // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
    // '/wild': Wild,
    // '/wild/*': Wild,
    "/events": wrap({
        component: Events,
        props: {
            name: "events"
        }
    }),
    "/events/modifiers": wrap({
        component: Modifiers,
        props: {
            name: "events with modifiers"
        }
    }),
    "/dollarOperator": wrap({
        component: dollarOperator,
        props: {
            name: "dollarOperator"
        }
    }),
    "/slots": wrap({
        component: Slots,
        props: {
            name: "slots"
        }
    }),
    "/directives": wrap({
        component: Directives,
        props: {
            name: "directives"
        }
    }),
    "/webcomponents": wrap({
        component: webcomponents,
        props: {
            name: "webcomponents"
        }
    }),

    // Catch-all, must be last
    // '*': NotFound,
};