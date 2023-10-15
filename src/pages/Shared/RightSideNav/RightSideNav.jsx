import {AiOutlineGoogle, AiOutlineGithub} from 'react-icons/ai';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import Qzone1 from '../../../assets/qZone1.png';
import Qzone2 from '../../../assets/qZone2.png';
import Qzone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='space-y-3'>
                <h2 className="text-2xl font-semibold">Login with</h2>
                <button className="btn btn-outline btn-info normal-case p-4 w-full">
                    <AiOutlineGoogle></AiOutlineGoogle> Login with Google
                </button>
                <button className="btn btn-outline normal-case p-4 w-full">
                    <AiOutlineGithub></AiOutlineGithub> Login with Github
                </button>
            </div>
            <div className=' mt-10'>
                <h2 className="text-2xl font-semibold">Find Us On</h2>
                <a className='flex items-center border p-3  rounded-t-lg' href="">
                    <FaFacebookF className='mr-2'></FaFacebookF>
                    <span className='text-lg'>Facebook</span>
                </a>
                <a className='flex items-center border-x p-3 ' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                    <span className='text-lg'>Twiter</span>
                </a>
                <a className='flex items-center border p-3 rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span className='text-lg'>Instragram</span>
                </a>
            </div>
            {/* Q Zone */}
            <div className='bg-slate-100 mx-auto'>
                <h2 className='my-5 pt-5 text-2xl font-semibold pl-3'>Q-Zone</h2>
                <img className='mx-auto' src={Qzone1} alt="" />
                <img className='mx-auto' src={Qzone2} alt="" />
                <img className='mx-auto' src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;