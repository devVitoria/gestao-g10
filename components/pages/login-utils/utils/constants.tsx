import { useForm } from "@tanstack/react-form";
import { LoginFormInputs } from "./interface";

export const inputs = {
  userCode: {
    title: "Código",
    placeholder: "Insira seu código",
    type: "text",
    maxlength: 6,
  },
  password: {
    title: "Senha",
    placeholder: "Insira sua senha",
    type: "text",
    maxlength: 8,
  },
};

const defaultLoginValues = {
  userCode: "",
  password: "",
};

export const renderLoginFormInputs = ({ onSubmitValue }: LoginFormInputs) => {
  const form = useForm({
    defaultValues: defaultLoginValues,
    onSubmit: () => {
      onSubmitValue({
        password: form.getFieldValue("password"),
        userCode: form.getFieldValue("userCode"),
      });
    },
  });

  return (
    <div className="flex-1 flex-col items-center  ">
      <div className="flex-1 gap-4 z-50  flex flex-col  w-full">
        {Object.entries(inputs).map((k, idx) => (
          <form.Field
            name={k[0] as keyof typeof defaultLoginValues}
            validators={{
              onChange: ({ value }) => !value && `${k[1]} é necessário`,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") && 'No "error" allowed in first name'
                );
              },
            }}
            children={(field) => {
              return (
                <div className=" w-full justify-center px-2 flex flex-col">
                  <div className="flex flex-col  pb-2">
                    <div className="flex flex-row gap-1 items-center">
                      <label
                        htmlFor={field.name}
                        className="text-white/60 font-bold text-[11px]"
                      >
                        {k[1].title}
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      className="text-white py-2 w-full border hover:cursor border-white/50 px-2 rounded-md  text-xs outline-0"
                      id={field.name}
                      name={field.name}
                      maxLength={k[1].maxlength}
                      value={field.state.value}
                      placeholder={k[1].placeholder}
                      type={k[1].type}
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
        className=" hover:cursor-pointer w-full flex justify-center items-center rounded-lg pt-4"
      >
        <p className="text-base text-white/60 font-bold">Enviar</p>
      </div>
    </div>
  );
};
