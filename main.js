const MIN_PLAYBACKTIME = 0.1;
const MIN_VOLUME_THRESHOLD = 0.005;
const DEFAULT_VOLUME = 0.005;

function findMediaTags() {
  const mediaElements = document.querySelectorAll("video, audio");

  mediaElements.forEach((media) => {
    if (
      !media.paused ||
      media.muted ||
      (media.currentTime > MIN_PLAYBACKTIME &&
        media.volume > MIN_VOLUME_THRESHOLD)
    ) {
      return;
    }

    media.volume = DEFAULT_VOLUME;
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

function handleKeyDown(event) {
  const video = document.querySelector("video");
  if (!video) return;

  switch (event.key) {
    case "b":
      toggleAudioTrack(video);
      break;
    case "f":
      toggleFullscreen(video);
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);

function toggleAudioTrack(video) {
  if (!video.audioTracks || video.audioTracks.length <= 1) return;

  const { currentTime, paused } = video;
  const enabledTrackIndex = findEnabledTrackIndex(video.audioTracks);
  const nextTrackIndex =
    enabledTrackIndex === -1
      ? 0
      : (enabledTrackIndex + 1) % video.audioTracks.length;

  if (enabledTrackIndex !== -1) {
    video.audioTracks[enabledTrackIndex].enabled = false;
  }
  video.audioTracks[nextTrackIndex].enabled = true;

  video.currentTime = currentTime;
  if (!paused) video.play();
}

function findEnabledTrackIndex(audioTracks) {
  for (let index = 0; index < audioTracks.length; index++) {
    if (audioTracks[index].enabled) {
      return index;
    }
  }
  return -1;
}

function toggleFullscreen(video) {
  if (isFullscreen()) {
    exitFullscreen();
  } else {
    requestFullscreen(video);
  }
}

function isFullscreen() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
}

function exitFullscreen() {
  document.exitFullscreen?.() ||
    document.webkitExitFullscreen?.() ||
    document.mozCancelFullScreen?.() ||
    document.msExitFullscreen?.();
}

function requestFullscreen(video) {
  video.requestFullscreen?.() ||
    video.webkitRequestFullscreen?.() ||
    video.mozRequestFullScreen?.() ||
    video.msRequestFullscreen?.();
}
