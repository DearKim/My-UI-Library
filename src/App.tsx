import { Button } from "@components/Button/Button";
import React from "react";

const App: React.FC = () => {
  return (
    <div>
      <div>
        <span>TEST COMPONENTS</span>
      </div>
      <div className="flex items-center w-full">
        <div className="mx-[auto] my-[40px]">
          <div>
            <div className="flex flex-col items-center justify-center mb-[20px]">
              <span className="text-main-color font-bold mb-[10px]">
                Type : full Color / Rounded : true
              </span>
              <Button label="Click Me" rounded type="fullcolor" />
            </div>
            <div className="flex flex-col items-center justify-center mb-[20px]">
              <span className="text-[#BB30F9] font-bold mb-[10px]">
                Type : text
              </span>
              <Button
                label="Click Me"
                type="text"
                color="#BB30F9"
                hoverColor="#D070FB"
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-[20px]">
              <span className="text-[#FF7200] font-bold mb-[10px]">
                Type : Outline
              </span>
              <Button
                label="Click Me"
                type="outline"
                color="#FF7200"
                hoverColor="#FF953F"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
