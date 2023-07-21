import Button from '@/components/Button';

// ERROR 500 PAGE
export default function ServerError() {
	return (
		<div className='dark-bgc full-container'>
			<h1 className='bright-c notfound-h1'>500</h1>
			<p className='bright-c notfound-p'>
				Hum...
				<br />
				Il semblerait que le serveur
				<br />
				ne réponde pas !
			</p>
			<Button link={'/'} text={"Revenir à la page d'accueil"} page={'404'} />
		</div>
	);
}
