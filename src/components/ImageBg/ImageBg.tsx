import { Box, SxProps, Theme } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface INextImage {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
  }

interface IProps {
  image: string | StaticImageData;
  unoptimized?: boolean;
  sx?: SxProps<Theme>;
  quality?: number;
}

const ImageBg = ({ image, unoptimized = false, sx, quality }: IProps) => {
  return (
    <Box
      sx={sx}
      component={Image}
      layout="fill"
      src={image}
      alt={""}
      quality={quality || 80}
      placeholder="blur"
      blurDataURL={typeof image === "string" ? image : image.src}
      unoptimized={unoptimized}
    />
  );
};

export default ImageBg;
