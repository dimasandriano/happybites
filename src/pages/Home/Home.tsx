import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import gunkan from "../../assets/webp/gunkan.webp";
import corn from "../../assets/webp/corn.webp";
import kimbab from "../../assets/webp/kimbab.webp";
import nigiri from "../../assets/webp/nigiri.webp";
import logo from "../../assets/logo.jpg";

export default function Home() {
	return (
		<div className="max-w-md mx-auto min-h-screen overflow-x-hidden">
			<img src={logo} alt="" className="w-[150px] mx-auto pt-5" />
			<div className="flex flex-col justify-center min-h-[70vh]">
				<Swiper
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards]}
					className="mySwiper">
					<SwiperSlide className="p-3 bg-[#a42017]">
						<img src={kimbab} alt="" />
					</SwiperSlide>
					<SwiperSlide className="p-3 bg-[#feaa12]">
						<img src={gunkan} alt="" />
					</SwiperSlide>
					<SwiperSlide className="p-3 bg-[#a42017]">
						<img src={nigiri} alt="" />
					</SwiperSlide>
					<SwiperSlide className="p-3 bg-[#feaa12]">
						<img src={corn} alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
			<p className="text-center text-sm">
				Crafted with ❤ by{" "}
				<a
					href="https://www.instagram.com/dimas.andriano.h/"
					target="_blank"
					className="underline">
					Dimas Andriano
				</a>
			</p>
		</div>
	);
}
