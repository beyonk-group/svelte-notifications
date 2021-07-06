declare module "@beyonk/svelte-notifications" {
    import { SvelteComponentTyped } from 'svelte/types/runtime/index'

    export type TNotificationTypes =
        'default' | 'danger' | 'warning' | 'info' | 'success'

    export interface TNotifier {
        send(message: string, type: TNotificationTypes, timeout: number): void
        danger(message: string, timeout: number): void
        warning(message: string, timeout: number): void
        info(message: string, timeout: number): void
        success(message: string, timeout: number): void
    }

    export interface ITheme {
        danger: '#bb2124',
        success: '#22bb33',
        warning: '#f0ad4e',
        info: '#5bc0de',
        default: '#aaaaaa'
    }
    export type TNotificationDisplay = SvelteComponentTyped<{ themes: ITheme, timeout: number }>

    export const notifier: TNotifier;
    export const NotificationDisplay: TNotificationDisplay
}
