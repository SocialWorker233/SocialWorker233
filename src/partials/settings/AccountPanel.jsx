import React, { useState } from 'react'

import Image from '../../images/user-avatar-80.png'

function AccountPanel() {
  const [sync, setSync] = useState(false)

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
          我的账号
        </h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                className="w-20 h-20 rounded-full"
                src={Image}
                width="80"
                height="80"
                alt="User upload"
              />
            </div>
            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
              更换头像
            </button>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            创建团队
          </h2>
          <div className="text-sm">创建属于你的社工团队</div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                团队名称
              </label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id">
                团队描述
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="location">
                地址
              </label>
              <input id="location" className="form-input w-full" type="text" />
            </div>
          </div>
        </section>
        {/* Email */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            联系方式
          </h2>
          <div className="text-sm">更改你的联系方式</div>
          <div className="flex flex-wrap mt-5">
            <div className="mr-2">
              <label className="sr-only" htmlFor="email">
                Business email
              </label>
              <input id="email" className="form-input" type="email" />
            </div>
            <button className="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-indigo-500">
              修改
            </button>
          </div>
        </section>
        {/* Password */}
        <section>
          <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">
            密码
          </h2>
          <div className="text-sm">你需要输入原来的密码才能设置新的密码</div>
          <div className="mt-5">
            <button className="btn border-slate-200 dark:border-slate-700 shadow-sm text-indigo-500">
              更换密码
            </button>
          </div>
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

export default AccountPanel
