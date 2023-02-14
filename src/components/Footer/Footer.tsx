const Footer = () => {
	const title = "text-base font-bold uppercase text-strongBlue";
	const info = "font-semibold text-base";

	const iconContainer = "flex w-4 h-4 mr-3";
	const subSocialContainer = "flex flex-row items-center";

	const vnAddressInfo = "Suite 312, Block B - Charmington La Pointe, 181 Cao Thắng, Phường 12, Quận 10, TP. HCM, Việt Nam";
	const caAddressInfo = "2600 John Street, Markham, ON L3R 3W3, Canada";
	return (
		<div
			id="footer"
			className="bg-lightBlue rounded-t-[1.875rem]">
			<div className="footer-container grid grid-cols-5 p-[2%]">
				<div className="sub-section grid col-span-1">
					<div className="icon-container w-1/2">
						<img
							src="logo_red.png"
							alt="logo"
							className="object-contain"
						/>
					</div>
				</div>
				<div className="sub-section grid col-span-4 grid-cols-2 grid-rows-2 gap-8">
					<div className="title-container text-4xl font-bold uppercase text-strongPink">Nhận visa Canada cực dễ cùng Can-Immigration</div>
					<div className="description-container text-xl font-semibold">Với 30 năm kinh nghiệm tư vấn định cư và du học Canada, chúng tôi tự tin sẽ hỗ trợ các bạn đạt được tấm thẻ PR mà bạn mong muốn.</div>
					<div className="address-container grid grid-cols-2 gap-8">
						<div className="vn-address-container">
							<div className={`title ${title}`}>Văn Phòng Việt Nam</div>
							<a
								href={`https://www.google.com/maps?q=${vnAddressInfo}`}
								target="_blank"
								className={`info ${info}`}>
								{vnAddressInfo}
							</a>
						</div>
						<div className="ca-address-container">
							<div className={`title ${title}`}>Văn Phòng canada</div>
							<a
								href={`https://www.google.com/maps?q=${caAddressInfo}`}
								target="_blank"
								className={`info ${info}`}>
								{caAddressInfo}
							</a>
						</div>
					</div>
					<div className="contact-container grid grid-cols-4 gap-2 overflow-hidden">
						<div className="phone-container">
							<div className="settle-phone-container">
								<div className={`title ${title}`}>Tư vấn định cư</div>
								<a
									href="tel:+84901989833"
									className={`info ${info}`}>
									0901989833
								</a>
							</div>
							<div className="study-abroad-phone-container">
								<div className={`title ${title}`}>Tư vấn du học</div>
								<a
									href="tel:+84933988893"
									className={`info ${info}`}>
									0933988893
								</a>
							</div>
						</div>
						<div className="social-container">
							<div className={`gmail-container ${subSocialContainer}`}>
								<div className={`icon-container ${iconContainer}`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="52 42 88 66">
										<path
											fill="#4285f4"
											d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
										/>
										<path
											fill="#34a853"
											d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
										/>
										<path
											fill="#fbbc04"
											d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
										/>
										<path
											fill="#ea4335"
											d="M72 74V48l24 18 24-18v26L96 92"
										/>
										<path
											fill="#c5221f"
											d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
										/>
									</svg>
								</div>
								<span>globalapplication@canimmvn.com</span>
							</div>
							<div className={`fb-container ${subSocialContainer}`}>
								<div className={`icon-container ${iconContainer}`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlSpace="preserve"
										viewBox="0 0 40 40">
										<linearGradient
											id="a"
											x1="-277.375"
											x2="-277.375"
											y1="406.6018"
											y2="407.5726"
											gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
											gradientUnits="userSpaceOnUse">
											<stop
												offset="0"
												stopColor="#0062e0"
											/>
											<stop
												offset="1"
												stopColor="#19afff"
											/>
										</linearGradient>
										<path
											fill="url(#a)"
											d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
										/>
										<path
											fill="#fff"
											d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
										/>
									</svg>
								</div>
								<a
									href="https://www.facebook.com/canimmvn"
									target="_blank">
									Can Immigration Vietnam - Du Học, Việc Làm, và Định Cư Canada
								</a>
							</div>
							<div className={`zalo-container ${subSocialContainer}`}>
								<div className={`icon-container ${iconContainer}`}>
									<svg
										viewBox="0 0 50 50"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M22.782 0.166016H27.199C33.2653 0.166016 36.8103 1.05701 39.9572 2.74421C43.1041 4.4314 45.5875 6.89585 47.2557 10.0428C48.9429 13.1897 49.8339 16.7347 49.8339 22.801V27.1991C49.8339 33.2654 48.9429 36.8104 47.2557 39.9573C45.5685 43.1042 43.1041 45.5877 39.9572 47.2559C36.8103 48.9431 33.2653 49.8341 27.199 49.8341H22.8009C16.7346 49.8341 13.1896 48.9431 10.0427 47.2559C6.89583 45.5687 4.41243 43.1042 2.7442 39.9573C1.057 36.8104 0.166016 33.2654 0.166016 27.1991V22.801C0.166016 16.7347 1.057 13.1897 2.7442 10.0428C4.43139 6.89585 6.89583 4.41245 10.0427 2.74421C13.1707 1.05701 16.7346 0.166016 22.782 0.166016Z"
											fill="#0068FF"
										/>
										<path
											opacity="0.12"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M49.8336 26.4736V27.1994C49.8336 33.2657 48.9427 36.8107 47.2555 39.9576C45.5683 43.1045 43.1038 45.5879 39.9569 47.2562C36.81 48.9434 33.265 49.8344 27.1987 49.8344H22.8007C17.8369 49.8344 14.5612 49.2378 11.8104 48.0966L7.27539 43.4267L49.8336 26.4736Z"
											fill="#001A33"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M7.779 43.5892C10.1019 43.846 13.0061 43.1836 15.0682 42.1825C24.0225 47.1318 38.0197 46.8954 46.4923 41.4732C46.8209 40.9803 47.1279 40.4677 47.4128 39.9363C49.1062 36.7779 50.0004 33.22 50.0004 27.1316V22.7175C50.0004 16.629 49.1062 13.0711 47.4128 9.91273C45.7385 6.75436 43.2461 4.28093 40.0877 2.58758C36.9293 0.894239 33.3714 0 27.283 0H22.8499C17.6644 0 14.2982 0.652754 11.4699 1.89893C11.3153 2.03737 11.1636 2.17818 11.0151 2.32135C2.71734 10.3203 2.08658 27.6593 9.12279 37.0782C9.13064 37.0921 9.13933 37.1061 9.14889 37.1203C10.2334 38.7185 9.18694 41.5154 7.55068 43.1516C7.28431 43.399 7.37944 43.5512 7.779 43.5892Z"
											fill="white"
										/>
										<path
											d="M20.5632 17H10.8382V19.0853H17.5869L10.9329 27.3317C10.7244 27.635 10.5728 27.9194 10.5728 28.5639V29.0947H19.748C20.203 29.0947 20.5822 28.7156 20.5822 28.2606V27.1421H13.4922L19.748 19.2938C19.8428 19.1801 20.0134 18.9716 20.0893 18.8768L20.1272 18.8199C20.4874 18.2891 20.5632 17.8341 20.5632 17.2844V17Z"
											fill="#0068FF"
										/>
										<path
											d="M32.9416 29.0947H34.3255V17H32.2402V28.3933C32.2402 28.7725 32.5435 29.0947 32.9416 29.0947Z"
											fill="#0068FF"
										/>
										<path
											d="M25.814 19.6924C23.1979 19.6924 21.0747 21.8156 21.0747 24.4317C21.0747 27.0478 23.1979 29.171 25.814 29.171C28.4301 29.171 30.5533 27.0478 30.5533 24.4317C30.5723 21.8156 28.4491 19.6924 25.814 19.6924ZM25.814 27.2184C24.2785 27.2184 23.0273 25.9672 23.0273 24.4317C23.0273 22.8962 24.2785 21.645 25.814 21.645C27.3495 21.645 28.6007 22.8962 28.6007 24.4317C28.6007 25.9672 27.3685 27.2184 25.814 27.2184Z"
											fill="#0068FF"
										/>
										<path
											d="M40.4867 19.6162C37.8516 19.6162 35.7095 21.7584 35.7095 24.3934C35.7095 27.0285 37.8516 29.1707 40.4867 29.1707C43.1217 29.1707 45.2639 27.0285 45.2639 24.3934C45.2639 21.7584 43.1217 19.6162 40.4867 19.6162ZM40.4867 27.2181C38.9322 27.2181 37.681 25.9669 37.681 24.4124C37.681 22.8579 38.9322 21.6067 40.4867 21.6067C42.0412 21.6067 43.2924 22.8579 43.2924 24.4124C43.2924 25.9669 42.0412 27.2181 40.4867 27.2181Z"
											fill="#0068FF"
										/>
										<path
											d="M29.4562 29.0944H30.5747V19.957H28.6221V28.2793C28.6221 28.7153 29.0012 29.0944 29.4562 29.0944Z"
											fill="#0068FF"
										/>
									</svg>
								</div>
								<a
									href="https://zalo.me/0901989833"
									target="_blank">
									Can Immigration Vietnam Định Cư Canada
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
