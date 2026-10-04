
import { useState } from "react";
import signupImage from "../assets/SignUpImage/signupImage.jpg"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { UserLoginApi } from "../Auth/AuthFunction";

function LoginPg() {
    const navigater = useNavigate()
    const [values, setValues] = useState({ contact:"", password: "" });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [success, setSuccess] = useState(false);
     const [errorMsg , setErrorMsg] = useState("")
        const [msgCol , setMsgCol] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setSuccess(false);
        // re-check live only after the user has already left the field once
        if (touched[name]) {
            setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        FIELDS.forEach(({ name }) => {
            newErrors[name] = validateField(name, values[name]);
        });
        setErrors(newErrors);
        setTouched({contact: true, password: true });

        if (Object.values(newErrors).some(Boolean)) return;

          localStorage.setItem("Login data ",JSON.stringify(values) )
        //   console.log(values);
          
        let resp = await UserLoginApi(values)
         setSuccess(true);
            setMsgCol(resp.success)
            setErrorMsg(resp.message)
            if(resp.success){
                navigater("/Home")
            }
        
        
    };

    return (<>
        <main className="mx-auto grid w-full max-w-[1305px] items-center gap-10 px-4 py-10 font-['Poppins',sans-serif] lg:grid-cols-2 lg:gap-0 lg:py-16 lg:pl-0">
            {/* Side image (hidden on small screens) */}
            <div className="hidden lg:block">
                <img
                    src={signupImage}
                    alt="Shopping cart with phone and bags"
                    className="h-[781px] max-h-[80vh] w-full rounded-r object-cover"
                />
            </div>

            {/* Form */}
            <div className="mx-auto w-full max-w-[371px] lg:mx-0 lg:ml-[10%]">
                <h1 className="text-3xl font-medium tracking-[0.04em] text-black sm:text-4xl">
                    Create an account
                </h1>
                <p className="mt-5 text-base text-black">Enter your details below</p>

                <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-8">
                    {FIELDS.map(({ name, type, placeholder, autoComplete }) => (
                        <div key={name}>
                            <input
                                id={name}
                                name={name}
                                type={type}
                                placeholder={placeholder}
                                autoComplete={autoComplete}
                                value={values[name]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(errors[name])}
                                aria-describedby={errors[name] ? `${name}-error` : undefined}
                                className={`w-full border-0 border-b bg-transparent py-2 text-base text-black outline-none transition-colors placeholder:text-black/40 ${errors[name]
                                        ? "border-[#DB4444]"
                                        : "border-black/40 focus:border-black"
                                    }`}
                            />
                            {errors[name] && (
                                <p id={`${name}-error`} className="mt-1 text-sm text-[#DB4444]">
                                    {errors[name]}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="space-y-4 pt-2">
                        <button
                            type="submit"
                            className="w-full rounded bg-[#DB4444] py-4 text-base font-medium text-white transition-colors hover:bg-[#c23a3a]"
                        >
                            Login
                        </button>

                        
                    </div>

                    {success && (
                            <p className={`text-center text-sm ${msgCol ? "text-green-600" : "text-red-500" } `}>
                                {errorMsg || "try again after some time"}
                            </p>
                        )}
                </form>

                <p className="mt-8 flex flex-wrap justify-center gap-4 text-base text-black/70">
                    GO to
                    <a onClick={()=> navigater("/SignUp")} className="border-b border-black/50 font-medium text-black hover:cursor-pointer">
                        Sign up
                    </a>
                </p>
            </div>
        </main>
    </>)
}

export default LoginPg;


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?\d{10,13}$/;

// Returns an error message for one field, or "" if it's valid
const validateField = (name, value) => {
  const v = value.trim();

  if (name === "contact") {
    if (!v) return "Email or phone number is required";
    const phone = v.replace(/[\s-]/g, "");
    if (!EMAIL_REGEX.test(v) && !PHONE_REGEX.test(phone))
      return "Enter a valid email or phone number";
  }

  if (name === "password") {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
  }

  return "";
};

const FIELDS = [
  { name: "contact", type: "text", placeholder: "Email or Phone Number", autoComplete: "username" },
  { name: "password", type: "password", placeholder: "Password", autoComplete: "new-password" },
];

