import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

import { Link } from 'react-router-dom'

import '../stylesheets/footer.css'

const Footer = (props) => {
	return (
		<footer>
			<div className='footer-wrapper'>
				<div className='footer-grider'>
					<div className='footer-columns'>
						<p className='heading'>About Us</p>
						<p className='footerDesc'>
                        E-commerce website for differnt ranges of products.
						</p>
					</div>
					<div className='footer-columns'>
						<div>
							<p className='heading'>Address</p>
							<p className='footerDesc'>
								<a
									href="https://goo.gl/maps/UUdvCoeZa2aycxBv7" 
									target='_blank'
									rel='noreferrer'
								>
									SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle West,
									Mumbai-400056
								</a>
							</p>
						</div>
						<div>
							<p className='heading'>Contact</p>
							<div className='footerDesc'>
								<a
									href='mailto:kushalv238@gmail.com'
									target='_blank'
									rel='noreferrer'
								>
									kushalv238@gmail.com
								</a>
								<p>
									C: <a href='tel:+91 98927 75337'>+91 98927 75337</a>
								</p>
							</div>
						</div>
					</div>
					<div className='footer-columns footer-links'>
						<p className='heading'>Links</p>
						<Link onClick={() => props.setPageID(1)} className='footerLinks' to='/'>
							Home
						</Link>
						<Link onClick={() => props.setPageID(2)} className='footerLinks' to='/Products'>
							Products
						</Link>

						<a className='footerLinks' href='/team'>
							Analytics
						</a>
					</div>
					<div className='footer-columns'>
						<p className='heading'>Follow Us</p>
						<div className='socialsList'>
							<a
								title='Instagram'
								href='https://www.instagram.com/kushalv238/'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<InstagramIcon />
							</a>
							<a
								title='Facebook'
								href='https://www.facebook.com/kushalv238'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<FacebookIcon />
							</a>
							<a
								title='Twitter'
								href='https://twitter.com/kushalv238'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<TwitterIcon />
							</a>
							<a
								title='YouTube'
								href='https://www.youtube.com/'
								target='_blank'
								rel='noreferrer'
								className='footerLinks'
							>
								<YouTubeIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
