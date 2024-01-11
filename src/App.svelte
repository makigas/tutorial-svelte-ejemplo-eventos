<script>
	import Router, { push, replace, location } from "svelte-spa-router";
	import { wrap } from "svelte-spa-router/wrap";
	// import {routes} from './routes';
	import Navbar from "./navbar.svelte";

	import { routes } from "./routes";
	function routeLoaded(event) {
		console.log("routeLoaded event");
		// The first 5 properties are the same as for the routeLoading event
		// console.log("Route", event.detail.route);
		// console.log("Location", event.detail.location);
		// console.log("Querystring", event.detail.querystring);
		// console.log("Params", event.detail.params);
		// console.log("User data", event.detail.userData);
		// The last two properties are unique to routeLoaded
		console.log("Component", event.detail.component); // This is a Svelte component, so a function
		console.log("Name", event.detail.name);

		// console.log(window.location.href);
		

		// 	import WorkingWithCssGlobal from "./routes/workingWithCssGlobal.svelte";
		// 	routes["/WorkingCSS/global"] ={
		// 		component: WorkingWithCssGlobal,
		// 	});
		// } else {
		// 	delete routes["/WorkingCSS/global"];
		// }

	}
</script>

<main>
	<Navbar />
	<Router {routes} on:routeLoaded={routeLoaded} />
</main>
