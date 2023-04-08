import { useEffect, useState } from "react";
import { SetImagePreview } from "../../Helpers/ImagePreview/ImagePreview";

function ImagePreviewer({
  Id,
  PreviewStyle,
  BrowseBtnStyle,
  ContainerStyle,
  OnChange,
  ImgUrl,
}) {
  const [Image, setImage] = useState();

  const PreviewImage = (e) => {
    const file = e.target.files[0];
    console.log({ file });

    if (OnChange) OnChange(e);
    SetImagePreview(setImage, file);
  };

  if (!PreviewStyle) PreviewStyle = "w-52 h-36 ";
  if (!BrowseBtnStyle) BrowseBtnStyle = "text-3xs bg-[#F3F6F7]";
  if (!ContainerStyle) ContainerStyle = "flex gap-5 w-1/2";
  useEffect(() => {
    if (ImgUrl) {
      if (typeof ImgUrl === "string" && ImgUrl?.length > 1) setImage(ImgUrl);
      else SetImagePreview(setImage, ImgUrl);
    }
  }, [ImgUrl, Image]);

  return (
    <div className={ContainerStyle}>
      <div
        className={`flex items-center  justify-center overflow-hidden rounded-xl border-[3px] border-dashed border-[#C8C8C8] bg-[#F3F6F7] ${PreviewStyle}   max-h-[162px] min-w-[130px]`}
      >
        {Image && (
          <img
            className="w-full border-[0px] border-none outline-none"
            src={Image}
            alt="instructor"
          />
        )}
        <input type="file" className="hidden" onChange={PreviewImage} id={Id} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <label
          className={`h-fit  w-fit cursor-pointer  rounded-lg px-8 py-2 text-[#6E6E6E] shadow-[5px_6px_6px_#00000016] ${BrowseBtnStyle}`}
          htmlFor={Id}
        >
          Browse
        </label>

        <p className="text-[13px]">Jpeg, PNG or Giff</p>
      </div>
    </div>
  );
}
export default ImagePreviewer;
