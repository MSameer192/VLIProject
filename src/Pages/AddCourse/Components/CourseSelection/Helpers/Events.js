export const PackageOnChange = (e, INDEX, ClassType, ClassName, Packages, setPackages, CourseErrs, setCourseErrs) => {
    let NewPackage = [...Packages];

    const Value = Number(e.target.value)

    if (e.target.value === "") {
        NewPackage[INDEX][ClassType] = e.target.value;
        setPackages(NewPackage);
    }
    else if (!isNaN(e.target.value)) {

        if (Value > 0 && ClassName !== "Discout Type") {
            const MappedErrs = CourseErrs.filter(value =>
                !value?.[ClassType] || value.INDEX !== INDEX);

            NewPackage[INDEX][ClassType] = e.target.value;
            setCourseErrs(MappedErrs)
            setPackages(NewPackage);

        } else if (Value >= 0 && ClassName === "Discout Type") {
            NewPackage[INDEX][ClassType] = e.target.value;
            setPackages(NewPackage);
            const MappedErrs = CourseErrs.filter(value =>
                !value?.[ClassType] || value.INDEX !== INDEX);
            setCourseErrs(MappedErrs)

        }
        else {
            let New
            const MappedErrs = CourseErrs.map(value => {
                if (value?.[ClassType] && value.INDEX === INDEX)
                    New = true
                return value
            })
            if (New)
                setCourseErrs(MappedErrs)
            else
                setCourseErrs(
                    [...CourseErrs,
                    {
                        [ClassType]: `${ClassName} in package ${1 + INDEX} must be greater than 0`,
                        INDEX
                    }]
                )
        }
    }
}