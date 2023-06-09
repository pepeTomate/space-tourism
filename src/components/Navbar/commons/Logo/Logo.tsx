import React from 'react';
import Image from 'next/image';
import LogoSVG from "/public/Logo.svg"
import { Box } from '@mui/material';
export interface Iprops {
	variant?: "dark" | "light";
	imgWidth?: string;
}

const Logo : React.FC<Iprops> = ({variant="dark", imgWidth }) => {
	return (
		<Box width="fit-content">
			<Box width={imgWidth || "90px"} display="flex" alignItems="center">
				<Image src={LogoSVG} alt="Logo"/>
			</Box>
		</Box>
	);
};

export default Logo;
