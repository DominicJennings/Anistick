let btn = document.querySelector(".record-btn")

btn.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true
  }).then(async function (stream) {
    let recorder = RecordRTC(stream, {
      type: 'video'
    });
    recorder.startRecording();
    recorder.stopRecording(function() {
        let blob = recorder.getBlob();
        let url = URL.createObjectURL(blob)
        let video = document.querySelector("video")
        video.src = url
        let a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    });
  //needed for better browser support
 
});
