const { Notion } = require("../..");

const notion = new Notion({
  cloud: true,
  deviceId: "df7a02157bfa623941d229984525246f"
});

notion.channelAnalysis().subscribe(channelAnalysis => {
  console.log("channelAnalysis", channelAnalysis);
});