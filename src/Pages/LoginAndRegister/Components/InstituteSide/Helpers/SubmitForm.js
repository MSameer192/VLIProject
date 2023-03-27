import { RegisterInstituteA } from "../../../../../Actions/UserA";
import { ValidateInstituteInfo } from "./FieldsValidations";

export const SubmitFormData = (e, Dispatch, InstituteData, setSuccess, setErr, Err) => {

    e.preventDefault();
    const KeyNamesArr = [
        { key: "FirstName", Name: "First Name" },
        { key: "LastName", Name: "Last Name", },
        { key: "Email", Name: "Email Address", },
        { key: "Country", Name: "Country", },
        { key: "State", Name: "State", },
        { key: "City", Name: "City", },
        { key: "PhoneNumber", Name: "Phone Number", },
        { key: "Password", Name: "Password", },
    ];
    let CheckErrs = ValidateInstituteInfo(InstituteData, setErr, Err, KeyNamesArr)
    if (CheckErrs)
        return

    let InstituteDataNoImage = {};

    let Images = ["MOTR_Slip", "InstituteLogo", "LR_Slip", "Institute_Banner"]
    
    const InstituteFormData = new FormData();

    for (let [key, value] of Object.entries(InstituteData)) {
        if (Images.indexOf(key) > -1) {
            InstituteFormData.append(key, value)
        }
        else
            InstituteDataNoImage = { ...InstituteDataNoImage, [key]: value }
    }
    InstituteFormData.append("InstituteData", JSON.stringify(InstituteDataNoImage))

    Dispatch(RegisterInstituteA(InstituteFormData, () => setSuccess(true)))

}