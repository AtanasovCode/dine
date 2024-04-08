import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="
            bg-cod-gray text-white flex flex-col items-center justify-center px-6 py-12
        ">
            <div className="flex items-center justify-center mb-12">
                <img 
                    src={logo}
                    alt="dine logo"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div>Marthwaite, Sedbergh</div>
                    <div>Cumbria</div>
                    <div>+00 44 123 4567</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div>OPEN TIMES</div>
                    <div>MON - FRI: 09:00 AM - 10:00 PM</div>
                    <div>SAT - SUN: 09:00 AM - 11:30 PM</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;