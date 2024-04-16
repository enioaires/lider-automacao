import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../components/map"), { ssr: false });

export default function Home() {
  return (
    <div className="w-[656px]">
      <Map center={[-19.617778, -44.042778]} />
    </div>
  );
}
