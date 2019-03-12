function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export class Message {
  public readonly id = generateUuid();

  constructor(
    public type: string,
    public payload?: any,
    public responseTo?: string) {
  }
}
export function getPlatformDetails() {
  return sendMessage(new Message('GET_PLATFORM_DETAILS'), window.opener);
}
export function sendMessage(message, target, timeout = 5000) {
  return new Promise((resolve, reject) => {
    let isCancelled = false;

    const responseHandler = ({ data }) => {
      if (data.responseTo === message.id && !isCancelled) {
        window.removeEventListener('message', responseHandler);
        resolve(data);
      }
    };

    setTimeout(() => {
      isCancelled = true;
      window.removeEventListener('message', responseHandler);
      resolve();
    }, timeout);

    window.addEventListener('message', responseHandler);
    target.postMessage(message, '*');
  });
}