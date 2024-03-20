import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'
import ModalBasic from '../../components/ModalBasic'

function KnowledgeBase() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [feedbackModalOpen0, setFeedbackModalOpen0] = useState(false)
  const [feedbackModalOpen1, setFeedbackModalOpen1] = useState(false)
  const [feedbackModalOpen2, setFeedbackModalOpen2] = useState(false)
  const [feedbackModalOpen3, setFeedbackModalOpen3] = useState(false)
  const [feedbackModalOpen4, setFeedbackModalOpen4] = useState(false)
  const [feedbackModalOpen5, setFeedbackModalOpen5] = useState(false)
  const [feedbackModalOpen6, setFeedbackModalOpen6] = useState(false)
  const [feedbackModalOpen7, setFeedbackModalOpen7] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          {/* Search area */}
          <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 bg-indigo-500 dark:bg-transparent dark:bg-gradient-to-b dark:from-indigo-500/70 dark:to-indigo-500/30 overflow-hidden">
            {/* Glow */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <div className="w-64 h-64 rounded-full bg-white bg-opacity-30 dark:bg-opacity-10 blur-3xl"></div>
            </div>
            {/* Illustration */}
            <div className="absolute pointer-events-none" aria-hidden="true">
              <svg
                width="1280"
                height="361"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="ill2-b">
                    <stop stopColor="#A5B4FC" offset="0%" />
                    <stop stopColor="#818CF8" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="24.537%"
                    x2="50%"
                    y2="100%"
                    id="ill2-c">
                    <stop stopColor="#4338CA" offset="0%" />
                    <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <path id="ill2-a" d="m64 0 64 128-64-20-64 20z" />
                  <path id="ill2-e" d="m40 0 40 80-40-12.5L0 80z" />
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g transform="rotate(51 -92.764 293.763)">
                    <mask id="ill2-d" fill="#fff">
                      <use xlinkHref="#ill2-a" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-a" />
                    <path
                      fill="url(#ill2-c)"
                      mask="url(#ill2-d)"
                      d="M64-24h80v152H64z"
                    />
                  </g>
                  <g transform="rotate(-51 618.151 -940.113)">
                    <mask id="ill2-f" fill="#fff">
                      <use xlinkHref="#ill2-e" />
                    </mask>
                    <use fill="url(#ill2-b)" xlinkHref="#ill2-e" />
                    <path
                      fill="url(#ill2-c)"
                      mask="url(#ill2-f)"
                      d="M40.333-15.147h50v95h-50z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="relative w-full max-w-2xl mx-auto text-center">
              <div className="mb-5">
                <h1 className="text-2xl md:text-3xl text-white font-bold">
                  👋 我们能帮您什么？
                </h1>
              </div>
              <form className="relative">
                <label htmlFor="action-search" className="sr-only">
                  Search
                </label>
                <input
                  id="action-search"
                  className="form-input pl-9 py-3 dark:bg-slate-800 dark:border-slate-800 dark:hover:border-slate-900 focus:border-slate-300 dark:focus:border-slate-900 w-full"
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
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Sections */}
            <div className="space-y-8">
              {/* Send Feedback */}

              {/* Popular Topics */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 dark:text-slate-100 font-bold">
                    服务预约
                  </h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:sidebar-expanded:grid-cols-2 xl:sidebar-expanded:grid-cols-4 gap-6">
                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon1-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M19.236 21.995h-3.333c-.46 0-.833.352-.833.786v9.428c0 .434.373.786.833.786h4.167V22.78c0-.434-.374-.786-.834-.786Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M34.234 20.073a2.393 2.393 0 0 0-.735-.116h-5v-2.609c0-3.325-2.157-4.297-3.298-4.347a.828.828 0 0 0-.611.24.888.888 0 0 0-.257.63v4.032L21 22.077v10.924h10.19c1.1.005 2.073-.744 2.392-1.842l2.308-7.826a2.711 2.711 0 0 0-.181-1.988 2.528 2.528 0 0 0-1.475-1.272Z"
                                fill="url(#icon1-a)"
                                transform="translate(-.93 -.005)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          社工园丁志愿
                        </h3>
                        <div className="text-sm">
                          让每一份热心找到归属，通过在线报名参与丰富多彩的志愿活动。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen0(true)
                          }}>
                          报名参加
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen0}
                          setModalOpen={setFeedbackModalOpen0}
                          title="填写信息">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名 <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  志愿活动名称{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  志愿活动组织{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen0(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                提交
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon2-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M26.5 19c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V35l-4.108-2.148a10 10 0 0 1-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C18 22.183 21.805 19 26.5 19Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M23 13c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V31l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8Z"
                                fill="url(#icon2-a)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          未保办服务预约
                        </h3>
                        <div className="text-sm">
                          一键预约求助、儿童之家服务及捐赠对接，快速响应，贴心服务。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen1(true)
                          }}>
                          预约
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen1}
                          setModalOpen={setFeedbackModalOpen1}
                          title="信息填写">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名<span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  电子邮件{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="feedback">
                                  服务信息详情{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  id="feedback"
                                  className="form-textarea w-full px-2 py-1"
                                  rows="4"
                                  required></textarea>
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon3-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <circle
                                fill="url(#icon3-a)"
                                cx="30.5"
                                cy="17.5"
                                r="4.5"
                              />
                              <circle
                                fill="#4F46E5"
                                opacity=".88"
                                cx="17.5"
                                cy="17.5"
                                r="4.5"
                              />
                              <circle
                                fill="#4F46E5"
                                opacity=".88"
                                cx="30.5"
                                cy="30.5"
                                r="4.5"
                              />
                              <circle
                                fill="url(#icon3-a)"
                                cx="17.5"
                                cy="30.5"
                                r="4.5"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          未保档案
                        </h3>
                        <div className="text-sm">
                          为每个未成年人打造安全档案，记录成长每一步，仅授权人士可访问。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen2(true)
                          }}>
                          填写档案
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen2}
                          setModalOpen={setFeedbackModalOpen2}
                          title="信息填写">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  未成年人姓名{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  监护人姓名{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  监护人联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  走访日期{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen2(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon4-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M34.327 18.194H10.12c-.495 0-.897.358-.897.798v14.404c0 .44.402.798.897.798h24.207c.495 0 .896-.357.896-.798V18.992c0-.44-.401-.798-.896-.798Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M29.09 0H4.883c-.494 0-.896.357-.896.798v14.404c0 .44.402.798.896.798H29.09c.495 0 .897-.357.897-.798V.798c0-.44-.402-.798-.897-.798Z"
                                fill="url(#icon4-a)"
                                transform="rotate(-8 126.748 -40.297)"
                              />
                              <path
                                d="M25.194 25.777a3 3 0 1 1-.835-5.942 3 3 0 0 1 .835 5.942Z"
                                fill="#6366F1"
                                opacity=".72"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          流动社工站
                        </h3>
                        <div className="text-sm">
                          线上提交申请，便捷获得社工服务，无缝连接社区、学校与监护人。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen3(true)
                          }}>
                          申请
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen3}
                          setModalOpen={setFeedbackModalOpen3}
                          title="信息填写">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  申请人姓名{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  电子邮件{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  申请服务类型{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen3(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon5-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M31.074 20.692a5.516 5.516 0 0 0-7.878-1.107c-.172.133-.311.293-.463.44-.106-.184-.196-.375-.324-.55a5.516 5.516 0 0 0-7.878-1.108c-2.49 1.932-3 5.56-1.14 8.103l7.142 9.207 9.402-6.882c2.49-1.931 3-5.56 1.139-8.103Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M20.353 2.998a5.516 5.516 0 0 0-7.955 0c-.152.156-.268.333-.398.5-.13-.167-.246-.344-.398-.5a5.516 5.516 0 0 0-7.955 0c-2.196 2.26-2.196 5.924 0 8.183L12 19.304l8.353-8.123c2.196-2.26 2.196-5.924 0-8.183Z"
                                fill="url(#icon5-a)"
                                transform="rotate(16 -34.482 60.533)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          小信箱
                        </h3>
                        <div className="text-sm">
                          建立桥梁，倾听您的声音，收集每一个建议与问题，共同改进我们的服务。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen4(true)
                          }}>
                          写信
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen4}
                          setModalOpen={setFeedbackModalOpen4}
                          title="填写信息">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名 <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  电子邮件{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  反馈类型（建议/问题）{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="feedback">
                                  反馈内容{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  id="feedback"
                                  className="form-textarea w-full px-2 py-1"
                                  rows="4"
                                  required></textarea>
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen4(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon6-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M33.83 16.57 9.803 19.52c-.491.06-.846.464-.793.901l1.756 14.297c.054.437.496.743.987.683l24.026-2.95c.492-.06.847-.464.793-.901l-1.755-14.297c-.054-.438-.496-.743-.987-.683Z"
                                fill="#4F46E5"
                                opacity=".88"
                              />
                              <path
                                d="M28.712 0H4.505c-.495 0-.897.357-.897.798v14.404c0 .44.402.798.897.798h24.207c.494 0 .896-.357.896-.798V.798c0-.44-.402-.798-.896-.798Z"
                                fill="url(#icon6-a)"
                                transform="rotate(8 -86.45 77.005)"
                              />
                              <path
                                fill="#6366F1"
                                opacity=".72"
                                d="m23.646 19.765 4.533 3.667-5.368 2.275z"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          个人心理咨询
                        </h3>
                        <div className="text-sm">
                          一对一心理健康支持和咨询，助您走出困境，恢复内心的平和与力量。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen5(true)
                          }}>
                          填写表单
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen5}
                          setModalOpen={setFeedbackModalOpen5}
                          title="填写信息">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名 <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  电子邮件{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  咨询主题{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="feedback">
                                  咨询内容{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  id="feedback"
                                  className="form-textarea w-full px-2 py-1"
                                  rows="4"
                                  required></textarea>
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen5(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon7-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g
                              transform="translate(-.186 -.042)"
                              fillRule="nonzero"
                              fill="none">
                              <circle
                                fill="#554FE8"
                                cx="20"
                                cy="26.993"
                                r="10"
                              />
                              <circle
                                fill="url(#icon7-a)"
                                cx="25.122"
                                cy="24"
                                r="11"
                              />
                              <path
                                fill="#6366F1"
                                opacity=".72"
                                d="m26.255 22.605-1.569-3.586-.922 3.804-3.735.327 3.26 2.195-.864 3.91 2.927-2.626 3.339 2.078-1.53-3.7 2.83-2.729z"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          紧急援助服务
                        </h3>
                        <div className="text-sm">
                          遭遇突发事件？我们提供紧急援助，支持您和您的家庭度过难关。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen6(true)
                          }}>
                          请求救援
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen6}
                          setModalOpen={setFeedbackModalOpen6}
                          title="信息填写">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名<span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="feedback">
                                  紧急情况描述{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                  id="feedback"
                                  className="form-textarea w-full px-2 py-1"
                                  rows="4"
                                  required></textarea>
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen5(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-sm text-center p-5">
                    <div className="flex flex-col h-full">
                      <div className="grow mb-2">
                        {/* Icon */}
                        <div className="inline-flex w-12 h-12 rounded-full bg-indigo-400">
                          <svg
                            className="w-12 h-12"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                                id="icon8-a">
                                <stop stopColor="#FFF" offset="0%" />
                                <stop stopColor="#A5B4FC" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g fillRule="nonzero" fill="none">
                              <path
                                d="M18.648 35.069c.232.217.46.322.798.31.337-.012.558-.132.775-.365l1.95-2.094c1.028.414 2.504.813 4.076.758 1.798-.063 3.688-.692 5.426-2.441 3.686-3.956 4.05-12.862 4.038-13.199-.012-.337-.136-.67-.368-.888-.233-.217-.574-.317-.91-.306-.338.012-9.405 1.23-12.875 4.953-2.168 2.327-2.41 5.037-1.883 7.27l6.61-3.946-7.804 8.378a1.206 1.206 0 0 0 .167 1.57Z"
                                fill="#554FE8"
                              />
                              <path
                                d="M.353 17.663c.225.224.45.337.787.337s.562-.113.786-.337l2.024-2.026c1.011.45 2.473.9 4.046.9 1.799 0 3.71-.562 5.508-2.25C17.326 10.462 18 1.575 18 1.237c0-.337-.112-.675-.337-.9C17.438.113 17.1 0 16.763 0c-.337 0-9.441.9-13.038 4.5-2.248 2.25-2.585 4.95-2.136 7.2l6.744-3.712-8.093 8.1a1.206 1.206 0 0 0 .113 1.575Z"
                                fill="url(#icon8-a)"
                                transform="rotate(13 -42.427 83.827)"
                              />
                            </g>
                          </svg>
                        </div>
                        {/* Content */}
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
                          社区活动和志愿服务
                        </h3>
                        <div className="text-sm">
                          加入我们的社区服务和志愿活动，一起为社区带来正能量和变化。
                        </div>
                      </div>
                      {/* Link */}
                      <div className="m-1.5">
                        {/* Start */}
                        <button
                          className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                          aria-controls="feedback-modal"
                          onClick={(e) => {
                            e.stopPropagation()
                            setFeedbackModalOpen7(true)
                          }}>
                          参加活动
                        </button>
                        <ModalBasic
                          id="feedback-modal"
                          modalOpen={feedbackModalOpen7}
                          setModalOpen={setFeedbackModalOpen7}
                          title="信息填写">
                          {/* Modal content */}
                          <div className="px-5 py-4">
                            <div className="space-y-3">
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="name">
                                  姓名 <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="name"
                                  className="form-input w-full px-2 py-1"
                                  type="text"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  电子邮件{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  联系电话{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-sm font-medium mb-1"
                                  htmlFor="email">
                                  感兴趣的活动类型{' '}
                                  <span className="text-rose-500">*</span>
                                </label>
                                <input
                                  id="email"
                                  className="form-input w-full px-2 py-1"
                                  type="email"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setFeedbackModalOpen(false)
                                }}>
                                取消
                              </button>
                              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">
                                发送
                              </button>
                            </div>
                          </div>
                        </ModalBasic>
                        {/* End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Guides */}
              <div>
                <div className="mb-5">
                  <h2 className="text-xl text-slate-800 dark:text-slate-100 font-bold">
                    热门指南
                  </h2>
                </div>
                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            社工服务利用指南
                          </div>
                          <div className="text-sm">
                            提供详细指南，帮助用户了解如何有效利用社工服务。
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            href="#0">
                            查看 -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            社区资源汇总
                          </div>
                          <div className="text-sm">
                            汇总本地社区资源，包括紧急避难所、免费餐饮服务等。
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            href="#0">
                            查看 -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            子女保护与福利
                          </div>
                          <div className="text-sm">
                            提供关于子女保护政策、福利项目的信息，帮助家庭确保儿童安全和福祉。
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            href="#0">
                            查看 -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item */}
                  <div className="w-full p-3 rounded-sm text bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="flex h-full">
                      {/* Icon */}
                      <svg
                        className="w-4 h-4 shrink-0 fill-indigo-500 mt-[3px] mr-3"
                        viewBox="0 0 16 16">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                      </svg>
                      <div className="flex flex-col h-full">
                        {/* Content */}
                        <div className="grow mb-2">
                          <div className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            精神健康自助资源
                          </div>
                          <div className="text-sm">
                            提供精神健康自我评估工具和自我帮助策略，帮助用户管理日常压力。
                          </div>
                        </div>
                        {/* Link */}
                        <div>
                          <a
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                            href="#0">
                            查看 -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default KnowledgeBase
