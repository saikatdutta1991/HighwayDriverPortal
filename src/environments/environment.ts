// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let host = 'https://byroad.capefox.in';
let apiEndpointBase = host + '/api/v1/driver';
let apiEndpoints = {
	login : apiEndpointBase + '/login',
	dashboard : apiEndpointBase + '/dashboard-details',
	logout : apiEndpointBase + '/logout',
	payouts : apiEndpointBase + '/payouts',
	driverAccount : apiEndpointBase + '/account'
};

export const environment = {
	production: false,
	websiteName : 'Byroad',
	host : host,
	apiEndpoints : apiEndpoints,
	logoUrl : 'https://byroad.app/logo__f07eeb1e9ea87cd841fbfcf14702f3b9_1561531781.png'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
