export const PackagesDone = (e, CourseData, setErr, Err, setSteps) => {
    let CheckErrs = {}
    e.stopPropagation();

    if ((!Err?.Packages?.length || Err?.Packages?.length <= 0)

        && (!CourseData?.Packages || CourseData?.Packages?.length <= 0)) {
        CheckErrs = { ...CheckErrs, Packages: "At least one package is required" }
    }
    else if (typeof Err.Packages === "string" &&
        (!CourseData?.Packages?.length || CourseData?.Packages?.length < 0))
        CheckErrs = { ...CheckErrs, Packages: "At least one package is required" }


    else if (Err?.Packages?.length <= 0 ||
        (typeof Err.Packages === "string" && CourseData?.Packages?.length > 0))
        delete Err?.Packages



    if (!CourseData?.CourseCurriculum) {
        CheckErrs = { ...CheckErrs, CourseCurriculum: "Course Curriculum is required" }
    }
    else
        delete Err.CourseCurriculum;

    setErr({ ...Err, ...CheckErrs });

    if (Object.entries({ ...Err, ...CheckErrs }).length <= 0)
        setSteps(3);
    else {
        for (const [key, value] of Object.entries(CheckErrs)) {
            if (value) {
                const Element = document.getElementById(key);
                const Y = Element.getBoundingClientRect().top + window.scrollY - 200

                window.scroll({
                    top: Y,
                    behavior: 'smooth'
                });

                return
            }
        }
    }
}