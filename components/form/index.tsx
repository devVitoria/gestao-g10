import { useForm } from "@tanstack/react-form";
import { FormProps } from "./utils/interface";
import { IoClose } from "react-icons/io5";

export default function Form({
  defaultValues,
  onSubmit,
  titleIcon,
  title,
  onCloseForm,
  formInputFields,
}: FormProps) {
  const form = useForm({
    defaultValues: defaultValues,
    onSubmit: (value) => {
      onSubmit(value);
      form.reset();
    },
  });

  const formInputs = () => {
    return (
      <div className="flex-1 flex-col items-center gap-2 ">
        <div className="flex flex-row w-full items-center gap-2 border-b border-white/50 pb-2">
          <div className="w-6 h-6 bg-white/20 rounded-full flex justify-center items-center">
            {titleIcon}{" "}
          </div>

          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-col justify-start items-start">
              <p className="text-white/50 font-bold text-sm">{title} </p>
              <p className="text-white/50 text-[9px]">
                Preencha os campos abaixo
              </p>
            </div>

            <div onClick={onCloseForm} className=" hover:cursor-pointer">
              <IoClose className="opacity-70" />
            </div>
          </div>
        </div>
        <div className="flex-1  z-50 justify-around flex flex-row gap-4 py-2 w-full">
          {Object.entries(formInputFields).map((k, idx) => (
            <form.Field
              name={k[0] as keyof typeof defaultValues}
              validators={{
                onChange: ({ value }) => !value && `${k[1]} é necessário`,
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return (
                    value.includes("error") &&
                    'No "error" allowed in first name'
                  );
                },
              }}
              children={(field) => {
                return (
                  <div className="flex-1 flex-col py-4 ">
                    <div className="flex flex-col pb-2">
                      <div className="flex flex-row gap-1 items-center">
                        <div className="w-3 h-3 rounded-full flex justify-center items-center">
                          {k[1].icon}
                        </div>
                        <label
                          htmlFor={field.name}
                          className="text-white/50 font-bold text-[11px]"
                        >
                          {k[1].title}
                        </label>
                      </div>

                      <p className="text-white/60 text-[9px]">
                        {k[1].subtitle}
                      </p>
                    </div>
                    <div>
                      <input
                        accept={k[1].accept}
                        className="text-white/70 w-full border hover:cursor border-white/50 px-2 py-1 rounded-md  text-xs outline-0"
                        id={field.name}
                        name={field.name}
                        maxLength={k[1].maxlength}
                        value={field.state.value}
                        placeholder={k[1].placeholder}
                        type={k[1].type}
                        min={k[1].min}
                        max={k[1].max}
                        onBlur={field.handleBlur}
                        style={{
                          MozAppearance: "textfield",
                        }}
                        onChange={(e) => {
                          const value =
                            k[0] === "duration"
                              ? e.target.value.slice(0, 3)
                              : e.target.value;
                          field.handleChange(value);
                        }}
                      />
                    </div>
                  </div>
                );
              }}
            />
          ))}
        </div>
        <div
          onClick={() => {
            form.handleSubmit();
          }}
          className=" hover:cursor-pointer w-full flex justify-center items-center rounded-lg"
        >
          <p className="text-xs text-white/70 font-bold">ENVIAR</p>
        </div>
      </div>
    );
  };
  return (
    <div className="flex bg-black z-50 absolute max-h-1/2 w-full bottom-0 left-0  justify-center items-center border-t p-5 rounded-t-2xl">
      {formInputs()}
    </div>
  );
}
