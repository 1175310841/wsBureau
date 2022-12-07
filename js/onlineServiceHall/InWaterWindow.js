const InWaterWindow = {
  template: `<div>
          <div id="map"></div>
          <ul class="inwater_list">
            <li><a>窗口名称</a></li>
            <li v-for="(item,index) in pointInfo" ::key="index">
              <a @click="handleOpenWindow(item)">{{item.name}}</a>
            </li>
          </ul>
          </div>`,
  data() {
    return {
      map: null,
      pointInfo: [
        {
          lng: 120.349308,
          lat: 36.079312,
          name: "海润自来水集团南部分公司营管科",
          address: "青岛市市北区广饶路129号甲",
          phone: "82758218",
        },
        {
          lng: 120.307432,
          lat: 36.068329,
          name: "海润自来水集团市南所",
          address: "四川路74号",
          phone: "82686559",
        },
        {
          lng: 120.341705,
          lat: 36.08242,
          name: "海润自来水集团市北所",
          address: "大连路22号-14",
          phone: "82735118",
        },
        {
          lng: 120.367506,
          lat: 36.078941,
          name: "海润自来水集团台东所",
          address: "龙潭路2号",
          phone: "83618979",
        },
        {
          lng: 120.358165,
          lat: 36.109786,
          name: "海润自来水集团四方所",
          address: "杭州路1号丁",
          phone: "83718041",
        },
        {
          lng: 120.403242,
          lat: 36.100616,
          name: "海润自来水集团四方新区所",
          address: "永吉路57号7号楼",
          phone: "85690121",
        },
        {
          lng: 120.37108,
          lat: 36.12717,
          name: "海润自来水集团水清沟所",
          address: "四流南路3号丙内70户",
          phone: "84851771",
        },
        {
          lng: 120.417532,
          lat: 36.075582,
          name: "海润自来水集团辛家庄所",
          address: "金门路12号乙",
          phone: "85872217",
        },
        {
          lng: 120.416099,
          lat: 36.179118,
          name: "海润自来水集团东部分公司营管科",
          address: "青岛市李沧区上苑路82号",
          phone: "68076633",
        },
        {
          lng: 120.471835,
          lat: 36.174559,
          name: "海润自来水集团李村所",
          address: "李沧区武川路64中学对面",
          phone: "87895226",
        },
        {
          lng: 120.391365,
          lat: 36.182672,
          name: "海润自来水集团沧口所",
          address: "四流中路117号",
          phone: "84632227",
        },
        {
          lng: 120.423883,
          lat: 36.109498,
          name: "海润自来水集团高新区所",
          address: "浮山后四小区24号楼",
          phone: "88753887",
        },
        {
          lng: 120.444624,
          lat: 36.256498,
          name: "海润自来水集团夏庄所",
          address: "青银高速夏庄出口东500米(华夏路)",
          phone: "68950707",
        },
        {
          lng: 120.39798,
          lat: 36.250455,
          name: "海润自来水集团流亭所",
          address: "城阳区仙山西路7号仙家寨水厂",
          phone: "66911651",
        },
        {
          lng: 120.252585,
          lat: 36.275546,
          name: "高新海润客户服务大厅",
          address: "青岛高新技术产业开发区河东路以北、岙东路以东",
          phone: "68687070",
        },
        {
          lng: 120.031836,
          lat: 36.278781,
          name: "胶州水司市南收费厅",
          address: "福州南路98号",
          phone: "82237716",
        },
        {
          lng: 120.025168,
          lat: 36.300895,
          name: "胶州水司服务大厅",
          address: "胶州东路197号",
          phone: "87212780",
        },
        {
          lng: 119.980967,
          lat: 36.25511,
          name: "胶州水司上合示范区营业所",
          address: "明德街36号",
          phone: "85262259",
        },
        {
          lng: 120.164952,
          lat: 36.36637,
          name: "胶州水司李哥庄营业所",
          address: "胶州市沽源路华庭雅居东北门门口",
          phone: "",
        },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new BMap.Map("map");
      let center = new BMap.Point(120.252585, 36.275546);
      this.map.centerAndZoom(center, 11);
      this.map.enableScrollWheelZoom(true);
      this.pointInfo.forEach((i) => {
        let point = new BMap.Point(i.lng, i.lat);
        let marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        let opts = {
          width: 250, // 信息窗口宽度
          height: 130, // 信息窗口高度
          title: `<div style='margin:10px 0;font-weight:bold;font-size:15px'>${i.name}</div>`, // 信息窗口标题
          offset: new BMap.Size(0, -25),
        };
        let infoWindow = new BMap.InfoWindow(
          `地址：${i.address} <br />电话：${i.phone}`,
          opts
        ); // 创建信息窗口对象
        marker.addEventListener("click", () => {
          this.openWindow(infoWindow, point);
        });
      });
    },
    openWindow(infoWindow, point) {
      this.map.openInfoWindow(infoWindow, point); //开启信息窗口
    },
    handleOpenWindow(e) {
      let point = new BMap.Point(e.lng, e.lat);
      let opts = {
        width: 250, // 信息窗口宽度
        height: 130, // 信息窗口高度
        title: `<div style='margin:10px 0;font-weight:bold;font-size:15px'>${e.name}</div>`, // 信息窗口标题
        offset: new BMap.Size(0, -25),
      };
      let infoWindow = new BMap.InfoWindow(
        `地址：${e.address} <br />电话：${e.phone}`,
        opts
      ); // 创建信息窗口对象
      this.openWindow(infoWindow, point);
    },
  },
};

export default InWaterWindow;
