const InWaterWindow = {
  template: `<div>
          <div id="outMap"></div>
          <ul class="outwater_list">
            <li><a>客户服务热线</a></li>
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
          lng: 120.382133,
          lat: 36.071994,
          name: "排水公司监管中心",
          address: "盐城路7号北海宾馆2号楼",
          phone: "85710000",
        },
        {
          lng: 120.317103,
          lat: 36.074594,
          name: "第一排水公司",
          address: "广州路5号",
          phone: "82627780",
        },
        {
          lng: 120.397913,
          lat: 36.110173,
          name: "第二排水公司",
          address: "伊春路98号",
          phone: "85633342",
        },
        {
          lng: 120.381518,
          lat: 36.153965,
          name: "第三排水公司",
          address: "唐河路15号",
          phone: "84968372",
        },
        {
          lng: 120.433571,
          lat: 36.066221,
          name: "第四排水公司",
          address: "东海东路6号",
          phone: "85889238",
        },
        {
          lng: 120.440203,
          lat: 36.178184,
          name: "第五排水公司",
          address: "北崂路991号",
          phone: "87666588",
        },
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = new BMap.Map("outMap");
      let center = new BMap.Point(120.397913, 36.110173);
      this.map.centerAndZoom(center, 13);
      this.map.enableScrollWheelZoom(true);
      this.pointInfo.forEach((i) => {
        let point = new BMap.Point(i.lng, i.lat);
        let marker = new BMap.Marker(point);
        this.map.addOverlay(marker);
        let opts = {
          width: 150, // 信息窗口宽度
          height: 100, // 信息窗口高度
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
