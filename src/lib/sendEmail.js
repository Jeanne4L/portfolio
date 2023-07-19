import axios from 'axios';

// SEND EMAIL REQUEST
export default async function sendEmail(name, email, message) {
	return axios({
		method: 'post',
		url: '/api',
		data: {
			name,
			email,
			message,
		},
	});
}
