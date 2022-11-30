/**
 * @hidden
 */
export type ActionOptions = {
  characteristicName: string;
  action: any;
};

/**
 * @hidden
 */
export type SubscribeOptions = {
  characteristicName: string;
  manageNotifications?: boolean;
};

/**
 * @hidden
 */
export enum STATUS {
  SCANNING = "scanning",
  CONNECTED = "connected",
  CONNECTING = "connecting",
  DISCONNECTING = "disconnecting",
  DISCONNECTED = "disconnected"
}

/**
 * @hidden
 */
export enum TRANSPORT_TYPE {
  WEB = "web",
  REACT_NATIVE = "reactNative"
}