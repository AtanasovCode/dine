const HighlightComponent = ({
    desktopTablet,
    desktopTabletx2,
    mobile,
    mobilex2,
    title,
    desc,
    alt,
}) => {
    return (
        <div className="
            flex flex-col items-center justify-center w-full px-2 mb-12
            sm:flex-row sm:items-stretch md:mb-0 even:md:my-16
        ">
            <picture className="mb-6 sm:mb-0">
                {/*Mobile*/}
                <source 
                    media="(max-width: 601px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/*Tablet/Desktop*/}
                <img 
                    srcSet={`${desktopTablet} 1x, ${desktopTabletx2} 2x`}
                    alt={alt}
                />
            </picture>
            <div className="
                flex flex-col items-center justify-center
                sm:justify-start sm:items-start sm:ml-12
            ">
                <div className="text-xl font-bold mb-6 sm:mb-2">
                    {title}
                </div>
                <div className="
                    text-center mx-4 
                    xs:mx-16 sm:text-left sm:mx-0 sm:max-w-[90%]
                ">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default HighlightComponent;