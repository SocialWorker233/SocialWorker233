import React, { useState } from 'react'

function NotificationsPanel() {
  const [comments, setComments] = useState(true)
  const [messages, setMessages] = useState(true)
  const [mentions, setMentions] = useState(false)

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
          我的通知
        </h2>

        {/* General */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            通用设置
          </h3>
          <ul>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  评论和回复
                </div>
                <div className="text-sm">是否开启您的评论和回复消息提醒</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 dark:text-slate-500 italic mr-2">
                  {comments ? 'On' : 'Off'}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="comments"
                    className="sr-only"
                    checked={comments}
                    onChange={() => setComments(!comments)}
                  />
                  <label
                    className="bg-slate-400 dark:bg-slate-700"
                    htmlFor="comments">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  消息
                </div>
                <div className="text-sm">是否开启您的消息提醒</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 dark:text-slate-500 italic mr-2">
                  {messages ? 'On' : 'Off'}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="messages"
                    className="sr-only"
                    checked={messages}
                    onChange={() => setMessages(!messages)}
                  />
                  <label
                    className="bg-slate-400 dark:bg-slate-700"
                    htmlFor="messages">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  提及
                </div>
                <div className="text-sm">当其他用户提及你时，是否提醒</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 dark:text-slate-500 italic mr-2">
                  {mentions ? 'On' : 'Off'}
                </div>
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="mentions"
                    className="sr-only"
                    checked={mentions}
                    onChange={() => setMentions(!mentions)}
                  />
                  <label
                    className="bg-slate-400 dark:bg-slate-700"
                    htmlFor="mentions">
                    <span
                      className="bg-white shadow-sm"
                      aria-hidden="true"></span>
                    <span className="sr-only">Enable smart sync</span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* Shares */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            分享
          </h3>
          <ul>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  我的内容分享
                </div>
                <div className="text-sm">内容分享设置</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
                  管理
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  团队邀请
                </div>
                <div className="text-sm">管理我的团队邀请</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
                  管理
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
              {/* Left */}
              <div>
                <div className="text-slate-800 dark:text-slate-100 font-semibold">
                  智能连接
                </div>
                <div className="text-sm">管理我的智能连接</div>
              </div>
              {/* Right */}
              <div className="flex items-center ml-4">
                <div className="text-sm text-slate-400 dark:text-slate-500 italic mr-2 hidden md:block">
                  活跃
                </div>
                <button className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-rose-500">
                  禁用
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
          <div className="flex self-end">
            <button className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
              取消
            </button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
              保存
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NotificationsPanel
