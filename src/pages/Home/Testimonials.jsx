// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import test1 from "../../assets/testimonials/testimonial_1.jpg";
// import test1 from "../../assets/MInimalist landscape [1920x1080].png";
// import test2 from "../../assets/testimonials/testimonial_2.jpg";
// import test3 from "../../assets/testimonials/testimonial_3.jpg";
// import "./Testimonial.css";

// const testimonials = [
//   {
//     id: 1,
//     src: test1,
//     name: "John Doe",
//     content:
//       "This is the first testimonial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     id: 2,
//     // src: test2,
//     name: "Jane Smith",
//     content:
//       "This is the second testimonial. Nulla facilisi. Vivamus sit amet odio et erat.",
//   },
//   {
//     id: 3,
//     // src: test3,
//     name: "Alice Johnson",
//     content:
//       "This is the third testimonial. Curabitur varius justo a metus luctus.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <div className="w-full max-w-screen-xl mx-auto pb-14 custom-carousel">
//       <Carousel
//         showArrows={true}
//         autoPlay={true}
//         interval={1500}
//         infiniteLoop={true}
//         showThumbs={true}
//       >
//         {testimonials.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className="h-1/5 p-12 bg-slate-100 rounded-lg shadow-lg testi-img"
//           >
//             <div>
//               <img src={testimonial.src} alt="testimonial images" />
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Testimonials;

// @flow

import React, { Component } from "react";
import { range } from "range";
import debounce from "debounce";

type DirectionType = "previous" | "next";

type ComponentStateType = {|
  firstVisibleIndex: number,
  maxWidth: number,
|};

/**
 * Calculates the maximum number of items that can fit the container
 * without overflowing.
 */
export const getMaximumAccomodableItemCount = (
  fullWidth: number,
  elementWidth: number,
  elementMargin: number
): number => {
  return Math.floor(fullWidth / (elementWidth + elementMargin));
};

export const isPrevButtonVisible = (firstVisibleIndex: number): boolean => {
  return firstVisibleIndex > 0;
};

export const isNextButtonVisible = (
  totalItems: number,
  firstVisibleIndex: number,
  visibleItemCount: number
): boolean => {
  return firstVisibleIndex < totalItems - visibleItemCount;
};

export const getIndexToScrollTo = (
  direction: DirectionType,
  totalItems: number,
  visibleItemCount: number,
  firstVisibleIndex: number,
  scrollStepDistance: number
): number => {
  let index;

  const itemsBeyondVisible = totalItems - firstVisibleIndex - visibleItemCount;
  const itemsBehindVisible = firstVisibleIndex;

  if (direction === "next") {
    index =
      firstVisibleIndex +
      (itemsBeyondVisible > scrollStepDistance
        ? scrollStepDistance
        : itemsBeyondVisible);
  } else if (direction === "previous") {
    index =
      firstVisibleIndex -
      (itemsBehindVisible > scrollStepDistance
        ? scrollStepDistance
        : itemsBehindVisible);
  } else {
    throw new Error("Unexpected state.");
  }

  return index;
};

export const getVisibleItemCount = (
  totalItems: number,
  firstVisibleIndex: number,
  itemWidth: number,
  itemMargin: number,
  controlWidth: number,
  maxWidth: number
) => {
  let availableWidth;
  let visibleItemCount;

  availableWidth = maxWidth + itemMargin;

  const prevButtonVisible = isPrevButtonVisible(firstVisibleIndex);

  if (prevButtonVisible) {
    availableWidth -= controlWidth;
  }

  visibleItemCount = getMaximumAccomodableItemCount(
    availableWidth,
    itemWidth,
    itemMargin
  );

  const nextButtonVisible = isNextButtonVisible(
    totalItems,
    firstVisibleIndex,
    visibleItemCount
  );

  if (nextButtonVisible) {
    availableWidth -= controlWidth;

    visibleItemCount = getMaximumAccomodableItemCount(
      availableWidth,
      itemWidth,
      itemMargin
    );
  }

  return visibleItemCount;
};

type PropsType = {|
  +children: *,
  +controlWidth: number,
  +firstVisibleIndex: number,
  +itemMargin: number,
  +itemWidth: number,
  +onItemScroll: (index: number) => void,
  +scrollStepDistance: number,
  +style: {
    [key: string]: string,
  },
|};

class Carousel extends Component<PropsType, ComponentStateType> {
  resizeEventListener: () => void;
  wrapperElement: HTMLElement;

  static defaultProps = {
    controlWidth: 30,
    firstVisibleIndex: 0,
    itemMargin: 0,
    itemWidth: 50,
    onItemScroll: () => {},
    scrollStepDistance: null,
  };

  constructor(props: PropsType) {
    super(props);

    this.state = {
      firstVisibleIndex: props.firstVisibleIndex || 0,
      maxWidth: 0,
    };

    this.resizeEventListener = debounce(() => {
      this.setState({
        maxWidth: this.wrapperElement.offsetWidth,
      });
    }, 100);
  }

  componentDidMount() {
    if (!this.wrapperElement) {
      throw new Error("Unexpected state.");
    }

    const maxWidth = this.wrapperElement.offsetWidth;

    this.setState({
      maxWidth,
    });

    window.addEventListener("resize", this.resizeEventListener);
  }

  componentWillUnmount() {
    this.resizeEventListener.clear();

    window.removeEventListener("resize", this.resizeEventListener);
  }

  handleScrollToDirection = (
    direction: DirectionType,
    visibleItemCount: number
  ): void => {
    const index = getIndexToScrollTo(
      direction,
      this.props.children.length,
      visibleItemCount,
      this.state.firstVisibleIndex,
      this.props.scrollStepDistance || visibleItemCount
    );

    this.props.onItemScroll(index);

    this.setState({
      firstVisibleIndex: index,
    });
  };

  getItemElement = (
    item: React$Element<any>,
    key: string,
    index: number,
    visibleItemCount: number
  ): React$Element<any> | null => {
    const visibleItemIndeces = range(
      this.state.firstVisibleIndex,
      visibleItemCount + this.state.firstVisibleIndex
    );
    const isVisible = visibleItemIndeces.includes(index);
    const isLastAmongVisible =
      visibleItemIndeces.length === visibleItemIndeces.indexOf(index) + 1;

    if (!isVisible) {
      return null;
    }

    return (
      <li
        key={key}
        style={{
          boxSizing: "border-box",
          display: "flex",
          listStyleType: "none",
          marginRight: isLastAmongVisible ? 0 : this.props.itemMargin,
          width: this.props.itemWidth,
        }}
      >
        {item}
      </li>
    );
  };

  captureWrapperElementReference = (element: *) => {
    if (element) {
      this.wrapperElement = element;
    }
  };

  render() {
    const { controlWidth, itemMargin, children, itemWidth } = this.props;
    const items = children;
    const itemCount = items.length;
    const visibleItemCount = getVisibleItemCount(
      itemCount,
      this.state.firstVisibleIndex,
      itemWidth,
      itemMargin,
      controlWidth,
      this.state.maxWidth
    );
    const prevButtonVisible =
      visibleItemCount === 0
        ? false
        : isPrevButtonVisible(this.state.firstVisibleIndex);
    const nextButtonVisible =
      visibleItemCount === 0
        ? false
        : isNextButtonVisible(
            itemCount,
            this.state.firstVisibleIndex,
            visibleItemCount
          );

    const carouselStyle = {
      boxSizing: "border-box",
      display: "flex",
      flexFlow: "row wrap",
      flexGrow: 1,
      overflow: "hidden",
      ...this.props.style,
    };

    const navigationButtonStyle = {
      boxSizing: "border-box",
      height: "inherit",
      margin: 0,
      padding: 0,
      width: controlWidth,
    };

    const navigationButtonPreviousStyle = {
      ...navigationButtonStyle,
      display: prevButtonVisible ? "flex" : "none",
    };

    const navigationButtonNextStyle = {
      ...navigationButtonStyle,
      display: nextButtonVisible ? "flex" : "none",
    };

    const bodyStyle = {
      display: "flex",
      flexFlow: "row wrap",
      margin: 0,
      padding: 0,
    };

    return (
      <div
        className="react-carousel"
        ref={this.captureWrapperElementReference}
        style={carouselStyle}
      >
        <div
          className="react-carousel__navigation-button react-carousel__navigation-button--previous"
          onClick={() => {
            this.handleScrollToDirection("previous", visibleItemCount);
          }}
          style={navigationButtonPreviousStyle}
        />
        <ul style={bodyStyle}>
          {items.map((item, index) => {
            if (!item.key) {
              throw new Error(
                'react-carousel children must have a "key" property. https://facebook.github.io/react/docs/lists-and-keys.html'
              );
            }

            return this.getItemElement(item, item.key, index, visibleItemCount);
          })}
        </ul>
        <div
          className="react-carousel__navigation-button react-carousel__navigation-button--next"
          onClick={() => {
            this.handleScrollToDirection("next", visibleItemCount);
          }}
          style={navigationButtonNextStyle}
        />
      </div>
    );
  }
}

export default Carousel;
