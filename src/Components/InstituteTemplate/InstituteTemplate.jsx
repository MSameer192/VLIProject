import React from "react";

const InstituteTemplate = ({ Element, m_top, bg, m_bottom }) => {
  if (!m_top) m_top = "mt-20 ";
  if (!bg) bg = "bg-white";

  return (
    <div
      className={`flex ${bg} relative ml-0 flex-col ${m_top} ${m_bottom}  w-full sm:ml-24 sm:w-[calc(100%-96px)]`}
      style={{ maxHeight: "300px" }}
    >
      <Element />
    </div>
  );
};

export default InstituteTemplate;
