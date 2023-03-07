import Image from "next/image";

const Footer = () => {
	const title = "text-base font-bold uppercase text-strongBlue";
	const info = "font-semibold text-base";

	const iconContainer = "flex w-6 h-6 ml-4 relative";

	const vnAddressInfo = "Suite 312, Block B - Charmington La Pointe, 181 Cao Thắng, Phường 12, Quận 10, TP. HCM, Việt Nam";
	const caAddressInfo = "2600 John Street, Markham, ON L3R 3W3, Canada";
	return (
		<section id="footer">
			<div className="footer-container-wrap bg-lightBlue rounded-t-[30px] mt-17.5 md:mt-25">
				<div className="footer-container grid grid-cols-8 md:grid-cols-5 grid-rows-3 md:grid-rows-2 md:gap-8 py-10 mx-15 md:mx-8 md:pr-20">
					<div className="sub-section col-span-2 md:col-span-1 row-span-1 md:row-span-full justify-items-start">
						<div className="icon-container relative w-1/2 h-full">
							<Image
								src="/logo/logo_red.svg"
								alt="logo"
								fill
								sizes=""
								unoptimized
								className="object-contain object-top"
							/>
						</div>
					</div>
					<div className="sub-section md:col-span-2">
						<div className="title-container text-4xl font-bold uppercase text-strongPink">Nhận visa Canada cực dễ cùng Can-Immigration</div>
					</div>
					<div className="sub-section md:col-span-2">
						<div className="description-container text-xl font-semibold">Với 30 năm kinh nghiệm tư vấn định cư và du học Canada, chúng tôi tự tin sẽ hỗ trợ các bạn đạt được tấm thẻ PR mà bạn mong muốn.</div>
					</div>
					<div className="sub-section md:col-start-2 md:row-start-2">
						<div className="vn-address-container">
							<div className={`title ${title}`}>Văn Phòng Việt Nam</div>
							<a
								href={`https://www.google.com/maps?q=${vnAddressInfo}`}
								target="_blank"
								className={`info ${info}`}>
								{vnAddressInfo}
							</a>
						</div>
					</div>
					<div className="sub-section">
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
					<div className="sub-section">
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
					</div>
					<div className="sub-section flex justify-end">
						<div className="social-container flex flex-row self-end">
							<div className="gmail-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="mailto:kazenokioku234@gmail.com"
									target="_blank">
									<Image
										src="/assets/icon/gmail.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="88px"
										className="!relative"
									/>
								</a>
							</div>
							<div className="fb-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="https://www.facebook.com/canimmvn"
									target="_blank">
									<Image
										src="/assets/icon/facebook.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="40px"
										className="!relative"
									/>
								</a>
							</div>
							<div className="zalo-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="https://zalo.me/0901989833"
									target="_blank">
									<Image
										src="/assets/icon/zalo.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="50px"
										className="!relative"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
