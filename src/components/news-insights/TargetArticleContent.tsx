// This is the content of the article that displays when clicking on a news article.

import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import {
  WhiteFacebookIcon,
  WhiteLinkedInIcon,
  WhiteTwitterIcon,
  WhiteWhatsAppIcon,
} from '../common/Icon';
import { NewsContent, NewsArticle, NewsDetails } from '@/types/News.type';

import Link from 'next/link';

const IMAGE_WIDTH_GRID = 400;
const IMAGE_HEIGHT_GRID = 448;
const IMAGE_WIDTH_ARTICLE = 1140;
const IMAGE_HEIGHT_ARTICLE = 556;
const AOS_DURATION = 800;
const AOS_DELAY = 200;
const AOS_OFFSET = [100, 200];

const TargetArticleContent = ({ newsDetailData }: NewsDetails) => {
  return (
    <>
      {newsDetailData?.data?.map((newsItem: NewsArticle, i: number) => {
        // console.log('newsItem!!!!', newsItem);
        const imagePath = 'https://vidalco.in';
        const url = newsItem.image.url;
        const combinedUrl = url ? `${imagePath}${url}` : null;
        return (
          <div key={i}>
            <section className="lg:pb-12 xl:pb-117 relative">
              {/* GRID-LINE IMG */}
              <Image
                className="lg:w-462 lg:h-441 w-40 lg:-top-28 lg:-left-10 absolute -z-20 opacity-50"
                src="/assets/img/svg/news-grid-line.svg"
                width={IMAGE_WIDTH_GRID}
                height={IMAGE_HEIGHT_GRID}
                alt=""
              />
              <div className="container md:max-w-full xl:max-w-1140 2xl:max-w-1320 mx-auto px-3 relative z-10">
                <div className="xl:mt-190 lg:mt-108 md:mt-60pixel mt-48pixel relative z-20 before:content-[''] before:absolute before:w-457 before:h-457 before:-top-24 before:-left-40 before:bg-shadow_blue before:blur-111 before:opacity-25 before:-z-10 before:rounded-full">
                  {combinedUrl && (
                    <Image
                      data-aos="zoom-in"
                      data-aos-duration={AOS_DURATION}
                      data-aos-easing="linear"
                      data-aos-delay={AOS_DELAY}
                      data-aos-offset={AOS_OFFSET[0]}
                      src={combinedUrl}
                      width={IMAGE_WIDTH_ARTICLE}
                      height={IMAGE_HEIGHT_ARTICLE}
                      alt="players"
                      className="w-full max-h-850 object-cover rounded-2xl"
                    />
                  )}

                  <div className="lg:mt-12 md:mt-7 mt-5 relative z-20 before:content-[''] before:absolute before:w-448 before:h-448 before:-top-20 before:-end-60 before:bg-shadow_blue before:blur-111 before:opacity-25 before:-z-10 before:rounded-full">
                    <h3
                      data-aos="fade-up"
                      data-aos-duration={AOS_DURATION}
                      data-aos-easing="linear"
                      data-aos-delay={AOS_DELAY}
                      data-aos-offset={AOS_OFFSET[1]}
                      className="font-HelveticaNeueMedium text-primary font-medium text-basemd sm:text-lg leading-8 md:leading-39 sm:text-start text-center"
                    >
                      {/* {newsItem.title} */}
                      {/* ^^^^^^WE DONT NEED THIS BECAUSE WE PUT THE TITLE IN [slug].js in the heading property for hero */}
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-duration={AOS_DURATION}
                      data-aos-easing="linear"
                      data-aos-delay={AOS_DELAY}
                      data-aos-offset={AOS_OFFSET[1]}
                      className="font-Segoe text-offwhite mt-2 font-normal text-base sm:text-start text-center"
                    >
                      by: {newsItem.author?.fullName} &bull;{' '}
                      {moment(newsItem.createdAt).format('DD MMM YY')}
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-duration={AOS_DURATION}
                      data-aos-easing="linear"
                      data-aos-delay={AOS_DELAY}
                      data-aos-offset={AOS_OFFSET[1]}
                      className="font-Segoe font-normal text-md lg:mt-4 mt-2 leading-7 text-offwhite sm:text-start text-center"
                    >
                      {/* {newsItem.previewSummary} */}
                    </p>
                    {newsItem?.content?.map(
                      (obj: NewsContent, index: number) => {
                        return (
                          <div key={index}>
                            <h3
                              key={index}
                              data-aos="fade-up"
                              data-aos-duration={AOS_DURATION}
                              data-aos-easing="linear"
                              data-aos-delay={AOS_DELAY}
                              data-aos-offset={AOS_OFFSET[1]}
                              className="font-HelveticaNeueMedium text-primary font-medium text-basemd mt-20pixel sm:mt-6 sm:text-lg leading-8 md:leading-39 sm:text-start text-center"
                            >
                              {obj.subheading}
                            </h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: obj.body,
                              }}
                              data-aos="fade-up"
                              data-aos-duration={AOS_DURATION}
                              data-aos-easing="linear"
                              data-aos-delay={AOS_DELAY}
                              data-aos-offset={AOS_OFFSET[1]}
                              className="font-Segoe font-normal text-md lg:mt-10pixel mt-2 leading-7 text-offwhite sm:text-start text-center"
                            ></div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div
                  className="flex items-center gap-14 mt-5 sm:mt-8 justify-center sm:justify-start"
                  data-aos="fade-up"
                  data-aos-duration={AOS_DURATION}
                  data-aos-easing="linear"
                  data-aos-delay={AOS_DELAY}
                  data-aos-offset={AOS_OFFSET[1]}
                >
                  <Link
                    className="hover:-translate-y-1 duration-200"
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${'https://athleti.fi/'}news/${newsDetailData.data[0].slug}`}
                  >
                    <WhiteFacebookIcon />
                  </Link>
                  <Link
                    className="hover:-translate-y-1 duration-200"
                    target="_blank"
                    href={`https://twitter.com/intent/tweet?text=${newsDetailData.data[0].slug}&url=${'https://athleti.fi/'}news/${newsDetailData.data[0].slug}`}
                  >
                    <WhiteTwitterIcon />
                  </Link>
                  <Link
                    className="hover:-translate-y-1 duration-200"
                    target="_blank"
                    href={`https://api.whatsapp.com/send?text=${newsDetailData.data[0].slug}&url=${'https://athleti.fi/'}news/${newsDetailData.data[0].slug}`}
                  >
                    <WhiteWhatsAppIcon />
                  </Link>
                  <Link
                    className="hover:-translate-y-1 duration-200"
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://athleti.fi/news/${newsDetailData.data[0].slug}`}
                  >
                    <WhiteLinkedInIcon />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default TargetArticleContent;
