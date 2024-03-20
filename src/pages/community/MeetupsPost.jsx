import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

import MeetupImage from '../../images/meetup-image.jpg'
import MeetupPhoto01 from '../../images/meetup-photo-01.jpg'
import MeetupPhoto02 from '../../images/meetup-photo-02.jpg'
import MeetupPhoto03 from '../../images/meetup-photo-03.jpg'
import MeetupThumb from '../../images/meetups-thumb-02.jpg'
import UserImage01 from '../../images/user-32-01.jpg'
import UserImage02 from '../../images/user-32-02.jpg'
import UserImage03 from '../../images/user-32-03.jpg'
import UserImage04 from '../../images/user-32-04.jpg'
import UserImage05 from '../../images/user-32-05.jpg'
import UserImage06 from '../../images/user-32-06.jpg'
import UserImage07 from '../../images/user-32-07.jpg'
import UserImage08 from '../../images/user-32-08.jpg'
import Avatar02 from '../../images/avatar-02.jpg'
import Avatar03 from '../../images/avatar-03.jpg'
import Avatar04 from '../../images/avatar-04.jpg'

function MeetupsPost() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Content */}
              <div>
                <div className="mb-6">
                  <Link
                    className="btn-sm px-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                    to="/community/meetups">
                    <svg
                      className="fill-current text-slate-400 dark:text-slate-500 mr-2"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12">
                      <path d="M5.4.6 6.8 2l-4 4 4 4-1.4 1.4L0 6z" />
                    </svg>
                    <span>回到社工风姿</span>
                  </Link>
                </div>
                <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
                  2021年11月15日 - 上午 9:00
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">
                    引领变革：社工在城市社区中的创新作用
                  </h1>
                  <p>
                    在快速变化的社会背景下，社会工作者在引领和支持城市社区变革中扮演着至关重要的角色。他们不仅是危机应对的先锋，也是持续社会发展的驱动者。本文深入探讨了社工在城市社区发展中的创新实践和所面临的挑战。
                  </p>
                </header>

                {/* Meta */}
                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                  {/* Author */}
                  <div className="flex items-center sm:mr-4">
                    <a className="block mr-2 shrink-0" href="#0">
                      <img
                        className="rounded-full"
                        src={UserImage07}
                        width="32"
                        height="32"
                        alt="User 04"
                      />
                    </a>
                    <div className="text-sm whitespace-nowrap">
                      由{' '}
                      <a
                        className="font-semibold text-slate-800 dark:text-slate-100"
                        href="#0">
                        翌宁宝宝
                      </a>{' '}
                      发布
                    </div>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                    {/* Tags */}
                    <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                      热度高
                    </div>
                  </div>
                </div>

                {/* Image */}
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm"
                    src={MeetupImage}
                    width="640"
                    height="360"
                    alt="Meetup"
                  />
                </figure>

                {/* Post content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    创新实践
                  </h2>
                  <p className="mb-6">
                    在北京的一项社区支持项目中，社工团队通过建立线上互助平台，成功地将社区居民的需求与资源对接。该平台不仅为有困难的居民提供即时帮助，也为寻求志愿服务机会的人提供了平台。这一创新做法极大地提升了社区的凝聚力和自助能力。
                  </p>
                  <p className="mb-6">
                    另一个例子来自上海，一支社工队伍针对老年人孤独问题，开发了一款智能交友应用。该应用不仅使老年人能够找到兴趣相投的朋友，还通过定期组织活动促进了他们的社会参与。
                  </p>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    面临的挑战
                  </h2>
                  <p className="mb-6">
                    尽管社工在城市社区发展中发挥着重要作用，但他们也面临着多重挑战。资源的有限性是一个长期存在的问题。许多社会服务项目因资金不足而难以持续。此外，社会工作者在执行创新项目时，往往需要跨越多个部门和机构之间的壁垒，这需要强大的协调能力和政策支持。
                  </p>

                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    引领变革的力量
                  </h2>
                  <p className="mb-6">
                    社工通过直接与社区成员互动，能够准确地把握社区的需求和挑战，并设计出具有针对性的解决方案。例如，在深圳，一个专注于青少年发展的社工项目通过提供职业指导和心理支持，帮助了许多处于困境中的年轻人找到了自我价值和发展方向。
                  </p>

                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    展望未来
                  </h2>
                  <p className="mb-6">
                    未来，社工在城市社区中的作用将会更加重要。随着社会问题的复杂化，社会工作者需要不断提升自身的专业能力，利用科技手段创新服务模式，以更有效地应对挑战。同时，社会各界也应加大对社会工作的支持和投资，共同构建更加和谐、可持续发展的社区。
                  </p>
                </div>
                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                {/* Photos */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    活动照片 (3)
                  </h2>
                  <div className="grid grid-cols-3 gap-4 my-6">
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto01}
                        width="203"
                        height="152"
                        alt="Meetup photo 01"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto02}
                        width="203"
                        height="152"
                        alt="Meetup photo 02"
                      />
                    </a>
                    <a className="block" href="#0">
                      <img
                        className="w-full rounded-sm"
                        src={MeetupPhoto03}
                        width="203"
                        height="152"
                        alt="Meetup photo 03"
                      />
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                {/* Comments */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    评论区 (3)
                  </h2>
                  <ul className="space-y-5 my-6">
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage07}
                          width="32"
                          height="32"
                          alt="User 07"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                          李明
                        </div>
                        <div className="italic">
                          参加了这次活动真的让我眼界大开，社会工作者的辛勤工作和他们对社区改善的深刻影响让我深受感动。我特别钦佩他们在面对资源限制和跨部门合作时所展现出的创新能力和毅力。
                        </div>
                      </div>
                    </li>
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage08}
                          width="32"
                          height="32"
                          alt="User 08"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                          张红
                        </div>
                        <div className="italic">
                          这篇报道非常精彩，它不仅展示了社工在城市社区发展中的关键作用，还突出了他们如何利用科技和创新思维来解决社会问题。作为一名志愿者，我从中获得了很多灵感，希望将来能参与到这样的项目中去。
                        </div>
                      </div>
                    </li>
                    {/* Comment */}
                    <li className="flex items-start">
                      <a className="block mr-3 shrink-0" href="#0">
                        <img
                          className="rounded-full"
                          src={UserImage02}
                          width="32"
                          height="32"
                          alt="User 02"
                        />
                      </a>
                      <div className="grow">
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                          王亮
                        </div>
                        <div className="italic">
                          报道很详尽地介绍了社工面临的挑战和他们如何勇敢面对，为社区带来积极的变化。这让我意识到，每个人都有能力为社会做出贡献，只要我们愿意伸出援手。希望有更多这样的报道，让大众了解社工的重要性。
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* 1st block */}
                <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                  <div className="space-y-2">
                    <button className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg
                        className="w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 16 16">
                        <path d="m2.457 8.516.969-.99 2.516 2.481 5.324-5.304.985.989-6.309 6.284z" />
                      </svg>
                      <span className="ml-1">参加</span>
                    </button>
                    <button className="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
                      <svg
                        className="w-4 h-4 fill-rose-500 shrink-0"
                        viewBox="0 0 16 16">
                        <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                      </svg>
                      <span className="ml-2">收藏</span>
                    </button>
                  </div>
                </div>

                {/* 2nd block */}
                <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                  <div className="flex justify-between space-x-1 mb-5">
                    <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">
                      参与人员 (127)
                    </div>
                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      href="#0">
                      查看所有
                    </a>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage08}
                              width="32"
                              height="32"
                              alt="User 08"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              张三
                            </span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                          <span className="sr-only">Menu</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="2" />
                            <circle cx="10" cy="16" r="2" />
                            <circle cx="22" cy="16" r="2" />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage01}
                              width="32"
                              height="32"
                              alt="User 01"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              李四
                            </span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                          <span className="sr-only">Menu</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="2" />
                            <circle cx="10" cy="16" r="2" />
                            <circle cx="22" cy="16" r="2" />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage03}
                              width="32"
                              height="32"
                              alt="User 03"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              王五
                            </span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                          <span className="sr-only">Menu</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="2" />
                            <circle cx="10" cy="16" r="2" />
                            <circle cx="22" cy="16" r="2" />
                          </svg>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage05}
                              width="32"
                              height="32"
                              alt="User 05"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              赵六
                            </span>
                          </div>
                        </div>
                        <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                          <span className="sr-only">Menu</span>
                          <svg
                            className="w-8 h-8 fill-current"
                            viewBox="0 0 32 32">
                            <circle cx="16" cy="16" r="2" />
                            <circle cx="10" cy="16" r="2" />
                            <circle cx="22" cy="16" r="2" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 3rd block */}
                <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                  <div className="flex justify-between space-x-1 mb-5">
                    <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">
                      邀请朋友
                    </div>
                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      href="#0">
                      查看所有
                    </a>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <div className="flex items-center justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage02}
                              width="32"
                              height="32"
                              alt="User 02"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              张三三
                            </span>
                          </div>
                        </div>
                        <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                          邀请
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage04}
                              width="32"
                              height="32"
                              alt="User 04"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              李四四
                            </span>
                          </div>
                        </div>
                        <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                          邀请
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage06}
                              width="32"
                              height="32"
                              alt="User 06"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              王五五
                            </span>
                          </div>
                        </div>
                        <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                          邀请
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <div className="grow flex items-center">
                          <div className="relative mr-3">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={UserImage08}
                              width="32"
                              height="32"
                              alt="User 08"
                            />
                          </div>
                          <div className="truncate">
                            <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                              赵六六
                            </span>
                          </div>
                        </div>
                        <button className="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">
                          邀请
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MeetupsPost
