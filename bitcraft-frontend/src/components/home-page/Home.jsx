import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import '../../stylesheets/home.css'

import TrendingProd from './TrendingProd'

import { hero_img, phoneeeeee, ps5, jumanji, jungLee, plantForium, gamingPhone, xbox, star } from './../../resources/images'

const Home = (props) => {
	return (
		<>
			<div className='home'>
				<div className="kickoff-wrapper">
					<div className="kickoff-section flex">
						<div className="header-data header-left">
							<h2>Product Analysis that you can trust!</h2>
							<br />
							<p>Browse the latest and trendy products online. Take a look at the dashboard, which shows detailed analysis for the latest products.</p>
							<br />
							<form className="search-form">
								<li><a href="indexform.html" className="button viewprod-bttn">View products</a></li>
							</form>

						</div>
						<div className="header-right">
							<img src={hero_img} alt="hero" />
						</div>
					</div>

					<div className="kickoff-section flex">
						<div className="header-left">
							<img src={phoneeeeee} alt="img" />
						</div>
						<div className="header-data header-right">
							<h2>Our Shop</h2>
							<p>CloudDev offers you a brand new, ultra-convenient way to buy and sell games, gaming accessories, controllers, gaming consoles, Electronics, Phones, Gadgets online. We also specialize in trading new and pre-owned games, covering all current consoles (PS5, PS4, PS3, Xbox One, Xbox 360, PS Vita and Nintendo Switch). </p>
						</div>
					</div>
				</div >

				<br />
				<div className="brand">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="titlepage">
									<h2>Trending Products</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="brand-bg">
						<div className="container">
							<div className="row">
								<TrendingProd name="PS 5" img={ps5} price={4000} starImg={star} />
								<TrendingProd name="Jumanji Nintendo" img={jumanji} price={1000} starImg={star} />
								<TrendingProd name="Jung Lee" img={jungLee} price={1500} starImg={star} />
								<TrendingProd name="Plantforium Nintendo" img={plantForium} price={2500} starImg={star} />
								<TrendingProd name="Gaming Mobile Phone" img={gamingPhone} price={31000} starImg={star} />
								<TrendingProd name="Xbox" img={xbox} price={50000} starImg={star} />
								<div className="col-md-12">
									<Link onClick={() => {props.setPageID(2)}} to='/products' className="read-more">See More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="clients">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="titlepage">
									<h2>What say our clients</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="clients_red">
					<div className="container">
						<div id="testimonial_slider" className="carousel slide" data-ride="carousel">
							<ul className="carousel-indicators">
								<li data-target="#testimonial_slider" data-slide-to="0" className=""></li>
								<li data-target="#testimonial_slider" data-slide-to="1" className="active"></li>
								<li data-target="#testimonial_slider" data-slide-to="2" className=""></li>
							</ul>
							<div className="carousel-inner">
								<div className="carousel-item">
									<div className="testomonial_section">
										<div className="full center"></div>
										<div className="full testimonial_cont text_align_center cross_layout">
											<div className="cross_inner">
												<h3>Araish Shaikh<br /><strong className="ornage_color">Customer</strong></h3>
												<p>After testing the controller functions with Astro’s Playroom, I played a few games on the PlayStation 5 with it. Genshin Impact played well with the controller, and Axiom Verge 2 felt great due to its responsive analog stick and direction pad.</p>
												<div className="full text_align_center margin_top_30">
													<img src={testimonial_qoute} alt='testimolia-quote' />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="carousel-item active">

									<div className="testomonial_section">
										<div className="full center">
										</div>
										<div className="full testimonial_cont text_align_center cross_layout">
											<div className="cross_inner">
												<h3>Sanjal Ghate<br /><strong className="ornage_color">Customer</strong></h3>
												<p>Have always trusted HP, never been disappointed. It's a light weight keyboard with backlighting. Three modes there... lighting, beating, breathing! The Fn key gives you some additional options which are great. The build quality is solid...metal top with good quality plastic keys. The lighting colors are sober and decent, nothing flashy about them. I wish the fonts (type) were a bit more legible.</p>
											</div>
											<div className="full text_align_center margin_top_30">
												<img src={testimonial_qoute} />
											</div>
										</div>
									</div>
								</div>

							</div>

							<div className="carousel-item">

								<div className="testomonial_section">
									<div className="full center">
									</div>
									<div className="full testimonial_cont text_align_center cross_layout">
										<div className="cross_inner">
											<h3>Araish Shaikh<br /><strong className="ornage_color">Rental</strong></h3>
											<p>After testing the controller functions with Astro’s Playroom, I played a few games on the PlayStation 5 with it. Genshin Impact played well with the controller, and Axiom Verge 2 felt great due to its responsive analog stick and direction pad</p>
										</div>
										<div className="full text_align_center margin_top_30">
											<img src={testimonial_qoute} />
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

				</div > */}

			</div >
			<div className="contact">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="titlepage">
								<h2>Contact us</h2>
							</div>
							<form className="main_form">
								<div className="row">
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
										<input className="form-control" placeholder="Your name" type="text" name="Your Name" />
									</div>
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
										<input className="form-control" placeholder="Email" type="text" name="Email" />
									</div>
									<div className=" col-md-12">
										<input className="form-control" placeholder="Phone" type="text" name="Phone" />
									</div>
									<div className="col-md-12">
										<textarea className="textarea" placeholder="Message"></textarea>
									</div>
									<div className=" col-md-12">
										<button className="send">Send</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home