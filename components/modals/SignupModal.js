import { openSignupModal } from "@component/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  // const [isOpen, setIsOpen] = useState(false)
  // const handleClose = () => setIsOpen(false)
  // const handleOpen = () => setIsOpen(true)

  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <>
      <button
        className=" bg-white text-black w-[180px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        //  onClose={handleClose}
        className="flex justify-center items-center"
      >
        <div className=" w-[400px] h-[200px] bg-white">Sign up over here</div>
      </Modal>
    </>
  );
}
