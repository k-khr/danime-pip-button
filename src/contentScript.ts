function onPiPButtonPress(_ev: Event) {
  let isInPiP = document.pictureInPictureElement !== null;
  if (isInPiP) {
    document.exitPictureInPicture();
  } else {
    let vid: HTMLVideoElement|null = document.querySelector('video');
    if (vid) {
      vid.requestPictureInPicture();
    }
  }
}

//// ページに挿入するボタン
const BUTTON_ID = '_danime_pinpbutton_nxH4v5';
const buttonIconStyle = {
  background: 'center/contain url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAQAAAAliaSuAAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfmCA0XJhlwD18yAAABeElEQVR42u3cMUoDQRiG4W/igo1YeQAhIZ2Fjcao4AkkCin0Ap7JyirYCYIHsFjC2hiw1C3sxUZb43gCJ+PohvnN+7Yzm8nDZIc0uxIRERERERERERERERERUVJu1gRf6FC7WjGlelOla/fxK7pf15U2TW7qRMfuOZnuC5XaNvuLrrTnpt8Pt4IXHxmGSz0NQsNh+pbxk6yXTl8zTg9+/yL6Yx51a4J7oG7cxHj62J1ZkPuLWHprcf/SQIcOHTp06NChQ4cOHTp06ItO9x1f+2arfSfPXR+q3fAKbQ3zpC/ntwb3OnTo0KFDhw4dOnTo0KFDhw4dOnTo0KFDhw4dOnTo0DOn13NY4+ln04s50Ufy2mh0hQddZkl3XiPu9WyK3/W+Pzch6v89vRv7JNH/OOFfjete0umVcfpd8OgNDfolleHnQrNurH33mbjrbqoTTYzC73Uagse8taClgXa0aor9rlI3s95aQERERERERERERERERESU2BcyIJJ2S3bVwgAAAABJRU5ErkJggg==) no-repeat',
};

(()=>{
  const buttonArea = document.querySelector('.buttonArea');
  const settingsButtonWrap: HTMLDivElement|null = document.querySelector('div.setting.mainButton');
  const settingsButton: HTMLButtonElement|null = document.querySelector('button.settingButton');
  const wrapDiv = document.createElement('div');
  wrapDiv.className = 'mainButton';
  const pipButton = document.createElement('button');
  pipButton.id = BUTTON_ID;
  for (let [k,v] of Object.entries(Object.assign({}, settingsButton?.style))) {
    if (v === '') continue;
    pipButton.style.setProperty(k, v);
  }
  pipButton.style.background = buttonIconStyle.background;
  wrapDiv.appendChild(pipButton);
  buttonArea?.insertBefore(wrapDiv, settingsButtonWrap);
  pipButton.addEventListener('click', onPiPButtonPress);
})();
