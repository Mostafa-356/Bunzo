import pharaoh_burger from "../assets/images/Signature.png";

export default function GreenCard({ animation }: { animation?: string }) {
  return (
    <div
      className="relative flex justify-center items-center p-8 h-full min-h-[400px] overflow-hidden bg-emerald-900 rounded-3xl"
      data-aos={animation}
    >
      <div className="absolute inset-0 opacity-20 bg-[url('/src/assets/images/community_bg.png')] bg-cover"></div>
      <div className="z-[2] flex flex-col justify-center items-center gap-6 text-center">
        <p className="max-w-40 text-2xl text-emerald-400 font-bold">
          Join the Bunzo Club
        </p>
        <p className="text-white text-sm opacity-90 px-4">
          Experience the authentic soul of Egyptian street food in every bite.
        </p>
        <figure className="my-4">
          <img src={pharaoh_burger} className="w-32 animate-pulse" />
        </figure>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
}
