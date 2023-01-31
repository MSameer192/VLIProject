export const GetColor = (IconName, PageName) => {
    let Check;
    IconName?.forEach((Name) => {
        if (PageName === Name)
            Check = true;
    })
    return Check
}