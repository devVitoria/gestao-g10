"use client";
import grzLogo from "../../assets/images/grz-logo.png";
import Balatro from "@/components/pages/login-utils/orb";
import { renderLoginFormInputs } from "@/components/pages/login-utils/utils/constants";
import { LoginFormFieldsProps } from "@/components/pages/login-utils/utils/interface";

export default function Login() {
  const handleSubmitLogin = (value: LoginFormFieldsProps) => {
    console.log("API value pro login", value);
  };
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center w-full bg-black/50"
      style={{
        height: "100vh",
      }}
    >
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Balatro
          isRotate={false}
          mouseInteraction
          pixelFilter={745}
          color1="#033659"
          color2="#de443b"
          color3="#162325"
        />
      </div>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "30px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
          padding: "24px",
        }}
        className="absolute gap-4 w-1/3 border rounded-full py-2 flex justify-center flex-col"
      >
        <div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              src={grzLogo.src}
              style={{
                width: 16,
                height: 16,
              }}
            />
            <p className="text-center text-white/60 font-bold text-xl">
              Gestão G-10
            </p>
          </div>
          <p className="text-center text-base text-white/60">
            Insira suas credenciais para acessar
          </p>
        </div>
        {renderLoginFormInputs({
          onSubmitValue: handleSubmitLogin,
        })}
      </div>
    </div>
  );
}
