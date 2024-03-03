import { app } from 'electron';
import { getAssetPath } from '../helpers';

/**
 * Handle the dock icon in macOS
 */
export class DockWrapper {
    public async show() {
        if (!app.dock) {
            return;
        }
        app.dock.setIcon(getAssetPath('icon.png'));
        await app.dock.show();
    }

    public hide() {
        if (!app.dock) {
            return;
        }

        app.dock.hide();
    }
}
