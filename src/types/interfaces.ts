import { StaticImageData } from "next/image";

export interface IBgSource {
    desktop:StaticImageData | string,
    tablet: StaticImageData | string,
    mobile: StaticImageData | string
}
export interface IRoute {
    path: string,
    name: string,
    bgSource: IBgSource,
}