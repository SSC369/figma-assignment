import toast from "react-hot-toast";

const showSuccessToast = (text) => {
  toast.success(text, { duration: 1000, icon: "ⓘ" });
};

const showFailureToast = (text) => {
  toast.error(text, { duration: 1000 });
};

export { showSuccessToast, showFailureToast };
