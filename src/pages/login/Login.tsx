import { JSX, useState } from "react";
import LoginComponent from "../../components/login/LoginComponent";
import SignUpComponent from "../../components/sign-up/SignUp";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { LogoSvg } from "../../assets/logo/logoSvg";


export interface LoginFormData {
  email: string;
  password: string;
}

export interface ErrorState {
  type: 'email' | 'password' | 'network' | 'server' | 'success' | 'name';
  message: string;
}

function Login(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [error, setError] = useState<ErrorState | null>(null);

  const variants = {
    initial: {
      width: '1080px',
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      x: isLogin ? 0 : 580
    },
    animate: {
      x: isLogin ? [0, 0, 580] : [580, 0, 0],
      width: isLogin ? ['500px', '1080px', '500px'] : ['500px', '1079px', '500px'],
      borderTopLeftRadius: isLogin ? '100px' : '0px',
      borderBottomLeftRadius: isLogin ? '100px' : '0px',
      borderTopRightRadius: isLogin ? '0px' : '100px',
      borderBottomRightRadius: isLogin ? '0px' : '100px'
    }
  }

  const loginSpanVariants: Variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, x: 500, transition: { duration: 1, ease: "easeInOut" } },
  }

  const signUpSpanVariants: Variants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, x: -500, transition: { duration: 1, ease: "easeInOut" } },
  }

  return (
    // bg-[linear-gradient(to_right_bottom,rgba(97,0,194,0.8),rgba(25,24,23,0.8)),url('/images/icon-bg.jpg')]
    <div className="flex items-center justify-center w-full text-white
    bg-[linear-gradient(to_right_bottom,rgba(97,0,194,0.8),rgba(25,24,23,0.8)),url('/images/background.jpg')]
    bg-cover h-screen">
      <div className="container  max-w-[1080px] p-10 h-[500px] w-full flex justify-around relative border-white border-2 border-r-2  ">
        <motion.div
          className="h-full bg-[#969696]/20 bg-opacity-50 absolute top-0 left-0 flex items-center justify-center z-10"
          variants={variants}
          transition={{ duration: 1.5, ease: "easeInOut", delayChildren: 0.5 }}
          initial={false}
          animate={'animate'}
        >
          <AnimatePresence mode="wait">
            {isLogin ?
              <div className="flex flex-col gap-2 items-center gap-y-4" key={'login'}>
                <div className="flex items-center gap-2">
                  <p className="text-white text-3xl font-bold">Watch  </p>
                  <LogoSvg />
                </div>
                <motion.span variants={loginSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} className="text-white text-4xl font-bold">Hello , Welcome Back</motion.span>
                <motion.span variants={loginSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} className="text-white text-md font-bold">Don't have an account?</motion.span>
                <motion.button variants={loginSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} onClick={() => setIsLogin(!isLogin)} className="cursor-pointer hover:scale-95 text-black bg-white rounded-md px-4 py-1 text-md font-bold w-fit active:scale-105 transition-all duration-300">Register!</motion.button>
              </div>
              :
              <div key={'signUp'}>
                {!isLogin && <div className="flex flex-col items-center gap-y-4" key={'login'}>
                  <div className="flex items-center gap-2">
                    <p className="text-white text-3xl font-bold">Watch  </p>
                    <LogoSvg />
                  </div>
                  <motion.span variants={signUpSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} className="text-white text-4xl font-bold">Hello , Welcome Back</motion.span>
                  <motion.span variants={signUpSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} className="text-white text-md font-bold">Don't have an account?</motion.span>
                  <motion.button variants={signUpSpanVariants} exit={'exit'} initial={'initial'} animate={'animate'} onClick={() => setIsLogin(!isLogin)} className="cursor-pointer hover:scale-95 text-black bg-white rounded-md px-4 py-1 text-md font-bold w-fit active:scale-105 transition-all duration-300">Login!</motion.button>
                </div>}
              </div>}
          </AnimatePresence>
        </motion.div>
        <AnimatePresence mode="wait">
          {isLogin ?
            <motion.div key={'login'} className="flex items-center justify-center w-full h-full" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1, ease: "easeInOut" }}>
              <LoginComponent error={error} setError={setError} />
              <div className="w-2/4" />
            </motion.div>
            :
            <motion.div key={'signUp'} className="flex items-center justify-center w-full h-full" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 1, ease: "easeInOut" }}>
              <div className="w-2/4" />
              <SignUpComponent setIsLogin={setIsLogin} setError={setError} error={error} />
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  );
}


export default Login;

