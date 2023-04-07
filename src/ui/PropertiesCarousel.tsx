import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card } from '../ui/Card';
import { Property } from '../admin/interfaces/Property';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  landscape: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 485 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 485, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
};

interface Props {
  properties: Property[];
}

export const PropertiesCarousel: FC<Props> = ({ properties }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        properties.map((property: Property) => (
          <Card
            title={property.title}
            image={property.img}
            content={property.description}
          />
        ))
      }
    </Carousel>
  )
}
