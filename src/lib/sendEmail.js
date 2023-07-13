import axios from 'axios';

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
