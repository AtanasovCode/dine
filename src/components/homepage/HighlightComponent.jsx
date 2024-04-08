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
            flex flex-col items-center justify-center w-full px-2 my-12
        ">
            <picture className="mb-6">
                {/*Mobile*/}
                <source 
                    media="(max-width: 600px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/*Tablet/Desktop*/}
                <img 
                    srcSet={`${desktopTablet} 1x, ${desktopTabletx2} 2x`}
                    alt={alt}
                />
            </picture>
            <div className="flex flex-col items-center justify-center">
                <div className="text-xl font-bold mb-6">
                    {title}
                </div>
                <div className="text-center">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default HighlightComponent;