// @flow strict

import { collaboratorsData } from "@/utils/data/collaborators";
import { collaboratorsImage } from "@/utils/skill-image";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Heading from "../heading";

export default function Collaborators() {
    return (
        <>
            <Heading value={"Collaborators"} />






            <div className="w-full overflow-hidden my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {collaboratorsData.map((collaborator, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">

                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div >
                                        <Image
                                            src={collaboratorsImage(collaborator)}
                                            alt={collaborator}
                                            width={500}
                                            height={500}

                                        />
                                    </div>
                                    <p className="text-black font-poppins text-sm sm:text-lg">
                                        {collaborator}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </>

    );
};

