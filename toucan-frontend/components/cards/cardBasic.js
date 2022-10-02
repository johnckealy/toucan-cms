import React from 'react';


const Card = ({ Icon, cardBody, iconColor, cardHeader }) => {
  const classStr = "h-20 w-20 p-4 my-4 rounded-lg " + iconColor
  return (
    <div className="rounded overflow-hidden shadow-md p-8">
      <div className="">
          <Icon className={classStr} />
        <p className="text-gray-700 text-base font-semibold">
          {cardHeader}
        </p>
      </div>
      <div className="">
        <span className="inline-block bg-gray-200 rounded-full py-2 text-sm">{cardBody}</span>
      </div>
    </div>
  );
}

export default Card;
