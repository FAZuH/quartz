---
{"publish":true,"aliases":["Using VSCode Live Share in a code-server Instance"],"created":"2025-08-17T21:07:49.979+07:00","modified":"2025-08-24T13:52:03.147+07:00","published":"2025-08-24T13:52:03.147+07:00","cssclasses":"","creation-time":"2025-08-17 21:07","status":"baby","tags":null,"parent":["[[linux]]"]}
---


## Assumptions

This procedure note assumes you have an instance of [linuxserver/code-server](https://github.com/linuxserver/docker-code-server) up and running at `https://code.domain.tld`.

## Procedure

1. Download `.vsix` file of Live Share extension from [here](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/MS-vsliveshare/vsextensions/vsliveshare/1.0.5857/vspackage).
   You may download other versions as long as it is not version `1.0.5940` or above.
	Let the `.vsix` file name be `liveshare.vsix`
2. Upload the `liveshare.vsix` file to the code-server instance.
3. Open and enter a new terminal session in the code-server instance.
4. Install the extension using `code-server --install-extension liveshare.vsix`
5. Enjoy