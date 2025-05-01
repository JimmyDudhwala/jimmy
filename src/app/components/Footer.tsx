import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-h-[50vh] overflow-hidden bg-[#F8FFE5] w-full flex justify-center items-center'>
    <div className="min-h-[40vh] rounded-t-2xl max-h-[50vh] w-full flex flex-col bg-[#34E89E] relative text-[#0F3443]">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row justify-between items-center flex-[0.6] w-full px-6 py-8">
        <div className="space-y-2 text-center xl:text-left">
          <div className="text-4xl font-bold text-[var(--bg)]">Jimmy Dudhwala</div>
          <div className="text-lg font-light text-[var(--bg)]">Software Developer</div>
          <div className="text-2xl font-light text-[var(--bg)] flex justify-center xl:justify-start space-x-6 mt-2">
            <a href="https://github.com/JimmyDudhwala" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jimmy-dudhwala-3b33a5239/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/JimmyDudhwala" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="mt-6 xl:mt-0 text-center xl:text-right space-y-1 text-[var(--bg)]">
          <div>
            Email: <a href="mailto:jimmyfreelance@gmail.com" className="underline">jimmyfreelance@gmail.com@gmail.com</a>
          </div>
          <div>
            Phone: <a href="tel:+919925864886" className="underline">+91 99258 64886</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative flex-[0.4]  bg-[#34E89E] min-h-[25vh] w-full overflow-hidden text-[var(--bg)]">
        <div className="absolute top-8 left-0 w-screen flex justify-center items-center lg:text-[180px]  text-[40px] font-bold text-[#0F3443]/80 opacity-20 whitespace-nowrap xl:block">
         <span> Developer Designer</span>
        </div>
        <div className="flex justify-center items-start h-full w-full">
          <p className="text-center">&copy; 2023 Jimmy Dudhwala || All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
