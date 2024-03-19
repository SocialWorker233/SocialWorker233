import React from 'react'

import User01 from '../../images/user-40-11.jpg'
import User02 from '../../images/user-40-12.jpg'
import ChatImage from '../../images/chat-image.jpg'

function MessagesBody() {
  return (
    <div className="grow px-4 sm:px-6 md:px-5 py-6">
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User01}
          width="40"
          height="40"
          alt="User 01"
        />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            小林，最近怎么样？有没有什么让你感到困扰的事情？
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User02}
          width="40"
          height="40"
          alt="User 02"
        />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            张老师，我最近确实有点不太好。
            <br />
            感觉学习的压力大，还有一些家庭问题。
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User01}
          width="40"
          height="40"
          alt="User 01"
        />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            我明白了。能具体说说是什么家庭问题吗？ <br />
            我们可以一起探讨解决的办法。
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User02}
          width="40"
          height="40"
          alt="User 02"
        />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            妈妈最近生病了，需要长期治疗。
            <br />
            家里的开销突然增加，我感觉自己的肩膀压力很大。感觉学习的压力大，还有一些家庭问题。
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Date separator */}
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center text-xs text-slate-600 font-medium px-2.5 py-1 bg-white border border-slate-200 rounded-full my-5">
          2024.02.26
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User01}
          width="40"
          height="40"
          alt="User 01"
        />
        <div>
          <div className="text-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-lg rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-md mb-1">
            这确实是个挑战。你知道我们有一个紧急援助基金可以申请，用于帮助像你这样的情况吗？
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={User02}
          width="40"
          height="40"
          alt="User 02"
        />
        <div>
          <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
            真的吗？我之前不知道还有这样的帮助。
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesBody
