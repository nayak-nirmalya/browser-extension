# Custom Extensions

This is a browser extension that resets the audio volume of media elements on web pages.

## Description

The extension automatically sets the volume of media elements (video and audio) to a default value if they are paused, muted, or have a low volume.

## Installation

1. Clone this repository to your local machine.
2. Open your browser and navigate to the extensions page (e.g., `chrome://extensions` for Chrome).
3. Enable "Developer mode" if it is not already enabled.
4. Click on "Load unpacked" and select the directory where you cloned this repository.

## Usage

Once the extension is installed, it will automatically adjust the volume of media elements on any web page you visit.

## Files

- `main.js`: Contains the logic for finding and adjusting media elements on the page.
- `manifest.json`: Defines the extension's metadata and configuration.

## Configuration

The following constants in `main.js` can be adjusted to change the extension's behavior:

- `MIN_PLAYBACKTIME`: The minimum playback time to consider a media element as active.
- `MIN_VOLUME_THRESHOLD`: The minimum volume threshold to consider a media element as active.
- `DEFAULT_VOLUME`: The default volume to set for inactive media elements.

## License

This project is licensed under the MIT License.
