

const DescriptionComponent = ({
    mobile,
    mobilex2,
    tablet,
    tabletx2,
    desktop,
    desktopx2,
    titleOne,
    titleTwo,
    desc,
}) => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center w-all translate-y-[-10%]  mb-16
        sm:w-[65%] lg:translate-y-[-8%] sm:mb-32
        lg:w-full lg:px-16 lg:flex-row even:lg:flex-row-reverse lg:justify-between">
            <picture className="inline-block flex-1">
                {/*Mobile*/}
                <source
                    media="(max-width: 600px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/*Tablet*/}
                <source
                    media="(max-width: 1199px)"
                    srcSet={`${tablet} 1x, ${tabletx2} 2x`}
                />
                {/*Desktop*/}
                <img
                    srcSet={`${desktop} 1x, ${desktopx2} 2x`}
                    alt="image of the restaurant surrounded by trees and nature"
                    className="sm:w-[75vw]"
                />
            </picture>

            <div className="mt-16 w-full
            lg:flex-1 lg:mt-0 lg:mx-16">
                <div className="flex flex-col items-center justify-start font-bold text-3xl w-full
                sm:text-5xl">
                    <div> {titleOne} </div>
                    <div> {titleTwo} </div>
                </div>
                <div className="text-base mt-8 text-center sm:text-xl">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default DescriptionComponent;