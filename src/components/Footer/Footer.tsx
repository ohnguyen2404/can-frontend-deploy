const Footer = () => {
	const title = "text-base font-bold uppercase text-strongBlue";
	const info = "font-semibold text-base";

	const vnAddressInfo = "Suite 312, Block B - Charmington La Pointe, 181 Cao Thắng, Phường 12, Quận 10, TP. HCM, Việt Nam";
	const caAddressInfo = "2600 John Street, Markham, ON L3R 3W3, Canada";
	return (
		<div
			id="footer"
			className="bg-lightBlue rounded-t-[1.875rem]">
			<div className="footer-container flex flex-row p-[2%]">
				<div className="sub-section flex flex-[1_0_0%]">
					<div className="icon-container justify-start w-1/2">
						<img
							src="logo_red.png"
							alt="logo"
							className="object-contain"
						/>
					</div>
				</div>
				<div className="sub-section flex flex-[5_0_0%] flex-col">
					<div className="main-info-container flex flex-row my-4">
						<div className="title-container flex flex-[3_0_0%] pr-[5%] text-4xl font-bold uppercase text-strongPink">Nhận visa Canada cực dễ cùng Can-Immigration</div>
						<div className="description-container flex flex-[2_0_0%] text-xl font-semibold">Với 30 năm kinh nghiệm tư vấn định cư và du học Canada, chúng tôi tự tin sẽ hỗ trợ các bạn đạt được tấm thẻ PR mà bạn mong muốn.</div>
					</div>
					<div className="detail-info-container flex flex-row my-4">
						<div className="address-container flex flex-row flex-[3_0_0%] pr-[5%]">
							<div className="vn-address-container pr-[10%]">
								<div className={`title ${title}`}>Văn Phòng Việt Nam</div>
								<a
									href={`https://www.google.com/maps?q=${vnAddressInfo}`}
									target="_blank"
									className={`info ${info}`}>
									{vnAddressInfo}
								</a>
							</div>
							<div className="ca-address-container pr-[5%]">
								<div className={`title ${title}`}>Văn Phòng canada</div>
								<a
									href={`https://www.google.com/maps?q=${caAddressInfo}`}
									target="_blank"
									className={`info ${info}`}>
									{caAddressInfo}
								</a>
							</div>
						</div>
						<div className="contact-container flex flex-row flex-[2_0_0%]">
							<div className="phone-container flex flex-col">
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
							<div className="social-container flex flex-col">
								<div className="gmail-container">
									<div className="icon-container"></div>
									<a href="">link</a>
								</div>
								<div className="fb-container">
									<div className="icon-container"></div>
									<a href="">link</a>
								</div>
								<div className="zalo-container">
									<div className="icon-container"></div>
									<a href="">link</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
