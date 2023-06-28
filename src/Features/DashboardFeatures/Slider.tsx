import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card } from "../../components/UI/Card/Card";
import { SlideContent } from "./SlideContent";
import womenFootball from "../../asset/image/women-football.jpg";
import stadium from "../../asset/image/stadium.jpg";
import { Button } from "../../components/UI/Button/Button";

export const Slider = () => {
	return (
		<Card className="h-[18.4rem]">
			<Splide
				options={{
					rewind: true,
					autoplay: false,
					arrows: false,
					speed: 10,
				}}
				className="h-full">
				<SplideSlide>
					<SlideContent
						props={{
							src: stadium,
							alt: "Football Stadium",
							btnText: "take part",
							heading: "go bet",
							message: "more than just a bet",
						}}
					/>
				</SplideSlide>
				<SplideSlide>
					<SlideContent
						props={{
							src: womenFootball,
							alt: "Women playing football",
							btnText: "Play Now",
							heading: "women football",
							message: "Bet on women's club and empower the game!",
						}}
					/>
				</SplideSlide>
			</Splide>
		</Card>
	);
};
