import Particles from "@tsparticles/react";

import WidgetsGroup from "../../components/widgets-group/widgets-group";
import { CONFETTI_SCHOOLCARD } from "../../shared/particles/constants/option";
import useParticles from "../../shared/particles/hook/useParticles";
import Cover from "./cover";
import "./school-card.css";

export default function SchoolCard() {

    const [
        particlesEngineInit,
        particlesLoaded,
        options] = useParticles(CONFETTI_SCHOOLCARD)

    if (particlesEngineInit) {
        return <>
            <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            <Cover />
            <div className="relative">
                <div className="absolute items-center top-[45rem] w-full app-fade-in-from-none-animate ">
                    <p className="text-xs font-bold justify-center text-center">
                        - Kolej Melayu Kuala Kangsar -
                    </p>
                </div>
                <div className="absolute items-center top-[50rem] w-full app-fade-in-from-none-animate ">
                    <p className="text-xs font-bold justify-center text-center">
                        - End of card -
                    </p>
                </div>
            </div>

            <WidgetsGroup />
        </>
    }

    return <>Loading</>

}