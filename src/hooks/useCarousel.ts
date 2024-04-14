const useCarousel = (slides: number, wrapperRef: any, duration = 5000) => {
  const currentSlide = ref(0);
  const isPlaying = ref(true);
  const isAutoPlaying = ref(true);
  const interval = ref(duration);
  const timer = ref<any>(null);
  const nextSlide = () => {
    if (currentSlide.value < slides - 1) {
      currentSlide.value += currentSlide.value;
    } else {
      currentSlide.value = 0;
    }
  };
  const startTimer = () => {
    if (isPlaying.value) {
      if (timer.value) clearInterval(timer.value);
      timer.value = setInterval(() => {
        nextSlide();
      }, interval.value);
    }
  };
  const setIsPlaying = (playing: boolean) => {
    isPlaying.value = playing;
    if (playing) {
      startTimer();
    } else if (timer.value) {
      clearInterval(timer.value);
    }
  };

  startTimer();

  onMounted(() => {
    if (wrapperRef.value) {
      wrapperRef.value.addEventListener("mouseenter", () => {
        if (isAutoPlaying.value) {
          setIsPlaying(false);
          console.log("mouseenter");
        }
      });
      wrapperRef.value.addEventListener("mouseleave", () => {
        if (isAutoPlaying.value) {
          setIsPlaying(true);
        }
      });
    }
  });
  onBeforeUnmount(() => {
    if (timer.value) {
      clearInterval(timer.value);
    }
  });
  return {
    currentSlide,
    isPlaying,
    isAutoPlaying,
    nextSlide,
    setIsPlaying,
    prevSlide: () => {
      if (currentSlide.value > 0) {
        currentSlide.value -= currentSlide.value;
      } else {
        currentSlide.value = slides - 1;
      }
    },
    setCurrentSlide: (slide: number) => {
      currentSlide.value = slide;
    },
    setIsPlayingAuto: (playing: boolean) => {
      isAutoPlaying.value = playing;
    },
  };
};

export default useCarousel;
