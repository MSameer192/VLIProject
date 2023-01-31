import React from 'react'

const InstituteDocuments = () => {
    let DocumentData = [
        { Title: "Ministry of Transportation Registration Slip", Id: "TransportationSlip" },
        { Title: "Partner Logo", Id: "InstituteLogo" },
        { Title: "Local Registration Slip", Id: "LocalRegistrationSlip" },
        { Title: "Partner Banner", Id: "Banner" },
    ]

    return (
        <div className='w-1/2 px-16 flex py-8 flex-col gap-4'>
            {
                DocumentData.map((value,index) =>
                    <DocumentComp key={index} Title={value?.Title} Id={value.Id} />
                )
            }
           

        </div>
    )
}

function DocumentComp({ Title, Id }) {
    const PreviewImage = (e) => {
        const file = e.target.files[0]

        const Reader = new FileReader();
        Reader.onload = function () {
            const ImgElements = e.target.parentNode.getElementsByTagName("img")

            if (ImgElements.length > 0)
                ImgElements[0].remove()

            // forEach(element => element.remove());
            const Img = document.createElement('img');
            Img.classList.add("w-full", "h-full", "border-none", "outline-none", "border-[0px]")
            Img.src = Reader.result;
            e.target.parentNode.append(Img);
        }
        Reader.readAsDataURL(file)
    }

    return <div className='flex gap-5'>
        <h3 className='font-normal text-[30px] w-[400px]'>{Title}</h3>
        <div className='w-52 h-36 bg-[#F3F6F7] border-[#C8C8C8] border-[3px] border-dashed rounded-xl overflow-hidden flex justify-center items-center'>
            <input type="file" className='hidden' onChange={PreviewImage} id={Id} />
        </div>
        <label className='cursor-pointer bg-[#F3F6F7] h-fit w-fit text-3xs px-8 py-2 text-[#6E6E6E] rounded-lg shadow-[5px_6px_6px_#00000016]' htmlFor={Id}>
            Browse
        </label>
    </div>

}

export default InstituteDocuments