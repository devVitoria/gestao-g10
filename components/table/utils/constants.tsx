export const renderIndicator = (ind: string) => {
  const isBool = ind === "true" || ind === "false";
  if (!isBool) {
    return null;
  }

  if (ind === "true") {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="w-16 h-6  rounded-2xl flex justify-center items-center">
          <p className="text-green-600/50 font-bold">Sim</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-16 h-6 rounded-2xl flex justify-center items-center">
        <p className="text-red-600/50 font-bold">Não</p>
      </div>
    </div>
  );
};