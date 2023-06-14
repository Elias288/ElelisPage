import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

interface Props {
    children: React.ReactNode
}

const Loading: React.FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [isLoading])

    return (
        <>
            {
                isLoading ? (
                    <div className="spinner w-full flex justify-center pt-[200px]" >
                        <BeatLoader />
                    </div>
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        </>
    );
}

export default Loading;