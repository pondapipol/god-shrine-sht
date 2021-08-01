import React from 'react';
import { Link } from "react-router-dom";

const incentNumbers = [3, 5, 7, 9];

const ChooseIncentQuantity = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [incentNumber, setIncentNumber] = React.useState(null);

  const handleIncentNumberChange = (event) => {
    setIncentNumber(event.target.value);
  };

  return (
    <div className="p-8 h-screen flex flex-col bg-purple-400">
      <div className="text-center text-white text-2xl font-bold mb-8">
        Choose Incent Quantity
      </div>
      <div className="bg-white flex flex-col flex-1 rounded-2xl p-8 shadow-lg">
        {!incentNumber && (
          <div>
            <div className="text-center mb-2">
              Select Number
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              {incentNumbers.map((item, index) => (
                <div
                  key={index}
                  className="p-4 flex justify-center items-center"
                >
                  <button
                  className={[
                    'w-20 h-20 rounded-full text-white text-2xl font-bold',
                    selectedItem === item ? 'ring ring-purple-600 ring-offset-4 bg-purple-400' : 'bg-purple-500',
                  ].join(' ')}
                  onClick={() => setSelectedItem((prevState) => prevState === item ? null : item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {!selectedItem && (
          <div className="pt-4 text-center">
            <div className="mb-4">
              Or Type Here
            </div>
            <div>
              <input
                type="number"
                name="Incent Quantity"
                id="incent-quantity"
                className="focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 px-3 py-1 rounded-full shadow-sm"
                placeholder="Type incent quantity"
                value={incentNumber}
                onChange={(event) => handleIncentNumberChange(event)}
              />
            </div>
          </div>
        )}
        <div className="flex-1" />
        <div className="flex flex-row justify-center pt-4">
          <Link to={'/choose-offering'}>
            <button
              disabled={!selectedItem && !incentNumber}
              className="rounded-full p-2 bg-purple-500 text-white font-semibold w-40 shadow disabled:opacity-30"
            >
              NEXT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseIncentQuantity;
