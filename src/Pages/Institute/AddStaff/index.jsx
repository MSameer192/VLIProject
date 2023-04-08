import React from "react";
import InstituteTemplate from "../../../Components/InstituteTemplate/InstituteTemplate";
import ImagePreviewer from "../../../Components/ImagePreviewer/ImagePreviewer";
import { SelectList } from "../../../Components/InputComps/InputComps";
import InputField from "../../../Components/InputField";
import InputWitnIcon from "../../../Components/InputWithIcon";
import { BaseUrl } from "../../../Actions/Base";
import axios from "axios";
import { GenderOptions } from "./OptionsArr/OptionsArr";

const Staff = () => {
  const [inputValues, setInputvalues] = React.useState({
    fName: "",
    lName: "",
    address: "",
    postalCode: "",
    province: "",
    city: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gaurdianPhoneNumber: "",
    role: "",
    gender: "",
  });
  const [imgPath, setImagePath] = React.useState("");
  const [chooseGender, setChooseGender] = React.useState("");

  //for choosing image
  const OnChange = (e) => {
    setImagePath(e.target.files[0]);
  };

  //for input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputvalues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("FirstName", inputValues.fName);
    formData.append("LastName", inputValues.lName);
    formData.append("Email", inputValues.email);
    formData.append("Address", inputValues.address);
    formData.append("PostalCode", inputValues.postalCode);
    formData.append("Province", inputValues.province);
    formData.append("City", inputValues.city);
    formData.append("DOB", inputValues.dob);
    formData.append("EmergencyPhoneNumber", inputValues.gaurdianPhoneNumber);
    formData.append("PhoneNumber", inputValues.phoneNumber);
    formData.append("ProfileImage", imgPath);
    formData.append("Gender", chooseGender);
    formData.append("Role", inputValues.role);

    axios
      .post(`${BaseUrl}/api/staff/add`, formData)
      .then((res) => console.log(res))
      .catch((error) => console.log({ error }));
  };

  console.log({ chooseGender });
  return (
    <div className="mt-16 w-11/12 rounded-[35px] bg-white">
      <div className="flex w-full flex-col items-center justify-center pt-5">
        <img src={require("./Assets/Male.svg").default} alt="sales" />
        <p className="font-['segoe ui'] mt-2 text-[22px] font-normal text-[#A1A3EF]">
          Staff Member Details
        </p>
      </div>

      <div className="mb-2 flex w-full flex-col flex-wrap justify-between gap-10 gap-y-6 p-16  sm:w-full md:w-[95%] md:flex-row lg:w-[100%]">
        <div className="flex gap-16">
          <div>
            <p className="font-['segoe ui'] text-[22px] font-normal text-[#404040]">
              Staff Profile
            </p>
          </div>
          <div>
            <ImagePreviewer
              Id="ProfileImage"
              OnChange={(e) => OnChange(e, "ProfileImage")}
              ImgUrl={imgPath}
            />
          </div>
        </div>
        <InputField
          Label="First name"
          Placeholder="John"
          Id="fName"
          name="fName"
          value={inputValues.fName}
          onChange={handleInputChange}
        />

        <InputField
          Label="Last name"
          Placeholder="Smith"
          Id="lName"
          name="lName"
          value={inputValues.lName}
          onChange={handleInputChange}
        />

        <InputWitnIcon
          Label="Address"
          Placeholder="123-456-789"
          Id="address"
          name="address"
          value={inputValues.address}
          onChange={handleInputChange}
          Src={require("./Assets/Location.svg").default}
        />

        <InputField
          Label="Postal Code"
          Placeholder="0546"
          Id="postalCode"
          name="postalCode"
          value={inputValues.postalCode}
          onChange={handleInputChange}
        />

        <InputField
          Label="Province"
          Placeholder="Ontario"
          Id="province"
          name="province"
          value={inputValues.province}
          onChange={handleInputChange}
        />

        <InputWitnIcon
          Label="City"
          Placeholder="Toronto"
          Id="city"
          name="city"
          value={inputValues.city}
          onChange={handleInputChange}
          Src={require("./Assets/City.svg").default}
        />

        <InputWitnIcon
          Label="Date of Birth (DD/MM/YYYY)"
          Placeholder="(DD/MM/YYYY)"
          Id="dob"
          name="dob"
          value={inputValues.dob}
          onChange={handleInputChange}
          Src={require("./Assets/Birthday.svg").default}
        />
        <InputField
          Label="Email"
          Placeholder="abc@gmail.com"
          Id="email"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
        />

        <InputField
          Label="Phone Number"
          Placeholder="123-456-789"
          Id="phoneNumber"
          name="phoneNumber"
          value={inputValues.phoneNumber}
          onChange={handleInputChange}
        />

        <InputField
          Label="Guardian Phone Number"
          Placeholder="123-456-789"
          Id="GuardianPhoneNumber"
          name="gaurdianPhoneNumber"
          value={inputValues.gaurdianPhoneNumber}
          onChange={handleInputChange}
          // Err={Err?.GuardianPhoneNumber}
          // State={InstructorData.GuardianPhoneNumber}
          // onChange={(e) => OnChange(e, "GuardianPhoneNumber")}
        />

        <SelectList
          Label="Gender"
          Id="Gender"
          defaultValue="Male"
          Text="Gender"
          Placeholder="Gender"
          // Err={Err?.Gender}
          OptionsArr={GenderOptions}
          State={chooseGender}
          onChange={(e) => setChooseGender(e.target.value)}
        />
        <InputField
          Label="Role"
          Placeholder="Accounts"
          Id="Role"
          name="role"
          value={inputValues.role}
          onChange={handleInputChange}
        />
      </div>
      <div className="text-center">
        <button
          className=" Regularfont ContactBtn_DropShadow m-2 cursor-pointer rounded-[50px] border-none bg-[#A1A3EF] px-8 py-2  text-6xs text-white md:text-base"
          onClick={handleSubmit}
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

const AddStaff = () => (
  <InstituteTemplate
    Element={Staff}
    bg="bg-[#F7F7F7] min-h-screen items-center"
  />
);

export default AddStaff;
