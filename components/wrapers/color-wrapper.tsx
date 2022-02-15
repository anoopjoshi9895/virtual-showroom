import { useRouter } from "next/router";
import { useState } from "react";
import { ColorVariantDetails } from "../../api-service/api-models";
import ColorSlider from "../detail/color-slider";
import Footer from "../footer/footer";
import CommonHeader from "../header/common-header";
import DropdownListItems from "../header/dropdown-list-items";

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

  return (
    <>
      <CommonHeader
        showDropdownByDefault={true}
        extraButtons={[{ title: "Back to colors", link: "/" }]}>
        <DropdownListItems
          header="Select Color"
          onSelect={(data: any, index: any) => {
            setCurrentSlide(index);
            setSelectedColor(data);
          }}
          options={colors ?? []}
        ></DropdownListItems>
      </CommonHeader>
      {colors?.length > 0 && (
        <>
          <ColorSlider
            gotoSlide={currentSlide}
            fadeOut={fadeOut}
            onItemClick={(item: any) => {
              router.push(
                "/360/id/" +
                data.productID +
                "/variantID/" +
                item.variantID
              );
            }}
            initialSlide={currentSlide}
            data={data}
            onChangeSlide={onChangeSlide}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default ColorWraper;
