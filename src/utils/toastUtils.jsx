import toast from "react-hot-toast";

const success = (text) => {
  toast.success(text, { duration: 1000, icon: "ⓘ" });
};

const failure = (text) => {
  toast.error(text, { duration: 1000 });
};

export { success, failure };
