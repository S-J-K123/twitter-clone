import { auth } from "@component/firebase";
import { closeLoginModal, openLoginModal } from "@component/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

 async function handleSignIn() {
await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest11100@gmail.com", "anything")
  }




  return (
    <>
      <button
        className="bg-transparent border-white text-white w-[180px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className=" w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] 
        border border-gray-700 rounded-lg flex justify-center"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign in to your account</h1>
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"email"}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"password"}
              onChange={e => setPassword
              (e.target.value)}
            />

            <button onClick={handleSignIn} className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md ">
              Sign In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button onClick={handleGuestSignIn} className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4 ">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
