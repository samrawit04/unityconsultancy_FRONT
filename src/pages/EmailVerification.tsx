import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(["", "", "", "", ""]);
  const [countdown, setCountdown] = useState<number>(120);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0) {
          setIsResendDisabled(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 4) {
        const nextInput = document.querySelector(
          `input[name=code-${index + 1}]`
        ) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name=code-${index - 1}]`
      ) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  const handleResendCode = () => {
    setCountdown(120);
    setIsResendDisabled(true);
  };

  const handleVerify = () => {
    const code = verificationCode.join("");
    console.log("Verifying code:", code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <div className="text-center">
          <img src="/src/asset/logo.png" alt="Unity Logo" className="h-16 w-auto mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#4b2a75] mb-2">Please check your Email</h2>
          <p className="text-gray-500 text-sm">
            We've sent a code to samrawitamare@gmail.com
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {verificationCode.map((code, index) => (
            <input
              key={index}
              type="text"
              name={`code-${index}`}
              value={code}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl font-semibold border-2 rounded-lg focus:border-[#4b2a75] focus:outline-none transition-colors"
              maxLength={1}
            />
          ))}
        </div>

        <Button
          onClick={handleVerify}
          className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-base font-semibold"
        >
          Verify
        </Button>

        <div className="text-center">
          <button
            onClick={handleResendCode}
            disabled={isResendDisabled}
            className={`text-sm ${isResendDisabled ? 'text-gray-400' : 'text-[#4b2a75] hover:underline'}`}
          >
            Resend code?{" "}
            {isResendDisabled && (
              <span className="text-gray-400">
                {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;