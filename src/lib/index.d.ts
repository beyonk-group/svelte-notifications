declare module "@beyonk/svelte-notifications" {
    import { SvelteComponentTyped } from 'svelte/types/runtime'

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
        danger: string,
        success: string,
        warning: string,
        info: string,
        default: string
    }
    type IProps = { themes?: ITheme, timeout?: number, persist?: boolean }

    export class NotificationDisplay extends SvelteComponentTyped<IProps>{}

    export const notifier: TNotifier;
}
