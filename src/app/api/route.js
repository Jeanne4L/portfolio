import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

// GET SEND EMAIL REQUEST
export async function POST(req) {
	const request = await req.json();

	// CONNECTION TO SMTP SERVER
	const transporter = createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NEXT_PUBLIC_CONNECTION_EMAIL,
			pass: process.env.NEXT_PUBLIC_CONNECTION_PASSWORD,
		},
	});

	// EMAIL CONFIG
	const mailOptions = {
		from: request.email,
		to: process.env.NEXT_PUBLIC_EMAIL,
		replyTo: request.email,
		subject: 'Portfolio - Demande de contact',
		text: request.message,
		html: `
            <div>
                <p>${request.message}</p>
                <span style="font-weight: 600;">${request.name}</span>
            </div>`,
	};

	// SEND EMAIL
	return await transporter
		.sendMail(mailOptions)
		.then((response) => {
			return NextResponse.json(
				{ error: false, emailSent: true, errors: [], response },
				{ status: 200 }
			);
		})
		.catch((error) => {
			return NextResponse.json(
				{ error: true, emailSent: false, errors: [error] },
				{ status: 500 }
			);
		});
}
