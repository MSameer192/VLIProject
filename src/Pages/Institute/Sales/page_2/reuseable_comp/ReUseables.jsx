import graphIcon from "./images/graph_icon.svg";

export const GraphHeader = ({ title }) => {
  return (
    <div className="flex justify-between  px-[50px] py-[33px]">
      <p className="font-[500]">{title}</p>
      <i className="fa-solid fa-ellipsis-vertical"></i>
    </div>
  );
};

export const GraphHeader2 = ({ title, alt }) => {
  return (
    <div className="flex justify-between  px-[50px] py-[23px]">
      <p className="text-[22px]">{title}</p>
      <img className="w-[40px] h-[36px]" src={graphIcon} alt={alt} />
    </div>
  );
};
