import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

function Faqs() {
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
            <div className="max-w-3xl m-auto">
              {/* Page title */}
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
                  👋 我该如何帮助您?
                </h1>
              </div>

              {/* Search form */}
              <div className="mb-6">
                <form className="relative">
                  <label htmlFor="action-search" className="sr-only">
                    搜索
                  </label>
                  <input
                    id="action-search"
                    className="form-input pl-9 py-3 focus:border-slate-300 w-full"
                    type="search"
                  />
                  <button
                    className="absolute inset-0 right-auto group"
                    type="submit"
                    aria-label="Search">
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                      <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Filters */}
              <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
                <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a className="text-indigo-500 whitespace-nowrap" href="#0">
                      热门
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap"
                      href="#0">
                      常见
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap"
                      href="#0">
                      社工
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap"
                      href="#0">
                      网站
                    </a>
                  </li>
                  <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                    <a
                      className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap"
                      href="#0">
                      其他
                    </a>
                  </li>
                </ul>
              </div>

              {/* Posts */}
              <div>
                <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">
                  热门问题
                </h2>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      我该如何通过社工网站预约服务？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      我们的预约系统提供了一个简便的途径让您根据需求选择合适的社工服务并进行预约。这里将指导您如何使用预约系统，包括选择服务类型、预约时间以及填写相关信息。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          功能介绍
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          用户指南
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      在紧急情况下，我如何通过社工网站获取帮助？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      我们的网站提供紧急援助服务，如果您或您认识的人处于危机中，这里将指导您如何快速找到紧急帮助选项并获取必要的支持。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          紧急服务
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          使用帮助
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      社工网站支持哪些捐赠方式？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      为了方便广大愿意提供帮助的人士，我们的网站提供了多种捐赠方式。这里将介绍各种捐赠选项，包括在线捐款、物资捐赠以及如何成为长期支持者。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          捐赠指南
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          资金支持
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      我怎样才能成为志愿者并参加社工活动？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      我们的网站鼓励并欢迎任何希望贡献自己力量的志愿者。这里将向您展示如何注册成为志愿者以及如何查找和报名参与即将举行的活动。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          志愿者信息
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          活动报名
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      社工网站提供哪些针对儿童和青少年的保护服务？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      保护儿童和青少年的安全是我们的首要任务。本节将介绍我们提供的各项保护服务，包括预防措施、应对策略以及如何获取帮助的详细信息。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          儿童保护
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          青少年服务
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* Post */}
                <article className="py-4 border-b border-slate-200 dark:border-slate-700">
                  <header className="flex items-start mb-2">
                    <div className="mt-2 mr-3">
                      <svg
                        className="w-4 h-4 shrink-0 fill-current"
                        viewBox="0 0 16 16">
                        <path
                          className="text-indigo-300"
                          d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z"
                        />
                        <path
                          className="text-indigo-500"
                          d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold">
                      我如何能够在社工网站上匿名发布求助信息？
                    </h3>
                  </header>
                  <div className="pl-7">
                    <div className="mb-2">
                      为了保护那些需要帮助但又不愿意透露身份的人，我们提供了匿名求助的选项。这里将指导您如何匿名发布您的求助信息，确保您的隐私得到保护。
                    </div>
                    <ul className="flex flex-wrap">
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          隐私保护
                        </a>
                      </li>
                      <li className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 dark:after:text-slate-600 after:px-2">
                        <a
                          className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                          href="#0">
                          求助发布
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>

              {/* Pagination */}
              <div className="mt-6">
                <div className="flex justify-end">
                  <a
                    className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500"
                    href="#0">
                    查看所有的问题 -&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Faqs
