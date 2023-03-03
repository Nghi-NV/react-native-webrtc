import { defineCustomEventTarget } from 'event-target-shim';
declare type MediaStreamTrackState = 'live' | 'ended';
declare const MediaStreamTrack_base: defineCustomEventTarget.CustomEventTargetConstructor<Record<string, import("event-target-shim").Event<string>>, "standard">;
declare class MediaStreamTrack extends MediaStreamTrack_base {
    _constraints: object;
    _enabled: boolean;
    _settings: object;
    _muted: boolean;
    id: string;
    kind: string;
    label: string;
    readyState: MediaStreamTrackState;
    remote: boolean;
    constructor(info: any);
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get muted(): boolean;
    stop(): void;
    /**
     * Private / custom API for switching the cameras on the fly, without the
     * need for adding / removing tracks or doing any SDP renegotiation.
     *
     * This is how the reference application (AppRTCMobile) implements camera
     * switching.
     */
    _switchCamera(): void;
    applyConstraints(): never;
    clone(): never;
    getCapabilities(): never;
    getConstraints(): object;
    getSettings(): object;
    release(): void;
}
export default MediaStreamTrack;
