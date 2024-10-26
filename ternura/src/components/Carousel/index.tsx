import {FC, useRef, useState, useCallback, useEffect} from 'react';
import Carousel from 'react-gallery-carousel';
import Props from './Carousel.props';
import 'react-gallery-carousel/dist/index.css';
import Image, {StaticImageData} from 'next/image';
import LeftSliderIcon from '../icons/LeftSliderIcon';
import RightSliderIcon from '../icons/RightSliderIcon';
import CrossSliderIcon from '../icons/CrossSliderIcon';
import ActiveDotIcon from '../icons/ActiveDotIcon';
import PassiveDotIcon from '../icons/PassiveDotIcon';
import {useRouter} from 'next/navigation';

const MyCarousel: FC<Props> = ({picturesSrc, className, ...props}) => {
  const cur = useRef<HTMLDivElement>(null);
  const image = useRef(null);
  const [classNameCustom, setClassName] = useState('');
  const [curIndex, setCurIndex] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => {
      if (isFullScreen && event.key === 'Escape') {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen]);

  useEffect(() => {
    const image_obg = image.current;

    if (image_obg) {
      if (isFullScreen) {
        setClassName('!w-fit');
      } else {
        setClassName('!w-full');
      }
    }
  }, [isFullScreen, curIndex, cur, picturesSrc.length]);

  useEffect(() => {
    try {
      const elm = cur.current?.querySelector<HTMLElement>('.__JnHV');

      if (elm) {
        elm.innerText = `${curIndex}/${picturesSrc.length}`;
        elm.style.borderRadius = '3px';
        elm.style.fontSize = '12px';
        elm.style.color = 'rgba(255,255,255,1)';
        elm.style.background = 'rgba(0,0,0,0.4)';
        elm.style.fontWeight = '400';
        elm.style.opacity = '1';
        elm.style.lineHeight = '1';
        elm.style.paddingBlock = '6px';
        elm.style.paddingInline = '10px';
        elm.style.width = '100%';
        elm.style.marginBottom = '10px';
        elm.style.marginRight = '2px';
      }
    } catch {
      console.log('error on cur');
    }
  }, [picturesSrc.length, curIndex, cur]);

  return (
    <div
      ref={cur}
      className='w-full min-w-full max-w-full h-full min-h-[270px] hidden md:inline-block'>
      <Carousel
        className={`px-7 py-6 rounded-2xl !cursor-pointer ${className}`}
        hasMediaButton={false}
        hasDotButtons={false}
        index={curIndex - 1}
        hasSizeButtonAtMax='topRight'
        hasSizeButton={false}
        shouldMaximizeOnClick
        transitionDurationMin={75}
        transitionDurationMax={100}
        shouldLazyLoad
        minIcon={CrossSliderIcon}
        maxIcon={CrossSliderIcon}
        shouldSwipeOnMouse
        hasIndexBoard='bottomRight'
        hasCaptions={false}
        onIndexChange={({curIndex, curIndexForDisplay}) => {
          setCurIndex(curIndexForDisplay);
        }}
        thumbnailHeight='25%'
        thumbnailWidth='33%'
        objectFit='cover'
        objectFitAtMax='contain'
        thumbnails={picturesSrc.map((src, index) => {
          return (
            <div
              key={index}
              className={`h-full  w-full rounded-[128px] overflow-hidden object-cover aspect-[9/5]  `}>
              <Image
                src={src}
                alt={src}
                width={370}
                height={200}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          );
        })}
        leftIcon={<LeftSliderIcon />}
        rightIcon={<RightSliderIcon />}
        shouldMinimizeOnClick
        activeIcon={<ActiveDotIcon />}
        passiveIcon={<PassiveDotIcon />}
        hasThumbnailsAtMax={false}
        {...props}>
        {picturesSrc.map((src, index) => {
          return (
            <div
              key={index}
              className={`relative h-full w-full rounded-xl overflow-hidden aspect-[9/5] `}>
              {isFullScreen && (
                <div
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(40px)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                  }}
                />
              )}

              <Image
                src={src}
                alt={src}
                ref={image}
                width={270}
                height={200}
                className={`mx-auto object-cover ${classNameCustom}`}
                style={{
                  maxWidth: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
