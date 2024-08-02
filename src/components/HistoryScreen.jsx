import HistoryContext from '../context/HistoryContext';
import { useContext } from 'react';
import HistoryItem from './HistoryItem';
import { IoMdArrowBack } from 'react-icons/io';
import { BsTrash } from 'react-icons/bs';

const HistoryScreen = ({ setSeeLogs, setPhoneNumber, handleCall }) => {
  const { history, setHistory } = useContext(HistoryContext);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center mb-4 gap-x-1">
          <div
            className="cursor-pointer text-blue-dark"
            onClick={() => {
              setSeeLogs(false);
            }}
          >
            <IoMdArrowBack className="text-xl" />
          </div>
          <h3 className="text-xl font-bold text-blue-dark">Call logs</h3>

          <div
            className="cursor-pointer text-blue-dark ml-auto hover:text-red-700 transition-all"
            onClick={() => {
              setHistory([]);
            }}
          >
            <BsTrash className="text-xl" />
          </div>
        </div>
        <div className="overflow-x-auto lg:max-h-[60vh]">
          {history.length === 0 ? (
            <p className="text-gray-600">No recent calls</p>
          ) : (
            [...history]
              .reverse()
              .map((item, index) => (
                <HistoryItem
                  key={index}
                  date={item.startTime}
                  phone={item.phoneNumber}
                  start={item.start}
                  end={item.end}
                  status={item.status}
                  index={index}
                  type={item.type}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;
