import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ColorVariantDetails } from "../../api-service/api-models";
import { useOnLoadImages } from "../../hooks/use-onload-images";
import CommonSlider from "../detail/common-slider";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import DropdownListItems from "../header/dropdown-list-items";
import PercentageLoader from "../loader/percentage-loader";
import { getSliderData } from "../utils";

const ColorWraper = (props: { data: ColorVariantDetails }) => {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const onChangeSlide = (currentSlide: number) => {
    // setCurrentSlide(currentSlide);
    setSelectedColor(colors[currentSlide]);
  };
  const data = props?.data;
  const colors = props?.data?.availableColors ?? [];
  const initialSlide = colors?.length > 1 ? 1 : 0;
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [selectedColor, setSelectedColor] = useState(colors[currentSlide]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { status: imagesLoaded, percentage } = useOnLoadImages(wrapperRef);

  return (
    <>
      <CommonHeader showDropdownByDefault={true}>
        <DropdownListItems
          header="Select Color"
          onSelect={(data: any, index: any) => {
            if (currentSlide !== index) {
              setCurrentSlide(index);
              setSelectedColor(data);
            }
          }}
          options={
            colors?.map((p) => {
              return {
                name: p.variantName,
                thumbnail: p.thumbNail,
                payload: p,
                selected: selectedColor.variantID == p.variantID,
              };
            }) ?? []
          }
        ></DropdownListItems>
      </CommonHeader>
      {colors?.length > 0 && (
        <div className="h-100" ref={wrapperRef}>
          <CommonSlider
            gotoSlide={currentSlide}
            onItemClick={(item: any) => {
              router.push(
                "/360/id/" + data.productID + "/variantID/" + item.id
              );
            }}
            initialSlide={currentSlide}
            vehicles={getSliderData(colors)}
            onChangeSlide={onChangeSlide}
          />
          {/* <Footer /> */}
        </div>
      )}
      {!imagesLoaded && (
        <PercentageLoader
          width={90}
          paddingBottm={"12px"}
          paddingRight={"2px"}
          percentage={percentage + 30}
        ></PercentageLoader>
      )}
    </>
  );
};

export default ColorWraper;
