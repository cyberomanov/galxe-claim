function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const delayTime = 1000;
const divSelector = 'div.text-left.flex.gap-3.sm\\:gap-4.items-center.w-full.px-4.sm\\:px-6.py-4.sm\\:py-\\[18px\\].cursor-pointer';
const svgPathSelector = 'path[d="M2.475 10A7.525 7.525 0 0 1 16.14 5.65h-2.89a.6.6 0 1 0 0 1.2h4.25a.6.6 0 0 0 .6-.6V2a.6.6 0 1 0-1.2 0v2.66a8.725 8.725 0 1 0 1.154 8.702.6.6 0 1 0-1.108-.463A7.527 7.527 0 0 1 2.475 10"]';

const clickElementsWithDelay = async () => {
  const elements = document.querySelectorAll(divSelector);

  for (let element of elements) {
    const svgs = element.querySelectorAll('svg');

    for (let svg of svgs) {
      const path = svg.querySelector(svgPathSelector);

      if (path) {
        const event = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        svg.dispatchEvent(event);

        await delay(delayTime);
        break;
      }
    }
  }
};

clickElementsWithDelay();
