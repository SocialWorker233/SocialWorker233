import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import PaginationClassic from '../../components/PaginationClassic'

import User01 from '../../images/user-32-01.jpg'
import User02 from '../../images/user-32-02.jpg'
import User07 from '../../images/user-32-07.jpg'

function Changelog() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
                  用户评论✨
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Add board button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="ml-2">添加评论</span>
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700">
              <div className="max-w-3xl m-auto mt-8">
                {/* Filters */}
                <div className="xl:pl-32 xl:-translate-x-16 mb-2">
                  <ul className="flex flex-wrap -m-1">
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">
                        查看所有
                      </button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        精选评论
                      </button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        好友评论
                      </button>
                    </li>
                    <li className="m-1">
                      <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out">
                        我的评论
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Posts */}
                <div className="xl:-translate-x-16">
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 shrink-0">
                        <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">
                          2023.08.15
                        </div>
                      </div>
                      <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                        <header>
                          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-3">
                            社工服务预约系统上线
                          </h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 shrink-0" href="#0">
                                <img
                                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                  src={User07}
                                  width="32"
                                  height="32"
                                  alt="User 04"
                                />
                              </a>
                              <a
                                className="block text-sm font-semibold text-slate-800 dark:text-slate-100"
                                href="#0">
                                张伟
                              </a>
                            </div>
                            <div className="text-slate-400 dark:text-slate-600">
                              ·
                            </div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                                已解决
                              </div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>
                            真的很方便，现在可以直接在网站上预约社工服务了。整个过程非常简单明了，节省了我很多时间。非常感谢社工团队提供这样的在线服务，让我们在需要帮助时能够更快地得到响应。
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 shrink-0">
                        <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">
                          2023.09.18
                        </div>
                      </div>
                      <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                        <header>
                          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-3">
                            在线咨询功能改进反馈 🎉
                          </h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 shrink-0" href="#0">
                                <img
                                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                  src={User02}
                                  width="32"
                                  height="32"
                                  alt="User 04"
                                />
                              </a>
                              <a
                                className="block text-sm font-semibold text-slate-800 dark:text-slate-100"
                                href="#0">
                                李娜
                              </a>
                            </div>
                            <div className="text-slate-400 dark:text-slate-600">
                              ·
                            </div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">
                                建议
                              </div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>
                            在线咨询功能非常有用，但如果能增加一个实时视频咨询的选项就更好了。有时候文字交流难以表达复杂的情感和问题，面对面的交流会更直接有效。
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 shrink-0">
                        <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">
                          2023.11.15
                        </div>
                      </div>
                      <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                        <header>
                          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-3">
                            志愿者报名系统更新
                          </h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 shrink-0" href="#0">
                                <img
                                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                  src={User01}
                                  width="32"
                                  height="32"
                                  alt="User 04"
                                />
                              </a>
                              <a
                                className="block text-sm font-semibold text-slate-800 dark:text-slate-100"
                                href="#0">
                                王刚
                              </a>
                            </div>
                            <div className="text-slate-400 dark:text-slate-600">
                              ·
                            </div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400 rounded-full text-center px-2.5 py-1">
                                已使用
                              </div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>
                            新的志愿者报名系统非常好用，信息一目了然，操作流程也简化了不少。通过这个系统，我成功报名参加了近期的志愿活动，非常期待能够贡献自己的力量。
                          </p>

                          <ul className="list-disc list-inside space-y-1">
                            <li>1.查看信息</li>
                            <li>2.参与报名</li>
                            <li>3.进行实践</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Post */}
                  <article className="pt-6">
                    <div className="xl:flex">
                      <div className="w-32 shrink-0">
                        <div className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 xl:leading-8">
                          2024.03.06
                        </div>
                      </div>
                      <div className="grow pb-6 border-b border-slate-200 dark:border-slate-700">
                        <header>
                          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-3">
                            捐赠流程体验分享 🙌
                          </h2>
                          <div className="flex flex-nowrap items-center space-x-2 mb-4">
                            <div className="flex items-center">
                              <a className="block mr-2 shrink-0" href="#0">
                                <img
                                  className="rounded-full border-2 border-white dark:border-slate-800 box-content"
                                  src={User02}
                                  width="32"
                                  height="32"
                                  alt="User 04"
                                />
                              </a>
                              <a
                                className="block text-sm font-semibold text-slate-800 dark:text-slate-100"
                                href="#0">
                                赵敏
                              </a>
                            </div>
                            <div className="text-slate-400 dark:text-slate-600">
                              ·
                            </div>
                            <div>
                              <div className="text-xs inline-flex font-medium bg-sky-100 dark:bg-sky-500/30 text-sky-600 dark:text-sky-400 rounded-full text-center px-2.5 py-1">
                                已捐赠
                              </div>
                            </div>
                          </div>
                        </header>
                        <div className="space-y-3">
                          <p>
                            最近通过这个网站进行了一次捐赠，整个流程非常顺畅。特别是捐赠后能够清楚看到捐赠去向和使用情况，让人感到非常透明和放心。
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Pagination */}
                <div className="xl:pl-32 xl:-translate-x-16 mt-6">
                  <PaginationClassic />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Changelog
