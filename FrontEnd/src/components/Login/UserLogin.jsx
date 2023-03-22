import React, { useState } from "react";
import axios from "../../axios/axiosinstance";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import app from "../../firebase/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function UserLogin() {
  const [user, setUser] = useState("");
  const [number, setNumber] = useState("");
  const [show, setShow] = useState(false);
  const [verifyButton, setVerifyButton] = useState(false);
  const [opt, setOtp] = useState("");
  const [numberInput, setNumberInput] = useState(true);
  const [otpSubmit, setOtpSubmit] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth(app);

  // const numberVerifiyer = async (event) => {
  //   event.preventDefault();
  //   console.log(number, "this is the number of the user");

  //   await axios({
  //     url:"/verifyNumber",
  //     method:"POST",
  //     data:{
  //       number
  //     }
  //   }).then(()=>{
  //     console.log('verify number then worked');
  //   })
  // };

  const googleAuth = async (datas) => {
    console.log(datas, "this is the data ");
    setUser(datas);
    console.log(user, "this is user here");

    await axios({
      url: "/googleAuth",
      method: "post",
      data: {
        datas,
      },
    }).then((res) => {
      console.log(res.data.token, "this is the token data");
      navigate("/");
    });
  };

  const numberChecker = (e) => {
    let count = number.length;
    setNumber(e.target.value);
    console.log(number, count, "number");
    if (count == 9) {
      setVerifyButton(true);
    }
  };

  const onCaptchVerify = (e) => {
    // e.preventDefault();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          onSignInSubmit();
        },
      },
      auth
    );
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();

    onCaptchVerify();

    const phonenumber = "+91" + number;
    const appVerifier = window.RecaptchaVerifier;
    signInWithPhoneNumber(auth, phonenumber, appVerifier).then(
      (confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("opt sended successfully");

        setShow(true);
        setVerifyButton(false);
        setNumberInput(false);
        setOtpSubmit(true);
      }
    );
    // .catch((error) => {
    //   console.log('error caught: ' + error);
    // });
  };

  const verifyOtp = (e) => {
    setOtp(e.target.value);
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        const User = result.user;
        console.log(User, "this is the Users");
        alert("otp verification successfully compleated");
      })
      .catch((error) => {
        console.log(error);
        alert("otp verification failed");
      });
  };

  const clientId =
    "647726962490-p5v9fsraj9pnse77f3utlp6jc66h5m7k.apps.googleusercontent.com";

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden pb-56">
      <div className="w-full p-24 m-auto bg-inherit rounded-md shadow-xl lg:max-w-xl">
        <form
          className=""
          // onSubmit={(e) => {
          //   numberVerifiyer;
          // }}
        >
          {numberInput ? (
            <div className="mb-2 ">
              <label className="block text-sm font-semibold text-gray-800">
                Phone Number
              </label>
              <input
                onChange={numberChecker}
                type="text"
                placeholder="+91"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          ) : null}
          {show ? (
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Enter OTP
              </label>
              <input
                onClick={verifyOtp}
                type="text"
                placeholder="xxxx"
                className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          ) : (
            ""
          )}
          <div
            className="items-center justify-center"
            id="recaptcha-container"
          ></div>
          {verifyButton ? (
            <div className="mt-6">
              <button
                onClick={onSignInSubmit}
                className="items-center justify-center w-full px-4 py-2 tracking-wide text-gray-800 transition-colors duration-200 transform bg-inherit rounded-md hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800"
              >
                Verify Number
              </button>
            </div>
          ) : null}

          {otpSubmit ? (
            <div className="mt-6">
              <button className="items-center justify-center w-full px-4 py-2 tracking-wide text-gray-800 transition-colors duration-200 transform bg-inherit rounded-md hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800">
                Submit OTP
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex justify-center mt-11  ">
          <LoginSocialGoogle
            client_id={clientId}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={googleAuth}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </LoginSocialGoogle>
        </div>
      </div>
    </div>
  );
}

export { UserLogin };
