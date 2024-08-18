import Card from "./card";

async function Coursepath() {

    const data = await fetch(`https://ny-server.vercel.app/choosepath`);
    const course = await data.json();
 


    return <div>
        <h4 className="  mt-32  text-4xl  font-semibold  text-center  z-50">
            Choose Your Path
        </h4>
        <div className=" flex items-center justify-between">

            {course.map((CardDetail) => (
                <Card
                    id={CardDetail._id}
                    key={CardDetail._id}
                    image={CardDetail.icon}
                    name={CardDetail.name}
                    shortD={CardDetail.shortDetails}
                    btn={CardDetail.buttonText}
                />
            ))}


        </div>
    </div>;
}

export default Coursepath;
