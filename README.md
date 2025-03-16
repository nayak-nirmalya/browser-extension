# Custom Extensions

Extensions to Reset Audio Volume, Change Audio Track & Toggle Full-Screen.

## Description

The extension automatically sets the volume of media elements (video and audio) to a default value. Changes audio track & toggles fullscreen.

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/nayak-nirmalya/browser-extension.git
```

2. Open your browser and navigate to the extensions page (e.g., `chrome://extensions` for Chrome).
3. Enable "Developer mode" if it is not already enabled.
4. Click on "Load unpacked" and select the directory where you cloned this repository.

## Usage

- Once the extension is installed, it will automatically adjust the volume of media elements on any web page you visit.
- Use <kbd>b</kbd> to cycle through available audio tracks.
- Use <kbd>f</kbd> to toggle fullscreen mode.

## Note

Support for HTML5 video's 'audioTracks' feature varies across browsers. To ensure it functions correctly in your preferred browser, you may need to make the following adjustments.

#### Chrome

- Goto `chrome://flags`
- Enable `#enable-experimental-web-platform-features`
- Restart browser

#### MS Edge

- Goto `edge://flags`
- Enable `#enable-experimental-web-platform-features`
- Restart browser

#### Brave

- Goto `brave://flags`
- Enable `#enable-experimental-web-platform-features`
- Restart browser

#### Firefox

- Goto `about:config`
- Toggle `media.track.enabled` on
- Restart browser

## Files

- `main.js`: Contains the logic for finding and adjusting media elements on the page.
- `manifest.json`: Defines the extension's metadata and configuration.

## Configuration

The following constants in `main.js` can be adjusted to change the extension's behavior:

- `MIN_PLAYBACK_TIME`: The minimum playback time to consider a media element as active.
- `MIN_VOLUME_THRESHOLD`: The minimum volume threshold to consider a media element as active.
- `DEFAULT_VOLUME`: The default volume to set for inactive media elements.

## License

This project is licensed under the MIT License.
