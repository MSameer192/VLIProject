

const Colors = {
    Driving: {
        Color: "#A1A3EF",
        LightColor: "#8d90d380"
    },
    Online: {
        Color: "#7F82F9",
        LightColor: "#696bd080"
    },
    InClass: {
        Color: "#5456C7",
        LightColor: "#4446a480"
    },
}


export const eventRenderer = (event) => {
    let Color, LightColor;
    if (event.ClassType === "Driving") {
        Color = Colors.Driving.Color;
        LightColor = Colors.Driving.LightColor;
    }
    else if (event.ClassType === "Online") {
        Color = Colors.Online.Color;
        LightColor = Colors.Online.LightColor;
    }
    else if (event.ClassType === "InClass") {
        Color = Colors.InClass.Color;
        LightColor = Colors.InClass.LightColor;
    }
    else {
        Color = "red";
        LightColor = "blue";
    }


    return (
        <div className={`flex flex-col justify-between w-full h-full bg-[${Color}] py-3 px-4`}>
            <div className={`bg-[${Color}] text-white font-normal`} >
                {event.start.toLocaleTimeString("en-US", { timeStyle: "short" })}
            </div>

            <div className={`bg-[${LightColor}]  text-white`}>{event.title}</div>
            <div className={`text-white bg-[${Color}]`}>
                {event.end.toLocaleTimeString("en-US", { timeStyle: "short" })}
            </div>
        </div>
    );
}