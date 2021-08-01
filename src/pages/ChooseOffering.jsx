import React from 'react';
import { Link } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../img/offeringImg/', false, /\.(png|jpe?g|svg)$/));

const ChooseOffering = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);

  const isItemSelected = (selectedItems, selectedItem) => {
    return selectedItems.findIndex(item => item.default === selectedItem.default);
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevState) => {
      let temp = [...prevState];
      const itemIndex = isItemSelected(prevState, item);

      if (itemIndex < 0) {
        temp.push(item);
      } else {
        temp.splice(itemIndex, 1);
      }

      return [...temp];
    });
  };

  return (
    <div className="p-8 h-screen flex flex-col bg-purple-400">
      <div className="text-center text-white text-2xl font-bold mb-1">
        Choose Offering
      </div>
      <div className="text-center text-white text-sm mb-8">
        (You can select more than 1)
      </div>
      <div className="bg-white flex flex-col flex-1 rounded-2xl p-8 shadow-lg">
        <div className="flex flex-row flex-wrap justify-center">
          {images.map((item, index) => (
            <div
              key={index}
              className="p-4 flex justify-center items-center"
            >
              <button
              className={[
                'w-20 h-20 rounded-full text-white text-2xl font-bold',
                isItemSelected(selectedItems, item) >= 0 ? 'ring ring-purple-600 ring-offset-4 bg-purple-400' : 'bg-purple-500',
              ].join(' ')}
              onClick={() => handleSelectItem(item)}
              >
                <img
                  className="rounded-full object-cover w-full h-full"
                  src={item.default}
                  alt={item.default.replace('/static/media/', '')}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex flex-row justify-center pt-4">
          <Link to={'/wish'}>
            <button
              disabled={selectedItems.length < 1}
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

export default ChooseOffering;
