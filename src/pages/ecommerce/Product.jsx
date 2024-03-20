import React, { useState } from 'react'

import Sidebar from '../../partials/Sidebar'
import Header from '../../partials/Header'

import ProductImage from '../../images/product-image.jpg'
import User03 from '../../images/user-32-03.jpg'
import User04 from '../../images/user-32-04.jpg'
import User05 from '../../images/user-32-05.jpg'
import User07 from '../../images/user-32-07.jpg'
import Related01 from '../../images/related-product-01.jpg'
import Related02 from '../../images/related-product-02.jpg'
import Related03 from '../../images/related-product-03.jpg'

function Product() {
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
                <div className="mb-3">
                  <a
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    href="#0">
                    &lt;- 返回新闻列表
                  </a>
                </div>
                <header className="mb-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">
                    社工园丁项目在本地社区取得显著成效 ✨
                  </h1>
                  <p>
                    社工园丁项目自去年启动以来，已经在本地社区产生了深远的影响。该项目旨在提升社区成员的生活质量，特别是针对弱势群体，通过一系列创新服务和活动，为他们带来了实实在在的帮助和支持。
                  </p>
                </header>

                {/* Meta */}
                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                  {/* Author */}
                  <div className="flex items-center sm:mr-4">
                    <a className="block mr-2 shrink-0" href="#0">
                      <img
                        className="rounded-full"
                        src={User07}
                        width="32"
                        height="32"
                        alt="User 04"
                      />
                    </a>
                    <a
                      className="block text-sm font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap"
                      href="#0">
                      李明
                    </a>
                  </div>
                  {/* Right side */}
                  <div className="flex flex-wrap items-center sm:justify-end space-x-4">
                    {/* Tag */}
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mr-2">
                      {/* Stars */}
                      <div className="flex space-x-1">
                        <button>
                          <span className="sr-only">1 star</span>
                          <svg
                            className="w-4 h-4 fill-current text-amber-500"
                            viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">2 stars</span>
                          <svg
                            className="w-4 h-4 fill-current text-amber-500"
                            viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">3 stars</span>
                          <svg
                            className="w-4 h-4 fill-current text-amber-500"
                            viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">4 stars</span>
                          <svg
                            className="w-4 h-4 fill-current text-amber-500"
                            viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                        <button>
                          <span className="sr-only">5 stars</span>
                          <svg
                            className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600"
                            viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                        </button>
                      </div>
                      {/* Rate */}
                      <div className="inline-flex text-sm font-medium text-amber-600">
                        4.2
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <figure className="mb-6">
                  <img
                    className="w-full rounded-sm"
                    src={ProductImage}
                    width="640"
                    height="360"
                    alt="Product"
                  />
                </figure>

                {/* Product content */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    正文
                  </h2>
                  <p className="mb-6">
                    在过去的一年中，社工园丁项目成功举办了多次健康与幸福工作坊，参与人数超过200人；开展了面向青少年的创新艺术项目，吸引了本地50多位青少年积极参与；为60岁以上的老年人举办了生活技能分享会，受益老人达到100人；还组织了社区环保行动日，动员了社区成员共同参与环境保护活动。
                  </p>
                  <p className="mb-6">
                    其中，心理健康与幸福工作坊尤为受到欢迎，参加者张女士分享道：“这次工作坊让我学会了很多管理压力和情绪的技巧，我感觉自己变得更加积极乐观了。”
                  </p>
                  <ul className="mb-6">
                    <p>
                      此外，社工园丁项目还注重培养社区成员之间的互助精神。通过组织志愿者参与项目的实施，不仅增强了社区的凝聚力，还促进了成员之间的相互理解和支持。
                    </p>
                  </ul>
                  <ul className="mb-6">
                    <p>
                      {' '}
                      随着项目的持续推进，社工园丁计划在未来扩大服务范围，增设更多面向特殊需求群体的服务项目，希望能够惠及更多社区成员，共同建设一个更加和谐、健康的社区环境。
                    </p>
                  </ul>
                </div>

                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                {/* Reviews */}
                <div>
                  <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                    评论区 (44)
                  </h2>
                  <ul className="space-y-5 my-6">
                    {/* Review */}
                    <li>
                      <div className="flex items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full mr-3"
                          src={User07}
                          width="32"
                          height="32"
                          alt="User 07"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            周莉莉
                          </div>
                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            {/* Stars */}
                            <div className="flex space-x-1">
                              <button>
                                <span className="sr-only">1 star</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">2 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">3 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">4 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">5 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                            </div>
                            {/* Rate */}
                            <div className="inline-flex text-sm font-medium text-amber-600">
                              4.6
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm italic">
                        “社工园丁项目真的改变了我们社区的面貌。我参加了心理健康工作坊，收获巨大，感觉自己的心态更健康了。”
                      </div>
                    </li>
                    {/* Review */}
                    <li>
                      <div className="flex items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full mr-3"
                          src={User05}
                          width="32"
                          height="32"
                          alt="User 05"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            王大明
                          </div>
                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            {/* Stars */}
                            <div className="flex space-x-1">
                              <button>
                                <span className="sr-only">1 star</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">2 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">3 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">4 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">5 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                            </div>
                            {/* Rate */}
                            <div className="inline-flex text-sm font-medium text-amber-600">
                              4.9
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm italic">
                        “作为一名高中生，我参与了青少年创新艺术项目，这对我来说是一次非常宝贵的体验。它不仅激发了我的创造力，还让我认识到了团队合作的重要性。”
                      </div>
                    </li>
                    {/* Review */}
                    <li>
                      <div className="flex items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full mr-3"
                          src={User03}
                          width="32"
                          height="32"
                          alt="User 03"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            刘阿姨
                          </div>
                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            {/* Stars */}
                            <div className="flex space-x-1">
                              <button>
                                <span className="sr-only">1 star</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">2 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">3 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">4 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">5 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-slate-300 dark:text-slate-600"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                            </div>
                            {/* Rate */}
                            <div className="inline-flex text-sm font-medium text-amber-600">
                              4.4
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm italic">
                        “参加老年人生活技能分享会让我感到非常温暖。在那里，我学到了很多实用技巧，也认识了很多新朋友，生活因此变得更加充实。”
                      </div>
                    </li>
                    {/* Review */}
                    <li>
                      <div className="flex items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full mr-3"
                          src={User04}
                          width="32"
                          height="32"
                          alt="User 04"
                        />
                        <div>
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                            陈先生
                          </div>
                          {/* Rating */}
                          <div className="flex items-center space-x-2">
                            {/* Stars */}
                            <div className="flex space-x-1">
                              <button>
                                <span className="sr-only">1 star</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">2 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">3 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">4 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                              <button>
                                <span className="sr-only">5 stars</span>
                                <svg
                                  className="w-4 h-4 fill-current text-amber-500"
                                  viewBox="0 0 16 16">
                                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                                </svg>
                              </button>
                            </div>
                            {/* Rate */}
                            <div className="inline-flex text-sm font-medium text-amber-600">
                              4.9
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm italic">
                        “社区环保行动日让我深刻认识到保护环境的重要性。我和我的家人都参与了这次活动，我们一起为美化我们的社区做出了贡献。”
                      </div>
                    </li>
                  </ul>
                  {/* Load More */}
                  <div className="text-center">
                    <button className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">
                      加载更多
                    </button>
                  </div>
                </div>

                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

                <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Product
