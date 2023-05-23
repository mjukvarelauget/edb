import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'll3wkgw3',
	dataset: 'production',
	apiVersion: '2023-05-23',
	useCdn: false
});
