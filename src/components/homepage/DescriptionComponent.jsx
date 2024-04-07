

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
        <div className="flex-1 flex flex-col items-center justify-center w-all translate-y-[-10%] lg:translate-y-[-8%] mb-16">
            <picture className="inline-block">
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
                    srcSet={`${desktop} x1, ${desktopx2} 2x`}
                    alt="image of the restaurant surrounded by trees and nature"
                    className="sm:w-[75vw] lg:w-auto"
                />
            </picture>

            <div className="mt-12 w-full">
                <div className="flex flex-col items-center justify-start font-bold text-3xl w-full">
                    <div> {titleOne} </div>
                    <div> {titleTwo} </div>
                </div>
                <div className="text-xl mt-8 text-center">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default DescriptionComponent;