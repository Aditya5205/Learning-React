import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const Currency_Generator = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const BackgroundImage =
    "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  return (
    <div
      className="flex h-screen w-full flex-wrap items-center justify-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-1 w-full">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}
              />
            </div>
            <div className="relative h-0.5 w-full">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="mb-4 mt-1 w-full">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Currency_Generator;
