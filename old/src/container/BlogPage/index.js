import React from 'react'
import Layout from '../../component/Layout'
import BlogItem from './BlogItem'
import Footer from '../../component/Footer'

const blogData = [
    {
        title: "8 Inspiring Ways to Wear Dresses in the Winter",
        subtitle: `Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce eget dictum tortor.
        Donec dictum vitae sapien eu varius`,
        imageUrl: 'images/blog-04.jpg',
        date: `22,June 2020`,
        author: 'Admin',
        tag: 'StreetStyle, Fashion, Couple',
        comment: '8 Comments'
    },
    {
        title: "8 Inspiring Ways to Wear Dresses in the Winter",
        subtitle: `Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Fusce eget dictum tortor.
        Donec dictum vitae sapien eu varius`,
        date: `22,June 2020`,
        imageUrl: 'images/blog-06.jpg',
        author: 'Admin',
        tag: 'StreetStyle, Fashion, Couple',
        comment: '8 Comments'
    },

]
export default function index() {
    return (
        <div>
            <Layout>
                <div style={{ height: '84px' }}></div>
                <section class="bg-img1 txt-center p-lr-15 p-b-92 p-t-92" style={{ backgroundImage: `url('images/bg-02.jpg')` }}>
                    <h2 class="ltext-105 cl0 txt-center">
                        Blog
                    </h2>
                </section>
                <section class="bg0 p-t-62 p-b-1">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-lg-9 p-b-1">
                                <div class="p-r-45 p-r-0-lg">
                                    {blogData.map((blog, key) => (
                                        <BlogItem
                                            key={key}
                                            title={blog.title}
                                            subtitle={blog.subtitle}
                                            author={blog.author}
                                            tag={blog.tag}
                                            image={blog.imageUrl}
                                            comment={blog.comment}
                                        />
                                    ))}
                                </div>
                                <div class="flex-l-m flex-w w-full p-t-10 m-lr--7">
                                    <a
                                        href="#"
                                        class="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
                                    >
                                        1
                                    </a>
                                    <a href="#" class="flex-c-m how-pagination1 trans-04 m-all-7">
                                        2
                                    </a>
                                </div>
                            </div>
                            {/* slide Menu */}
                            <div class="col-md-4 col-lg-3 p-b-80">
                                <div class="side-menu">
                                    <div class="bor17 of-hidden pos-relative">
                                        <input
                                            class="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                                            type="text"
                                            name="search"
                                            placeholder="Search"
                                        />
                                        <button
                                            class="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04"
                                        >
                                            <i class="zmdi zmdi-search"></i>
                                        </button>
                                    </div>
                                    <div class="p-t-55">
                                        <h4 class="mtext-112 cl2 p-b-33">Categories</h4>
                                        <ul>
                                            <li class="bor18">
                                                <a
                                                    href="#"
                                                    class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                >
                                                    Fashion
                                                </a>
                                            </li>
                                            <li class="bor18">
                                                <a
                                                    href="#"
                                                    class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                >
                                                    Beauty
                                                </a>
                                            </li>
                                            <li class="bor18">
                                                <a
                                                    href="#"
                                                    class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                >
                                                    Street Style
                                                </a>
                                            </li>
                                            <li class="bor18">
                                                <a
                                                    href="#"
                                                    class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                >
                                                    Life Style
                                                </a>
                                            </li>
                                            <li class="bor18">
                                                <a
                                                    href="#"
                                                    class="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                                                >
                                                    DIY & Crafts
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="p-t-65">
                                        <h4 class="mtext-112 cl2 p-b-33">Featured Products</h4>
                                        <ul>
                                            <li class="flex-w flex-t p-b-30">
                                                <a href="#" class="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/product-min-01.jpg" alt="PRODUCT" />
                                                </a>
                                                <div class="size-215 flex-col-t p-t-8">
                                                    <a href="#" class="stext-116 cl8 hov-cl1 trans-04">
                                                        White Shirt With Pleat Detail Back
                                                    </a>
                                                    <span class="stext-116 cl6 p-t-20"> $19.00 </span>
                                                </div>
                                            </li>
                                            <li class="flex-w flex-t p-b-30">
                                                <a href="#" class="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/product-min-02.jpg" alt="PRODUCT" />
                                                </a>
                                                <div class="size-215 flex-col-t p-t-8">
                                                    <a href="#" class="stext-116 cl8 hov-cl1 trans-04">
                                                        Converse All Star Hi Black Canvas
                                                    </a>
                                                    <span class="stext-116 cl6 p-t-20"> $39.00 </span>
                                                </div>
                                            </li>
                                            <li class="flex-w flex-t p-b-30">
                                                <a href="#" class="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                                                    <img src="images/product-min-03.jpg" alt="PRODUCT" />
                                                </a>
                                                <div class="size-215 flex-col-t p-t-8">
                                                    <a href="#" class="stext-116 cl8 hov-cl1 trans-04">
                                                        Nixon Porter Leather Watch In Tan
                                                    </a>
                                                    <span class="stext-116 cl6 p-t-20"> $17.00 </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="p-t-55">
                                        <h4 class="mtext-112 cl2 p-b-20">Archive</h4>
                                        <ul>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> July 2018 </span>
                                                    <span> (9) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> June 2018 </span>
                                                    <span> (39) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> May 2018 </span>
                                                    <span> (29) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> April 2018 </span>
                                                    <span> (35) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> March 2018 </span>
                                                    <span> (22) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> February 2018 </span>
                                                    <span> (32) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> January 2018 </span>
                                                    <span> (21) </span>
                                                </a>
                                            </li>
                                            <li class="p-b-7">
                                                <a
                                                    href="#"
                                                    class="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                                                >
                                                    <span> December 2017 </span>
                                                    <span> (26) </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="p-t-50">
                                        <h4 class="mtext-112 cl2 p-b-27">Tags</h4>
                                        <div class="flex-w m-r--5">
                                            <a
                                                href="#"
                                                class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Fashion
                                            </a>
                                            <a
                                                href="#"
                                                class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Lifestyle
                                            </a>
                                            <a
                                                href="#"
                                                class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Denim
                                            </a>
                                            <a
                                                href="#"
                                                class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Streetstyle
                                            </a>
                                            <a
                                                href="#"
                                                class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Crafts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </Layout>
        </div>
    )
}
