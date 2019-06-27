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
	production: true,
	websiteName : 'Byroad',
	host : host,
	apiEndpoints : apiEndpoints,
	logoUrl : 'https://byroad.app/logo__f07eeb1e9ea87cd841fbfcf14702f3b9_1561531781.png'
};