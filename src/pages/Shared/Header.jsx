import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-base my-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;