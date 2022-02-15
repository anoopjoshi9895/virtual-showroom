import { getAllSeries, getDetailsBySeries } from "../api-service/api-service";

export const getConfigStaticPaths = async () => {
  const carList = await getAllSeries();
  const seriesModelList = carList?.map((data) => {
    return {
      params: {
        series: data.seriesKey,
        model: data.modelCode,
      },
    };
  });

  const productPromises = seriesModelList?.map(async (data) => {
    const seriesList = await getDetailsBySeries(
      data?.params?.series?.toString(),
      data?.params?.model?.toString()
    );
    return seriesList;
  });
  let allProducts: any = [];
  await Promise.all(productPromises).then((results) => {
    results?.forEach((p) => {
      p?.forEach((q) => {
        if (q) {
          allProducts.push(q);
        }
      });
    });
  });

  let paths: any = [];
  allProducts?.forEach((data: any) => {
    const availableColors =
      data?.availableColors?.map((color: any) => {
        return {
          params: {
            product_id: data.productID,
            variant_id: color.variantID,
          },
        };
      }) ?? [];
    paths = paths.concat(availableColors);
  });
  return {
    paths: paths,
    fallback: false,
  };

};

