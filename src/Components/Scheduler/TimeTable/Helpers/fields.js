export const Fields = [
    {
        name: "ClassNo",
        type: "select",
        // Should provide options with type:"select"
        options: [{ id: 1, text: "1", value: 1 }, { id: 2, text: "2", value: 2 }],
        config: { label: "Class No.", required: true, errMsg: "Plz Select class no." }
    },
    {
        name: "ClassType",
        type: "select",
        // Should provide options with type:"select"
        options: [{ id: 1, text: "Driving", value: "Driving" }, { id: 2, text: "Online", value: "Online" }, { id: 3, text: "InClass", value: 'InClass' }],
        config: { label: "Class Type", required: true, errMsg: "Plz Select class type" }
    },
    {
        name: "Description",
        type: "input",
        default: " ",
        config: { label: "Details", multiline: true, rows: 3 }
    },

]