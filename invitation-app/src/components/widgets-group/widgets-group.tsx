import React from 'react';
import "./widget-group.css";

const WidgetsGroup: React.FC = () => {
  return (
    <div className="rounded-t-2xl slow-flyin fixed bottom-0 w-[420px] bg-white py-2 flex justify-around items-center z-50 shadow-black shadow-2xl">
      <button className="flex flex-col items-centellr">
        <span className="material-icons hover:animate-spin">event</span>
        <span className="text-xs">RSVP</span>
      </button>
      <button className="flex flex-col items-center">
        <span className="material-icons">location_on</span>
        <span className="text-xs">Location</span>
      </button>
      <button className="flex flex-col items-center">
        <span className="material-icons">contact_phone</span>
        <span className="text-xs">Contact</span>
      </button>
    </div>
  );
};

export default WidgetsGroup;
