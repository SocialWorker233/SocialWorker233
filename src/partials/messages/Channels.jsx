import React from 'react'

function Channels({ setMsgSidebarOpen }) {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">
        频道
      </div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  爱心抚慰
                </span>
              </div>
            </div>
            <div className="flex items-center ml-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  社会援助
                </span>
              </div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}>
            <div className="flex items-center truncate">
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  善意聊天
                </span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Channels
