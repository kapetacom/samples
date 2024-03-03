# kapeta/sample-desktop-electron

Kapeta Desktop block implemented using Language Target "React".

See the [kapeta.md](kapeta.md) readme for more information.

## Prerequisites
- NodeJS 20+

## Setup

To prepare/setup the block, run the following command:

```bash
npm install
```

## Running

To run the block in development mode, run the following command:

```bash
npm run start:dev
```

Production mode for desktop apps means packaging the block as binary.

The following will build a package for your current OS
```bash
npm run package
```

There are variants of package available for each OS:
```bash
npm run package:win
npm run package:mac
npm run package:linux
``` 

## Publishing and Signing
For Windows and Mac to work correctly you need to sign the binaries.

Linux doesn't require signing - but still needs publishing.

These steps will also enable auto-updates for your app using Github's release feature.

### Windows:
On windows you the way you sign depends on where you've bought your code signing certificate.

The below is an example using SSL.com and Github Actions:
```yaml
name: Publish artifacts
on:
  release:
    types:
      - created
jobs:
  publish_win:
      runs-on: windows-latest
      steps:
        - name: Checkout git repo
          uses: actions/checkout@v3
    
        - name: Install Node and NPM
          uses: actions/setup-node@v3
          with:
            node-version: 18
            cache: npm
    
        - name: Install and build
          run: |
            npm install
            npm run postinstall
            npm run build
    
        - name: Build artifacts
          run: |
            npm exec electron-builder -- --publish never --win
    
        - id: get_version
          uses: battila7/get-version-action@v2
    
        - name: Sign Artifact with CodeSignTool
          uses: sslcom/esigner-codesign@develop
          with:
            # Sign and timestamp code object.
            command: sign
            # SSL.com account username
            username: $
            # SSL.com account password.
            password: $
            # Credential ID for signing certificate.
            credential_id: $
            # OAuth TOTP Secret (https://www.ssl.com/how-to/automate-esigner-ev-code-signing)
    
            totp_secret: $
            dir_path: ${GITHUB_WORKSPACE}/release/build
            output_path: ${GITHUB_WORKSPACE}/release/signed
            file_path: '${GITHUB_WORKSPACE}/release/build/ElectronDesktopSample Setup $.exe'
            # Scan code before sign
            malware_block: false
            # Environment Name, For Production 'PROD' or For Staging 'TEST'
            environment_name: PROD

        - name: Copy latest.yml
          run: cp release/build/latest.yml release/signed/latest.yml
    
        - name: Recalculate hash
          run: npm run recalculate-hash release/signed/latest.yml
    
        - name: Upload binaries to release
          uses: svenstaro/upload-release-action@v2
          with:
            prerelease: $
            repo_token: $
            file: release/signed/*
            tag: $
            overwrite: true
            file_glob: true
            repo_name: github-owner/repo-name
            body: |
              **Changes:**
              $

```

### Mac:
For Mac you need to sign using Apple's codesign tool.

For this you need to sign up for an Apple Developer account and create a certificate.

The below is an example using Github Actions:
```yaml
name: Publish artifacts
on:
  release:
    types:
      - created
jobs:  
  publish_mac:
    runs-on: macos-latest
    steps:
      - name: Checkout git repo
        uses: actions/checkout@v3

      - uses: actions/setup-python@v4
        with:
          # This is required for signing/notarization
          # Latest macos 12 runner bumped python from 3.11.5 to 3.12.0 which seems to break things
          # https://github.com/actions/runner-images/releases/tag/macOS-12%2F20231029.1
          python-version: '3.11.5'

      - name: Install Node and NPM
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install and build
        run: |
          npm install
          npm run postinstall
          npm run build

      - name: Publish releases
        env:
          # These values are used for auto updates signing
          APPLE_ID: $
          APPLE_ID_PASS: $
          APPLE_APP_SPECIFIC_PASSWORD: $
          APPLE_TEAM_ID: $
          CSC_LINK: $
          CSC_KEY_PASSWORD: $
          # This is used for uploading release assets to github
          GH_TOKEN: $
          EP_PRE_RELEASE: $
        run: |
          npm exec electron-builder -- --publish always --mac
```

### Linux:
Linux is by far the simplest since it doesn't require signing.


```yaml
name: Publish artifacts
on:
  release:
    types:
      - created
jobs:
  publish_linux:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout git repo
        uses: actions/checkout@v3

      - name: Install Node and NPM
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install and build
        run: |
          npm install
          npm run postinstall
          npm run build

      - name: Build and Publish
        env:
          # This is used for uploading release assets to github
          GH_TOKEN: $
          EP_PRE_RELEASE: $
        run: |
          npm exec electron-builder -- --publish always --linux
```