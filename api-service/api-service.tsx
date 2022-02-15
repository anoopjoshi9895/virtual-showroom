import { ColorVariantDetails, ConfigDetails, ICarSeries } from "./api-models";
import { get } from "./http";

const { API_END_POINT } = process.env;
const apiEndpoint = API_END_POINT;

export async function getAllSeries(): Promise<ICarSeries[]> {
  const url = `${apiEndpoint}/virtualshowroom/`;
  try {
    const response: any = await get(url);
    return (response?.data?.data as any) ?? [];
  } catch (error: any) {
    return error.data;
  }

  // return [
  //   {
  //     name: "BMW 1 series",
  //     seriesName: "1",
  //     modelCode: "bmw-1",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 2 series",
  //     seriesName: "2",
  //     modelCode: "bmw-2",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 3 series",
  //     seriesName: "3",
  //     modelCode: "bmw-3",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 4 series",
  //     seriesName: "4",
  //     modelCode: "bmw-4",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 5 series",
  //     seriesName: "5",
  //     modelCode: "bmw-5",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 6 series",
  //     seriesName: "6",
  //     modelCode: "bmw-6",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  //   {
  //     name: "BMW 7 series",
  //     seriesName: "7",
  //     modelCode: "bmw-7",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car3.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/car5.png",
  //   },
  // ];

  // return [
  //   {
  //     name: "BMW 5 Series Coupe",
  //     seriesName: "5 Series",
  //     seriesKey: "5-series",
  //     modelCode: "Sedan",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 3 Series Sedan",
  //     seriesName: "3 Series",
  //     seriesKey: "3-series",
  //     modelCode: "Sedan",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 4 Series Coupe",
  //     seriesName: "4 Series",
  //     seriesKey: "4-series",
  //     modelCode: "Coupe",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 4 Series Gran Coupe",
  //     seriesName: "4 Series",
  //     seriesKey: "4-series",
  //     modelCode: "Gran Coupe",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 5 Series Sedan",
  //     seriesName: "5 Series",
  //     seriesKey: "5-series",
  //     modelCode: "Sedan",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 6 Series Gran Tourismo",
  //     seriesName: "6 Series",
  //     seriesKey: "6-series",
  //     modelCode: "Gran Tourismo",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 7 Series Sedan",
  //     seriesName: "7 Series",
  //     seriesKey: "7-series",
  //     modelCode: "Sedan",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW 8 Series Coupe",
  //     seriesName: "8 Series",
  //     seriesKey: "8-series",
  //     modelCode: "Coupe",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW M2 Coupe",
  //     seriesName: "M2",
  //     seriesKey: "m2",
  //     modelCode: "Coupe",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW M4 Coupe",
  //     seriesName: "M4",
  //     seriesKey: "m4",
  //     modelCode: "Coupe",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW M4 Convertible",
  //     seriesName: "M4",
  //     seriesKey: "m4",
  //     modelCode: "Convertible",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW X6M SUV",
  //     seriesName: "X6M",
  //     seriesKey: "x6m",
  //     modelCode: "SUV",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW X2 SUV",
  //     seriesName: "X2",
  //     seriesKey: "x2",
  //     modelCode: "SUV",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW X3 SUV",
  //     seriesName: "X3",
  //     seriesKey: "x3",
  //     modelCode: "SUV",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   },
  //   {
  //     name: "BMW X5 SUV",
  //     seriesName: "X5",
  //     seriesKey: "x5",
  //     modelCode: "SUV",
  //     leftFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //     rightFacingImage:
  //       "https://sreena.oorjit.net/virtual-showroom/images/bmw3%20series/BMWM340ixDrive-21/car-1.png",
  //   }
  // ];
}

export async function getDetailsBySeries(
  series?: string,
  model?: string
): Promise<ICarSeries[]> {
  const url =
    `${apiEndpoint}/virtualshowroom/getproductsbybodytype/series/` +
    series +
    "/modelCode/" +
    model;
  try {
    const response: any = await get(url);
    return (response?.data?.data as any) ?? [];
  } catch (error: any) {
    return error.data;
  }
}

export async function getColorVariants(
  id?: string
): Promise<ColorVariantDetails> {
  const url = `${apiEndpoint}/virtualshowroom/getColorVariants/id/` + id;
  try {
    const response: any = await get(url);
    return (response?.data?.data as any) ?? [];
  } catch (error: any) {
    return error.data;
  }
}

export async function getConfigDetailsByColorCode(
  productID?: string,
  variantID?: string
): Promise<ConfigDetails> {
  const url = `${apiEndpoint}/virtualshowroom/getConfigurationDetails/id/${productID}/variantID/${variantID}/`;
  try {
    const response: any = await get(url);
    return (response?.data?.data as any) ?? [];
  } catch (error: any) {
    return error.data;
  }
}
