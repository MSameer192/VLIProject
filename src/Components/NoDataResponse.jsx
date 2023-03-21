import NoDataResponseImage from "../Assests/no-data-img.png";

const NoDataResponse = ({ topText, bottomText }) => {
  return (
    <div className="text-center my-20">
      <img
        className="w-[250px] md:w-[350px] 2xl:w-[500px]"
        src={NoDataResponseImage}
        alt="data not found"
      />
      <p className="text-[20px] md:text-[22px] 2xl:text-[24px] mt-3 text-[#8e79e6] font-medium">
        {topText}
      </p>
      <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-gray-200">
        {bottomText}
      </p>
    </div>
  );
};

export default NoDataResponse;
