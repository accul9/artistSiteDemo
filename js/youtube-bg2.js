var videoId = "docvCfxXL1U"; //動画ID
var videoWidth = "800"; //動画横サイズ
var videoHeight = "450"; //動画縦サイズ

// iframe Player APIを非同期で読み込み
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// #player にiframeplayerを作成
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: 450,
    width: 800,
    videoId: videoId,
    playerVars: {
      autoplay: 1, //自動再生する
    },
  });
}
