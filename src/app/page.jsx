import Coursepath from "./components/coursepath";

const CustomComponent = async () => {
  const data = await fetch(`https://ny-server.vercel.app/hero`);
  const result = await data.json();
  const response = result[0];

  return (
    <div>
      <div className="   mx-auto mt-10 flex items-center justify-between">
        <div className=" space-y-5">
          <h1 className=" text-3xl">{response.heading}</h1>
          <h1 className=" max-w-[700px] text-xl">{response.dic}</h1>
        </div>
        <div>
          <img className=" size-[600px]" src={response.image} />
        </div>

      </div>
      <Coursepath />
    </div>
  );
};
export default CustomComponent;