import UFU from "../../../assets/UFU.png"

export default function Main() {
  return (
    <div className="w-[100vw] flex items-center flex-col rounded-b-[35px] bg-[black] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-b-1 border-solid border-black">
      <div className="bg-[url('https://static.tildacdn.com/tild3430-3936-4237-b766-663164333536/IMG_6641.JPG')] rounded-b-[35px] opacity-50 h-[80vh] bg-black justify-center bg-no-repeat w-screen">
        <div className="w-[100vw] absolute flex flex-col justify-center items-center">
        </div>
      </div>
      <div className="absolute flex w-[100%] h-[80vh] justify-center items-center flex-col">
            <img className="rounded-b-[35px]"
              src={UFU}
              height="400px"
              width="400px"
              alt=""
            />
            <div className="text-white text-[35px] font-semibold">С нами будущее!</div>
          </div>
    </div>
  );
}
