import SchoolBackground from "../../assets/images/cards/school/school-bg.jpg"

export default function Cover() {
    return <>
        <div 
        className="relative  min-h-screen"
        style={{
            background: `url(${SchoolBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -1000
          }}
        >
            <div className="absolute items-center top-36 w-full app-fade-in-from-none-animate ">
                <h1 className="playwrite-fr-moderne-bold justify-center flex text-center">
                    MAJLIS GRADUASI
                </h1>
            </div>
            <div className="absolute items-center top-48 app-fade-in-from-none-animate ">
                <h1 className="text-3xl font-bold justify-center flex text-center">
                    SPM & APRESIASI KOKURIKULUM 2024
                </h1>
            </div>
            <div className="absolute items-center top-[18rem] w-full app-fade-in-from-none-animate ">
                <h1 className="flex font-bold justify-center text-center">
                    Jumaat, 19 DISEMBER 2024
                </h1>
            </div>
            <div className="absolute items-center top-[22rem] w-full app-fade-in-from-none-animate ">
                <h1 className="font-bold justify-center text-center">
                    DEWAN HANG TUAH
                </h1>
            </div>
            <div className="absolute items-center top-[24rem] w-full app-fade-in-from-none-animate ">
                <p className="text-xs font-bold justify-center text-center">
                    - Kolej Melayu Kuala Kangsar -
                </p>
            </div>
        </div>
    </>
}