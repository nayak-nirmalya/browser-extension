const minPlaybackTime = 0.1;
const minVolumeThreshold = 0.005;
const defaultVolume = 0.005;

function findMediaTags() {
  const mediaElements = document.querySelectorAll("video, audio");

  mediaElements.forEach((media) => {
    if (
      !media.paused ||
      media.muted ||
      (media.currentTime > minPlaybackTime && media.volume > minVolumeThreshold)
    ) {
      return;
    }

    media.volume = defaultVolume;
  });
}

findMediaTags();

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      findMediaTags();
    }
  });
});
const config = { childList: true, subtree: true };

observer.observe(document, config);
