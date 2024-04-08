import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="
            bg-cod-gray text-white flex flex-col items-center justify-center px-6 py-12
            sm:flex-row sm:justify-start sm:px-12 sm:py-20 sm:items-stretch
            lg:px-20 lg:py-28
        ">
            <div className="flex items-center justify-center mb-12 sm:mb-0 sm:items-start">
                <img 
                    src={logo}
                    alt="dine logo"
                />
            </div>

            <div className="
                flex flex-col items-center justify-center tracking-widest text-center
                sm:items-start sm:ml-32 sm:text-left
                lg:flex-row
            ">
                <div className="mb-8 lg:mb-0 lg:mr-32">
                    <div>Marthwaite, Sedbergh</div>
                    <div>Cumbria</div>
                    <div>+00 44 123 4567</div>
                </div>
                <div className="">
                    <div>OPEN TIMES</div>
                    <div>MON - FRI: 09:00 AM - 10:00 PM</div>
                    <div>SAT - SUN: 09:00 AM - 11:30 PM</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;