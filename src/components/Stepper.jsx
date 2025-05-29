import React from "react";

const Stepper = ({ currentStep }) => {
  const steps = [
    { label: "Dates And Time" },
    { label: "Seat" },
    { label: "Payment" },
  ];

  return (
    <div className="flex  justify-center mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold
                  ${
                    isCompleted
                      ? "bg-green-700"
                      : isActive
                      ? "bg-blue-600"
                      : "bg-gray-400"
                  }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              <span
                className={`text-xs mt-2 ${
                  isCompleted || isActive
                    ? "text-gray-800 font-medium"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="w-16 h-px border-t-2 border-dashed border-gray-400 mx-2 mt-5" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
