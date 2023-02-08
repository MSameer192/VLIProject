export const FindValue = (BtnsNames) => {
    const UrlArr = window.location.href?.toString().split('/')

    if (UrlArr[UrlArr.length - 1] === "")
        return '/'
    else if (UrlArr[UrlArr.length - 1] === "AddCourse")
        return "AddCourse"
    else
        return BtnsNames.find((BtnsNames) => UrlArr?.indexOf(BtnsNames) > -1)
}

export const CheckHomePage = (BtnsNames) => {
    const Home = FindValue(BtnsNames)
    if (Home === "AddCourse" || Home === "/")
        return true

    else
        return false
}