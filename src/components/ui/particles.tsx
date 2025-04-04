import Canva from "./canva";

export default function Particles() {
  return (
    <>
      <Canva />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl border border-yellow-500/20 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl max-h-2xl border border-white/10 rounded-full"></div>
    </>
  );
}
