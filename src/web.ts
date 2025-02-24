import { WebPlugin, PluginListenerHandle } from '@capacitor/core';

import type { CallKitVoipPlugin } from './definitions';

export class CallKitVoipWeb extends WebPlugin implements CallKitVoipPlugin {
  async register(): Promise<void> {
    console.log('call is register');
  }

  addListener(
    eventName: string,
    listenerFunc: (...args: any[]) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle {
    const listenerHandle = super.addListener(eventName, listenerFunc);

    return Object.assign(listenerHandle, {
      remove: async () => {
        const resolvedHandle = await listenerHandle;
        resolvedHandle.remove();
      },
    });
  }
}