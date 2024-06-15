import "./App.css";
import SchoolCard from "./cards/schools/school-card";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative w-[420px] shadow-custom min-h-screen">
          <SchoolCard />
        </div>
      </div>
    </>
  )

}