import { ReactNode } from "react";
import { Button } from "../../components/UI/Button/Button";
import { useLogin } from "../../hooks/useLogin";

type PropType<T> = {
	props: {
		src: T;
		alt: T;
		heading: T;
		message: T;
		btnText: T;
	};
};

export const SlideContent = ({ props }: PropType<string>) => {
	const { src, alt, btnText, heading, message } = props;
	const { signIn } = useLogin();
	return (
		<div>
			<div className="h-[18.4rem] w-full relative">
				<img
					src={src}
					alt={alt}
					className=" h-full w-full object-cover rounded"
				/>

				<div className="bg-gradient-to-r from-black  absolute top-0 z-30 w-1/2  h-full">
					<div className="p-4">
						<h1 className="uppercase text-3xl font-bold">{heading}</h1>
						<div
							className="py-6 px-2 mt-5 bg-[rgba(13,27,42,0.6)] relative capitalize 
							before:border-l-2
							before:border-t-2
							before:top-0
							before:left-0
							before:h-10
							before:w-10
							before:absolute
							before:border-[#3F84E5]
							after:border-r-2
							after:border-b-2
							after:bottom-0
							after:right-0
							after:h-10
							after:w-10
							after:border-[#3F84E5]
							after:absolute">
							{message}
						</div>
						<div className="mt-5 ">
							<Button className="w-1/2  text-sm ">{btnText}</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
