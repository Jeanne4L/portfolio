import Button from '@/components/Button';

export default function NotFound() {
	return (
		<div className='dark-bgc full-container'>
			<h1 className='bright-c notfound-h1'>404</h1>
			<p className='bright-c notfound-p'>
				Hum...
				<br />
				Il semblerait que cette page
				<br />
				n'existe pas !
			</p>
			<Button link={'/'} text={"Revenir à la page d'accueil"} />
		</div>
	);
}
