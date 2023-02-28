const { createApp } = Vue;

createApp({
  data() {
    return {
      maskShow: false,
      deptList: [
        {
          name: "青岛市海润自来水集团有限公司",
          content: `青岛市海润自来水集团有限公司始建于1899年，前身为青岛市自来水公司，2002年更名为青岛市海润自来水集团有限公司。主要承担市内三区及崂山区、城阳区部分区域供水业务，荣获全国建设系统先进集体、全国精神文明创建工作先进单位、省文明单位等荣誉称号。<br /><br />
                截至2021年底，供水能力100万立方米/日以上，主城区服务面积290平方公里，服务用户140余万户。拥有崂山水库及白沙河水厂、仙家寨水厂、崂山水厂3座自来水厂，实现深度处理全覆盖；拥有输配水管道3600余公里，构成“四纵四横”环状网络，确保供水安全稳定；拥有加压泵站23座、贮配水池18座、二供泵房1000余处，实现了多级加压调配供水，水质综合合格率达到100%。<br /><br />
                秉承“您的需要就是我的追求”服务理念，海润集团依托青岛市工程建设项目审批管理平台，采用“1100”用水报装模式，先后推出“预约服务”“引导服务”“一次办好”“0.01立方的关爱”“青水管+”等便民惠民服务新模式，“润万家”金牌员工服务队被国家建设部命名为首批“最美建设者”，“润万家”服务品牌被评为省服务名牌和著名商标，“零点行动”荣获青岛市“三我”活动“十佳优秀好范例”。<br /><br />
                “十四五”期间，公司将以“匹配城市发展战略，构建大水务运营格局”为驱动，积极推动智慧水务平台建设，全力保供水惠民生，奋力实现“十四五”供水规划的既定目标。<br /><br /><br />
                通讯地址：青岛市市南区宁夏路288号软件园10号楼<br /><br />
                联系电话：0532-89017566`,
        },
        {
          name: "青岛海润丰供水有限责任公司",
          content: `青岛海润丰供水有限责任公司成立于2003年12月，注册资本2579.72万元，日供水能力达6万立方米以上。担负着向即墨城区、蓝村镇居民、企业、驻军、城阳区西部、高新区产业园、铁路青岛西站、李哥庄镇等区域供水的任务，职工50余名。曾获青岛市市政公用局“用心惠民”四星级服务窗口荣誉称号。<br /><br />
                公司设置办公室、财务部、安全生产运营部、客户服务部，管线管理所五个管理部门，服务总面积约180平方公里，服务人口约13万人，供水管线总长度约71公里。2021年总供水量1439万立方米，安全生产实现零事故。出厂水水质合格率100%，设备设施完好率、抢修及时率、巡线及时率及管线故障自检率均达100%。<br /><br />
                公司始终将“水质安全是百姓的生命线”作为生产运营的第一要务。为保障水质，公司建立水厂、管网和管网末梢三级水质监测保障系统，实现城市供水从“源头到龙头”的全方位、全过程、全天候的监测控制。<br /><br />
                结合“十四五”城市规划，公司将积极开拓市场，编制供水发展规划，扩大供水规模，完善配套管网系统，为供水事业高质量发展蓄力，为区域经济发展助力，为社会发展及民生提供强有力保障。<br /><br /><br />
                通讯地址：青岛市即墨区蓝村镇南泉泉大一路2号<br /><br />
                联系电话：0532-82578899`,
        },
        {
          name: "青岛即东海润水务有限公司",
          content: `青岛即东海润水务有限公司成立于2013年7月，注册资本4593万元，由青岛水务集团与即墨市自来水公司共同出资注册成立。<br /><br />
                职工总数约40人，主要服务青岛市的“海洋科技新城”—蓝色硅谷核心区，服务面积约101平方公里，现有用户2904户，服务人口约1.2万人。区域内包括国家深海基地、海洋科学与技术国家实验室、港中旅青岛海泉湾等重点项目用户。山东大学青岛校区、青岛十九中等一系列科研院校也将相继落户启用。<br /><br />
                以大任河下游地下水为主要水源，拥有鳌山水厂和高袁庄水厂，设计净水能力均为5000立方米/日。鳌山水厂位于鳌山卫街道场园村以南大任河以北，建于2007年。制水工艺为：网格反应池、斜管沉淀池、普通快滤池。高原庄水厂位于鳌山卫街道高袁庄村北大任河以南，建于2010年。制水工艺为：网格反应池、斜管沉淀池、普通快滤池。<br /><br /><br />
                通讯地址：青岛市即墨区温泉街道海泉路与麒麟路交叉路口北100米路西<br /><br />
                联系电话：0532-86579838`,
        },
        {
          name: "青岛排水有限公司",
          content: `青岛排水有限公司成立于1992年5月，主要承担市内三区排水泵站建设及管理，排水管道管理、养护、疏通，城市防汛抗洪以及城市排水监测等任务，辖第一至第五排水分公司、排水监测站等9个基层单位，服务面积190余平方公里。公司先后荣获“山东省文明单位”“山东省抗击台风抢险救灾先进集体”“山东省住建系统工人先锋号”“山东省住建系统劳模创新工作室”等荣誉称号。<br /><br />
                公司负责30座雨污水泵站、3436公里排水管线和15万个雨污水检查井的管理运行，排水日设计提送能力达到91.2万立方米；拥有法克多联合疏通车、凯撒联合疏通车、CCTV管道机器人、防汛移动泵车等先进的排水防汛设备；具备20大类产品、653项参数的检测资质，排水监测能力位居全国领先地位。2013年4月，公司整建制划转至水务集团后，围绕“畅通排水、情融万家”的工作目标，巡视排水管线30余万公里，养护清淤4400余公里；推进泵站建设管理工程，标准化站点建设全面完成，累计提送水量达到12.45亿立方米；改造重点积水点70余处，有力保障了城市排水畅通、安全度汛。<br /><br />
                公司坚持“先行处理”机制，推出社区“排水帮您办”服务新举措，解决市民热点难点排水问题8500余处，得到市民一致认可，“情融排水畅万家”服务品牌被评为“青岛市服务名牌”。<br /><br />
                “十四五”期间，面对发展的新形势、集团的新要求和市民的新期待，公司将切实担负起市区排水保障重任，为建设开放、现代、活力、时尚的国际大都市贡献力量。<br /><br /><br />
                通讯地址：青岛市市南区彰化路6号甲<br /><br />
                联系电话：0532-85715299`,
        },
        {
          name: "青岛水务集团环境能源公司",
          content: `青岛水务集团环境能源有限公司（以下简称“环境公司”）成立于2008年9月，原名：青岛城投环境能源有限公司，2013年城投集团将环境公司及所属九家污水处理企业的运营管理业务划转至青岛水务集团，公司目前的主营业务为污水处理、中水回用、污泥处置、新能源开发等市政环保项目的投资建设、运营管理，经过多年的投资发展，已成为青岛市行业龙头企业。<br /><br />
                公司辖青岛海泊河水务运营有限公司、青岛市团岛污水处理厂、青岛双元水务有限公司、青岛娄山河水务有限公司、青岛大任水务有限公司、青岛海湾中水有限公司、青岛张村河水务有限公司、青岛娄山河水务资源有限公司等12家子公司。<br /><br />
                现有员工755人，公司拥有专科以上学历员工共679人，占员工总人数的90%。截至2021年末青岛市全域现有25座污水处理厂，环境公司拥有其中12座，全市污水处理厂的处理能力为244万吨/日，环境公司污水处理能力为131.35万吨/日，污水处理能力占比达到54%，服务区域涵盖市内三区、崂山区局部、城阳区局部、即墨区局部，服务面积591平方公里，服务人口400余万人,采用生物脱氮除磷A/A/O工艺、MSBR工艺及MBR超滤膜技术等国内领先的处理工艺,公司中水回用能力29.85万吨/日，污泥堆肥处理能力300吨/日。2021年处理污水总量4.3亿吨，年中水回用量5831万吨（其中河道生态补水4854万吨、杂用水977万吨），年污泥堆肥7.8万吨，年沼气发电量1665万度。<br /><br />
                自2013年以来环境公司及下属单位先后荣获97项市级以上集体荣誉称号，其中国家级6项，省级35项；获得市级以上个人荣誉共计58项，其中省级19项，市级39项；2021年1月环境公司入选国务院国企改革领导小组办公室国企改革“双百企业”。<br /><br /><br />
                通讯地址：青岛市市南区团岛三路8号<br /><br />
                联系电话：0532- 68888287`,
        },
        {
          name: "青岛海泊河水务运营有限公司",
          content: `青岛海泊河水务运营有限公司前身为青岛威立雅水务运营有限公司（2005年1月--2014年8月）和青岛光大水务运营有限公司（2014年8月--2017年1月），主要运营海泊河污水处理厂和麦岛污水处理厂。<br /><br />
                2004年8月由青岛市排水公司、法国威立雅水务、中国光大水务投资有限公司三方共同出资成立青岛威立雅水务运营有限公司，负责海泊河污水处理厂和麦岛污水处理厂的商业运营，自2005年1月1日正式启动。2014年8月，法国威立雅水务退出，由青岛光大水务运营有限公司负责两厂的运营。2017年1月，经股权调整，公司更名为青岛海泊河水务运营有限公司。<br /><br />
                公司目前共有职工137人，其中大专以上学历104人，具有中高级专业技术职称的43人。下设综合部、安全生产运营部、财务部、海泊河厂、麦岛厂、化验中心6个部门。公司于2012年2月通过ISO9001:2008国际质量管理体系、ISO14001:2004环境管理体系、OHSAS18001:2007职业健康安全管理体系认证。曾先后获全国环保设施和城市污水垃圾处理设施向公众开放单位、山东省城镇排水工作先进集体、山东省城市污水处理厂“十佳运营单位”、山东省城镇供排水行业精神文明建设品牌单位、青岛市文明单位标兵等多项荣誉称号。<br /><br />
                公司将党建工作与生产经营深度融合，加强基层党建工作以统领公司高质量发展，带领全体职工凝心聚力、奋发有为、开拓创新，为保卫青岛的绿水青山，奉献青春、智慧和力量。近年来，公司充分利用污泥消化所产沼气进行热电联产，年发电量可达1500万度，占全公司耗电量的25%。既节约了运营成本，又保护了环境，成为绿色发展、循环发展和低碳发展的成功典范。<br /><br />
                作为青岛水务集团“水务开放日”活动定点单位，公司积极发挥环保教育平台作用，为青岛市各大院校、中小学生、社区居民学习环保知识、多次开展环保实践活动，为加强生态文明宣传教育，宣传动员社会公众积极参与生态文明建设、为提升全民生态环境意识贡献力量、营造生态环境的良好社会风尚。<br /><br /><br />
                通讯地址：青岛市北区杭州支路8号<br /><br />
                联系电话：0532-86103250`,
        },
        {
          name: "青岛首创瑞海水务有限公司",
          content: `青岛首创瑞海水务有限公司是一家致力于城市污水处理及相关设施运营管理、技术咨询的专业化水务运营公司。公司成立于2004年8月23日，由北京首创股份有限公司、青岛市排水管理处和青岛开发投资有限公司按照比例投资组建，合资经营青岛市李村河污水处理厂。2013年1月青岛市排水管理处、青岛开发投资有限公司的股份整体划拨至新成立的青岛水务集团公司。<br /><br />
                青岛首创瑞海水务有限公司位于青岛市市北区北部，占地面积15.5公顷，服务面积147平方公里，包含青岛市市北区、李沧区及崂山区的部分区域，服务人口约百万余人，其建设共分四个阶段。目前总处理规模达到25万吨/日，出水水质达到《城镇污水处理厂污染物排放标准》（GB18918-2002）的一级A标准。<br /><br />
                一期处理能力为8万立方米/日，采用VIP工艺。1996年7月2日奠基，于1998年2月份投产运行。二期处理能力9万吨/日，采用多模式A/A/O工艺。2007年9月17日奠基，于2008年6月份投入试运行。2011年8月完成一级A升级改造，17万立方米/日出水全部达到国家一级A标准。三期处理能力为8万吨/日，采用改良A2/O+ MBBR工艺，2015年3月11日奠基，扩建工程在保证至少17万吨/日规模处理水量的基础上，先进行4.5万吨/日规模的新建工程，后进行对一、二期改扩建工程，在原有基础上增加3.5万吨/日的规模。该扩建项目新建4.5万吨/日工程于2016年3月通过环评验收，改建3.5万吨/日于9月22日通过环评验收，出水达到国家《城镇污水处理厂污染物排放标准》一级A排放标准，实现李村河流域污水的全收集全处理。<br /><br />
                首创瑞海水务有限公司自成立以来，始终以“创建国内一流污水处理厂”为目标，一直坚持 “质量达标是生存的基础，顾客满意是永恒的追求” 的工作方针。凭借良好的运行效果和先进的管理水平，走在了同行业的前列。公司获得了从开始评比以来历次的“全国十佳污水处理厂”；历年来先后获得“全国城市污水处理厂运行管理先进单位、示范单位”、“全国城镇污水处理厂节能减排绩效考核达标竞赛优秀达标示范单位”、“山东省城市污水处理厂绩效管理示范单位”“ 省住房城乡建设厅、省监察厅全省城市污水处理绩效考评示范单位”“省安全生产标准化示范企业”、“山东省安全文化建设示范企业”等多项荣誉。同时，公司也特别重视科研建设，与青岛理工大学《城市污水生物脱氮除磷技术与控制措施研究》得到了“国家科学技术进步奖二等奖”等科技大奖。<br /><br /><br /> 
                通讯地址：青岛市市北区瑞海北路2号<br /><br />
                联系电话：0532-80973557`,
        },
        {
          name: "青岛市团岛污水处理厂",
          content: `青岛市团岛污水处理厂位于市南区团岛三路8号,占地面积约10公顷,服务人口26万,汇水面积约14.6平方公里,服务范围为市南区中西部及部分市北区,污水处理厂设计规模为10万立方米/日，以生活污水为主。 截止到2021年12月底，全厂共有在编职工92人。<br /><br />
                为改善山东省半岛流域和胶州湾水质，响应市政府“环湾保护、拥湾发展”的战略，我厂于2009年底开始实施升级改造工程，以满足市政府“所有出水排向胶州湾的污水处理厂出水水质均应达到一级A”的要求，对原有工艺进行升级改造：增建一组曝气沉砂池；在原有A2/O工艺基础上进行生物池改造，增加MBBR工艺，重新分配池容比后在好氧池投加生物填料，提高生物池的处理能力；增加深度处理工艺，采用机械搅拌快速混合、小网格絮凝、斜板沉淀池、滤布滤池和紫外消毒；同时为保证氨氮、总磷等稳定达标，增加碳源投放和化学除磷。于2010年初破土动工，2011年3月进行联机调试，并于2011年6月通过环保局一级A的监测验收。<br /><br />
                青岛市团岛污水处理厂自运行以来，一直保持了良好的污水处理率和污泥处置率，并且处理效果较稳定。COD、BOD5、SS、NH3-N等指标达到或优于国家二级排放标准，一级A验收后，出水水质稳定达标。取得了良好的社会效益。截止到2021年底，累计处理污水55832.10万吨,削减污染物累计：COD44.42万吨，BOD21.13万吨，氨氮3.04万吨，总磷0.51万吨，SS25.30万吨，产生沼气3900万立方，自2012年10月份启动沼气发电项目，累计发电2502万度，为减轻胶州湾的污染和节能减排做出了积极的贡献。<br /><br />
                青岛市团岛污水处理厂自建厂以来荣获中国市政工程协会颁发的“2001年度全国城市污水处理厂运行管理示范项目”、山东省建设厅颁发的“2004年度山东省巾帼文明岗”、 山东省建设厅、山东省建筑工程管理局颁发的“2006年度全省建设系统“安康杯”竞赛优胜项目部（班组）”、中华人民共和国国务院颁发的“国家科学技术进步奖”、山东省住房和城乡建设厅颁发的“2012年度全省城市污水处理厂绩效考评示范单位”、 山东省档案局颁发的“山东省档案工作科学化管理示范单位”、 山东省城镇供排水协会颁发的“2018年度全省城市污水处理厂十佳运营单位”、山东省城镇供排水协会颁发的2021年山东省城镇排水工作先进集体、山东省城镇供排水协会、山东省建设工会委员会颁发的山东省城镇供排水行业精神文明建设品牌单位名单等荣誉称号。<br /><br />
                青岛市团岛污水处理厂在保证出水稳定达标的同时，积极响应市委、市政府的号召，将污水处理厂建成环保教育宣传基地。自运行以来，先后接待国家建设部、国家环保总局及省、市各级领导、全国同行及社会团体共计约8.5万人次，并成为多所大学的社会实践基地和岛城中小学生的社会课堂，为宣传环保事业，加强全社会的环保意识做出了积极的贡献。<br /><br /><br />
                通讯地址：青岛市市南区团岛三路8号<br /><br />
                联系电话：0532-82658084`,
        },
        {
          name: "青岛海湾中水有限公司",
          content: `青岛海湾中水有限公司作为青岛市第一家再生水生产和利用的国有企业，是在青岛市被确定为全国再生水回用五个试点城市之一的背景下于2001年4月成立，其主营业范围为：经营生产和销售中水；中水回用管道的铺设、安装；中水回用咨询、服务，于2013年1月划归至青岛水务集团，成为水务集团旗下的水资源循环利用板块。<br /><br />
公司下设三个净化水厂和两个中心，分别为海泊河净化水厂、团岛净化水厂、世园会净化水厂和中德合作水处理示范中心、李村河流域运管中心。管理使用再生水管道85公里，再生水总供水能力达到29.85万吨/天。公司先后获得“全国十大建设科技成就”、“山东省城市再生水利用示范项目”、中国AAA级信用企业、山东省工业环保示范单位、山东省城镇供水工作先进集体、青岛市城市节水工作先进单位等荣誉称号。李村河下游生态补水及调蓄工程荣获“2019青岛智慧城市百佳案例”为再生水的循环利用及河道生态修复工作起到了良好的示范作用。<br /><br /><br />
通讯地址：青岛市市南区团岛三路15号<br /><br />
联系电话：0532-82651027`,
        },
        {
          name: "青岛双元水务有限公司",
          content: `青岛双元水务有限公司2004年6月成立，注册资金4480万元人民币，具有市政基础设施特许经营权，现运营管理城阳污水处理厂一、二、三期项目，总规模25万吨/日，占地面积18.9公顷，服务范围为城阳城区、白沙河以北、青大工业园、夏庄、惜福镇等区域，服务面积198平方公里，服务人口90万人。<br /><br />
城阳污水处理厂一期项目2003年10月投入运行，处理能力5万m3/d。二期项目2008年11月投入运行，处理能力5万m3/d。一、二期升级改造项目2010年10月通水运行，升级改造一期采用SBR+MBBR工艺，升级改造二期采用改良的三段AO+MBBR工艺，出水水质由二级标准提升为一级A标准。三期项目处理能力5万m3/d，于2015年10月27日顺利通水试运行，三期工程采用四段AO工艺，出水标准为《城镇污水处理厂污染物排放标准》GB18918-2002一级A标准。2018年8月三期项目进行扩建，采用MBR膜处理工艺，第一阶段于2019年6月底投入运行，第二阶段于2020年5月初投入运行。扩建项目完成后三期项目总处理能力15万m3/d，出水水质优于《城镇污水处理厂污染物排放标准》（GB18918-2002）中一级A的排放标准。<br /><br />
多年来，公司秉承“建一流环保企业、创一流综合效益”的质量方针，坚持“让政府放心，让群众满意”的宗旨理念，经过不懈追求和发展，凭借良好的运营质量和先进管理，公司通过了ISO9001:(2015版)质量管理体系认证，并于2017年被评定为青岛市“高新技术企业”，2018年被评为青岛市环境教育基地，2021年被评为“青岛市科普教育基地”，并先后获得了“国家重点环保实用技术示范工程”、“青岛市劳动保障诚信示范用人单位”，连年获得山东省城市污水处理厂“十佳运营单位”、“运营质量优秀企业”，连续数年进入青岛市重点企业环境绩效综合排名前十名，2020年，被评为“山东省城镇排水工作先进集体”等荣誉称号。<br /><br />
公司凭借稳定运行，为持续改善城阳区和胶州湾的生态环境提供重要保障，为青岛的天更蓝，水更清，做出了积极贡献。<br /><br /><br />
通讯地址：青岛市城阳区城阳街道正阳路西京口村西<br /><br />
联系电话：0532-80955082`,
        },
        {
          name: "青岛大任水务有限公司",
          content: `青岛大任水务有限公司成立于2008年，下辖三个污水处理厂（即墨大任河污水处理厂、即墨西部污水处理厂、即墨东部污水处理厂）。2009年7月完成即墨西部污水处理厂扩建及升级改造工程，现已取得即墨区西部污泥处置中心、即墨北部污水处理厂扩建及升级改造两个项目的特许经营权。项目完成后污水处理能力达到15万吨/日。<br /><br />
即墨区大任河污水处理厂位于鹤山路东端与滨海大道交叉口，设计规模1万吨/日，采用A²/O工艺，出水执行一级A排放标准。<br /><br />
即墨区北部污水处理厂位于泰山一路西侧，龙泉河上游，设计规模3万吨/日，采用MSBR工艺，出水执行一级A排放标；2020年取得北部污水处理厂扩建建设运营权，采用全地下模式扩建4万吨/日，总规模达到6万吨/日，出水提升到类地表IV类水标准。<br /><br />
即墨区西部污水处理厂位于大信镇金黄海路，采用多段A/O处理工艺，扩建后总规模8万吨/日，出水执行类地表V类水标准。<br /><br />
公司自成立以来，以“敬业奉献、雷厉风行、保障有力、合力致远”为精神，以“善纳百川、以水为本、服务社会、和谐共赢”为宗旨，不断夯实管理基础，以管理促质量，以安全生产的相互融合的管理模式，为蓝色硅谷核心区、即墨区北部、西部以及即墨通济新区、蓝村镇、大信镇等青岛市重点区域的蓬勃发展保驾护航。<br /><br /><br />
通讯地址：青岛市即墨区鹤山路与滨海大道交汇处西200米。<br /><br />
联系电话：0532-89066700`,
        },
        {
          name: "青岛娄山河水务有限公司",
          content: `青岛娄山河水务有限公司地处娄山河下游入胶州湾口处，环胶州湾高速公路的西侧。一期工程由青岛市市政公用局于2007年5月开始建设。处理规模为10万m3/d，占地11.50公顷，2008年6月通水运行，出水标准执行《城镇污水处理厂污染物排放标准》（GB18918-2002）二级标准。<br /><br />
娄山河污水处理厂一期出水标准升级工程由青岛城投环境能源有限公司于2010年1月开始建设。新增用地1.05公顷，，2010年11月改造完成，改造后出水标准执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级A标准。<br /><br />
娄山河污水处理厂二期扩建-近期实施工程由青岛水务集团有限公司于2014年1月份开工建设，处理规模为5万m3/d，新增用地5.80公顷，2015年5月底建成通水，12月通过环保验收，2016年9月通过综合竣工验收，出水标准执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级A标准。<br /><br />
娄山河污水处理厂主体工艺采用“A/A/O+深度处理工艺”，目前总处理规模为15万m3/d，出水标准执行《城镇污水处理厂污染物排放标准》（GB18918-2002）一级A标准。“十四五”期间，将实施提标扩建工程，建成后总处理规模达到20万m3/d，出水达到地表水准IV类水质标准，并承担上游楼山河及楼山后河河道部分生态补水任务。<br /><br />
目前娄山河污水系统服务人口约46万人，服务面积为66.0km2。主要为李沧区及白沙河以南一部分城阳区服务，南临李村河流域，北至白沙河；西至胶州湾东岸岸边，东至崂山水库。<br /><br />
全厂的污水处理工艺关键位置均采用进口设备，设备运行稳定，厂内设有6个PLC控制站，采用分散控制，集中管理的模式对生产工艺进行管理和调度。在线仪表的监测数据能够实时准确地上传至省、市级监管单位，满足监管部门对污水厂的实时监控的要求。<br /><br />
公司于2010、2011、2012三个年度荣获市安全生产委员会颁布的“安全生产先进班组”称号、集团颁布的“安全生产先进班组”称号、市总工会、安监局 “安康杯”竞赛优胜班组称号。2014年获得青岛市安康杯竞赛组委会颁布的青岛市“安全生产标准化班组”荣誉称号；2015年获得青岛市“敬老文明号”荣誉称号；2015、2016年获得共青团青岛市委员会授予的“青年文明号”称号；2017年获得青岛市总工会颁发的青岛市职工书屋荣誉称号，被青岛市环境保护局定为市级环境教育基地；2020年获得青岛市人力资源和社会保障局颁发的2018-2019年度青岛市劳动保障守法诚信示范用人单位荣誉证书；2022年被青岛市城镇供水节水排水协会评为2021年度先进单位荣誉称号。<br /><br />
通讯地址：青岛市李沧区滨海路22号<br /><br />
联系电话：0532-84679229`,
        },
        {
          name: "青岛张村河水务有限公司",
          content: `青岛张村河水务有限公司成立于2016年8月2日，其运营的张村河水质净化厂于2018年5月18日通水，2018年6月通过环保验收，位置位于崂山区青银高速以西，张村河北岸，玉龙路北侧，占地面积1.31公顷，服务人口30万，服务面积 31.2km2（不含山体），采用全地下建设方式，设计规模为4万吨/日，最深处达18米，是青岛市城区第一座全地下污水处理厂。<br /><br />
厂区地面为花园式景观布局，地下负一层为设备操作区域，负二层为污水、污泥处理设施和综合管廊，所有构筑物充分结合设备提检高度，夹层式布置，共壁式合建，最大限度利用空间。采用国内领先技术的MBR超滤膜处理工艺，出水主要污染物指标优于地表水V类水质标准，处理后的再生水主要用于张村河河道补水。<br /><br />
作为青岛市首家布局河道中上游的污水处理厂，张村河水质净化厂以自然、生态为打造理念，厂河相依，共融和谐，将污水处理、景观游憩、生态修复三级功能融为一体，实现“常年有水，水清岸绿”的生态绿色长廊，改善水环境质量，恢复水生态系统，充分展现出和谐之美的生态环境，提升了张村河两岸的空间风貌，实现宜产宜居的现代化都市风貌，真正实现了景观生态的有机结合，对提升城市生态环境和城市化品味具有深远的发展意义。<br /><br /><br />
通讯地址：青岛市崂山区青银高速以西，张村河北岸，玉龙路<br /><br />
联系电话：0532-81923519`,
        },
        {
          name: "青岛娄山河水务资源有限公司",
          content: `青岛娄山河水务资源有限公司成立于2016年8月12日，是青岛市第一座规范化、现代化、自动化的大型污泥处置企业。公司位于李沧区滨海路22号甲，占地面积约3万平方米，公司秉承“创新、卓越、绿色、共享”的发展理念，以污泥“减量化、稳定化、无害化、资源化”处置为目标，服务市内四区以及崂山区等范围内的污水处理厂。设计规模为日处置污泥300吨，采用“连续运行槽式翻抛加负压供氧除臭一体化工艺”，将含水率为76%的城市污泥处置成含水率低于40%的绿色营养土，可广泛应用于园林绿化、土地改良、荒山改造等方面。<br /><br /><br />
通讯地址：青岛市李沧区滨海路22号甲<br /><br />
联系电话：0532-84672076`,
        },
        {
          name: "青岛市固体废弃物处置有限责任公司",
          content: `青岛市固体废弃物处置有限责任公司1999年7月成立，隶属青岛水务集团有限公司，注册资本1000万元，总资产约15亿元，经营范围涵盖城市固体废弃物处理工程建设运作管理、垃圾填埋场地改造和利用、垃圾再生资源利用等，是中国环境卫生行业3A级信用企业、中国城市环境卫生协会生活垃圾卫生填埋及生态修复专业委员会副主任委员单位和常务理事单位。公司以“服务岛城 洁净万家”为己任，承担着市区生活垃圾的中转运输和处置，服务人口约500余万。拥有中转运输、卫生填埋、生化处理、城肥处理、渗沥液及浓缩液处理、厨余垃圾处理六大业务板块：中转站设计日处理能力4000吨，荣获中国人居环境范例奖；填埋场是国家一级无害化处理场，2019年实现原生垃圾零填埋，2021年打造为集环保教育、参观游览一体的示范园区；生化处理采用前分选+高温好氧堆肥处理工艺，日处理能力75吨；渗沥液处理采用厌氧+MBR+DTRO工艺，日处理能力1900吨，浓缩液处置效率提升技改项目获评E20环境平台、E20研究院“渗沥液处理推荐案例”；粪便处理采用固液分离+絮凝脱水工艺，设计日处理能力200吨；厨余垃圾采用预处理+干式厌氧消化工艺，设计日处理能力500吨。公司先后荣获全国青年文明号、山东省城建行业规范化管理先进单位、全省城市污水处理和垃圾处理工作先进单位等荣誉称号。<br /><br /><br />
通讯地址：青岛市李沧区滨海路36号<br /><br />
联系电话：0532-84667465`,
        },
        {
          name: "青岛洁宝生态科技有限公司",
          content: `青岛洁宝生态科技有限公司成立于2020年7月，注册资本2000万元。公司位于青岛市高新区河套镇小涧西村以北1.7公里处的桃源河北侧，小涧西固体废物处置园区内。担负着市南区、市北区、崂山区、李沧区、城阳区厨余垃圾的处置任务，设计工艺为厨余垃圾预处理+干式厌氧消化，沼渣进行脱水、干化处理，沼气经预处理后用于锅炉、发电机使用。<br /><br />
公司设置两部两车间：安全生产运营部、综合部、厌氧处理车间、检修及供能车间。公司建设运营的厨余垃圾处置项目为青岛市首个，采用的是德国先进的中温短轴干式厌氧工艺，现阶段正处于带料调试期。该项目的建设为青岛市乃至全国的厨余垃圾干式厌氧发酵提供了更多成功案例，具有里程碑式意义。同时，项目的落地将进一步提高青岛市生活垃圾分类后终端处理能力，实现厨余垃圾资源化利用和生物质能开发，在国家“双碳”目标下，实现垃圾处置社会、经济、环境、生态效益相统一，具有良好的综合示范效果。项目投产后，将大幅提升青岛市厨余垃圾无害化处理技能，达到“国内领先”水平。<br /><br /><br />
通讯地址：青岛市城阳区河套街道小涧西社区居委会北400米<br /><br />
联系电话：0532-87825076`,
        },
        {
          name: "青岛小涧西渗沥液处理有限公司、青岛洁源环境有限公司",
          content: `青岛水务固废渗沥液公司由青岛小涧西渗沥液处理有限公司（又称“渗沥液一期”）和青岛洁源环境有限公司（又称“渗沥液二期”）两家公司组成，一套管理团队负责运营管理。<br /><br />
青岛小涧西渗沥液处理有限公司成立于2011年10月，项目占地面积40.98亩，渗沥液处理采用“膜生物反应器（MBR）+碟管式反渗透(DTRO)”工艺，日处理能力900m3/d。<br /><br />
青岛洁源环境有限公司成立于2016年9月，项目占地约5.5公顷，渗沥液处理采用“厌氧+膜生物反应器（MBR）+碟管式反渗透(DTRO)”组合处理工艺，日处理能力1000m3/d；浓缩液处理采用“碳化硅膜软化（部分水池利旧+新增膜+板框压滤）+MVR蒸发+深度处理”处理工艺，日处理能力500m3/d。<br /><br />
公司承担青岛市市南、市北、李沧三个主城区以及崂山区、黄岛区、城阳区和高新区部分生活垃圾运至小涧西垃圾处理园区后所产生渗沥液的处理任务，职工60余名，曾被国家住房和城乡建设部评为“市政科技示范工程”、曾荣获“青岛市环境教育基地”、“青岛市五一劳动奖状”“先进集体奖”、“QC小组成果奖”等多个荣誉称号。<br /><br />
公司设置综合部、财务部、安全生产运营部、渗沥液处理车间、浓缩液处理车间、维修车间六个管理部门，服务面积约1280 km2，服务人口约500余万。2021年总处理量渗沥液470259吨、浓缩液122064吨，安全生产实现零事故。出厂水水质合格率100%，设备设施完好率、抢修及时率、巡线及时率及设备故障自检率达99.6%。<br /><br />
多年来，公司始终坚持习近平总书记“绿水青山就是金山银山”的发展理念号召，为保障出水水质，公司建立健全调节池、膜车间、浓缩液处理车间、出水口等水质监测保障系统，实现智慧水务平台全方位、全过程、全天候的监测控制。<br /><br />
结合青岛市“十四五”生态规划，公司将进一步完善各项措施，保持行业优势，推动生态建设，助推垃圾分类末端处置保障服务，为青岛市的绿水青山做出积极贡献。<br /><br /><br />
通讯地址：青岛城阳区正阳路285号403<br /><br />
联系电话：0532-68685289`,
        },
        {
          name: "青岛胶州自来水有限公司",
          content: `青岛胶州自来水有限公司始建于1968年，前身为胶县自来水厂，主要承担胶州市供水服务保障业务，服务面积88.6平方公里，服务人口42万人，职工总数270余人。荣获省城镇供水工作先进集体、青岛市文明单位标兵等荣誉称号。<br /><br />
截至2021年底，公司开发利用大沽河、山洲水库、棘洪滩水库3处水源地，前韩、车家河、大洋3座自来水厂，拥有城区加压站6个、二供加压站76个，供水能力13.7万立方米/日。<br /><br />
公司积极创建“碧水融真情”服务品牌，加快推进供水设施建设，全力保障了青岛胶东机场、上合示范区等重点区域供水安全，同步推进城乡供水一体化进程，有力服务了城市发展与市民需求。<br /><br /><br />
通讯地址：山东省胶州市胶州东路前进街3号<br /><br />
联系电话：0532-87211025`,
        },
        //               {
        //                 name: "青岛涌泉管道安装有限公司",
        //                 content: `青岛涌泉管道安装有限公司始建于2004年3月，属有限责任公司，注册资本500万元，由青岛胶州市自来水有限公司100%出资,现有市政公用工程施工总承包三级资质。<br /><br />
        // 主要经营范围:水利水电工程、给排水工程、城市燃气工程、城市热力工程施工，道路、桥梁、隧道、公共广场工程施工，市政工程施工（凭资质经营），工程车辆出租。供水设备、消防设备、环保设备及配套产品的生产、销售、租赁、安装、维修，净水工程的设计、施工、安装、维护、运营管理及咨询，一般劳保用品、管件管材、五金交电产品、包装饮用水的生产、销售、广告宣传。<br /><br />
        // 公司主营业务收入主要来源于小区配套给水工程，公司现有干部职工52人，公司下设工程部、行政事务部，工程部下设三个施工队，于2020年6月新设立了上和源服务中心，主要经营罐装水、大桶水及箱装水的销售业务。<br /><br /><br />
        // 通讯地址：青岛胶州市胶州东路前进街3号<br /><br />
        // 联系电话：0532-87230539`,
        //               },
        {
          name: "青岛市益水工程股份有限公司",
          content: `青岛市益水工程股份有限公司，始建于1989年，隶属于青岛水务集团有限公司的国有企业。拥有“中国建设工程鲁班奖”“全国工人先锋号”“全国AAA级信用企业”“山东省建筑工程质量泰山杯工程”等国家、省市级荣誉称号，具有市政公用工程施工总承包二级，建筑、水利、电力工程施工总承包三级，环保、建筑机电安装工程专业承包三级等资质。承担着青岛市水务工程的应急保障工作，是2018年“上海合作组织青岛峰会”的重要保障单位之一。<br /><br />
近三年，青岛市益水工程股份有限公司努力成为优秀的水处理系统整体解决方案供应商，构建了管道工程、设备集成与安装、综合场站工程、工程方案与设计、水务设备智造、实业发展等六大业务板块统筹发展的新格局。拥有供水厂、污水处理厂、海水淡化厂、污泥堆肥厂、厨余垃圾处理厂、涉重废水深度处理厂、泵站等综合场站的EPC总承包建设,工艺设备集成与安装、供排水管道设计施工等丰富的经验和业绩，以及AGR管件、管材的开发、生产和销售业务。创立“益水智造”品牌，拓展智能井盖等涉水产业链智能装备的研发销售。开拓城市道路、桥梁工程、水利水电工程、绿化工程等综合业务，BIM技术和管道内窥检测、光固化修复、顶拖管等非开挖技术以及智慧工地等创新管理技术在施工中的应用和推广。借助国家“一带一路”战略的东风，与大型央企紧密合作，开辟了博茨瓦纳、孟加拉等非洲、东南亚水务工程市场。<br /><br />
十四五期间，青岛市益水工程股份有限公司将竭诚为社会和广大业主、客户提供优质的工程、产品和高效、稳定、便捷的服务，积极响应水务集团新发展格局，深度匹配城市发展战略，积极参与“大水务”平台的项目建设，力争以优质的履约成果、品牌业绩、专业能力持续推动市场拓展，提升公司承担城市基础设施和服务民生保障能力，为青岛水务事业发展以及改善区域水生态环境和人民群众生活质量做出积极贡献！<br /><br />
真诚欢迎各界朋友携手合作，互惠互利，共创辉煌！<br /><br /><br />
通讯地址：青岛市崂山区劲松七路236号<br /><br />
联系电话：0532-85882929`,
        },
        {
          name: "青岛市自来水物资工程公司",
          content: `青岛市自来水物资工程有限公司是青岛水务集团有限公司下属的国有企业，注册资本3849万元，是融生产、供销、管理、工程施工于一体的水务专业公司。拥有“中华全国总工会职工书屋”“青岛市文明单位”“青岛市诚信企业”等荣誉称号。<br /><br />
公司具有市政公用工程施工总承包三级、劳务资质，多年来一直担负着岛城供水工程的施工任务，有着丰富的市政管道、大型厂站等工程施工经验。拥有二次供水设备、智能井盖、智能消火栓、智能水表、AGR管材等多种产品。荣获《一种自调试防沉降球墨铸铁防盗井盖》《一种可移动式的自动化精准投加磁粉装置》《一种高分子SMC树脂井盖》《一种磁粉浓度精确检测装置》《拉森钢板桩入岩支护技术工法》等多项国家实用新型专利、省市级工法及QC。<br /><br />
自成立以来，公司以为社会奉献高品质服务为目标，以打造精品工程，引导绿色建设为原则，以创建高素质的管理团队为基础，主动适应社会发展要求，开拓工程施工新领域，实行专业化管理、科学化运行、高效率工作，不断提升经营管理水平，在水务工程施工领域已具有一定知名度。先后参建青岛市重庆路快速路改造工程、青岛地铁配套给排水管线迁改工程、威海路平战结合地下工程、辽阳路快速路工程、济南路综合改造工程、院士港二期项目自来水管道铺设工程、青岛市李村河下游补水及调蓄工程等多项市重点工程建设任务。其中，山东省引黄济青改扩建工程输水河道衬砌工程，因施工质量优异被甲方、监理单位作为样板工程进行推广；平度市开发区DN300-1400mm雨污水管道工程，受到平度市政府及管委的高度好评；重庆路快速路改造工程多次受到建设单位的高度评价，K11+000——K11+060段被建设单位作为样板推广；四流北路加压站工程被青岛市质检部门评审为“双优工程”；青岛地铁配套给排水管线迁改工程、青岛市市区截污管网改造工程、威海路平战结合地下工程等均受到社会的一致好评。<br /><br />
近来来，公司积极响应国家号召，借助国家“一带一路”战略的东风，加大海外市场开拓步伐，与大型央企紧密合作，承建孟加拉帕德玛水厂-原水及进场路段给水管线项目等，积极参与开辟了非洲、东南亚等工程市场。<br /><br /><br />
通讯地址：青岛市市北区舞阳路39号<br /><br />
联系电话：0532-84852101`,
        },
        {
          name: "青岛高新海润水务有限公司",
          content: `青岛高新海润水务有限公司成立于2011年1月，注册资本2160万元，由高新区管委授权特许经营城市涉水业务，主要承担高新区生活、工业供水以及给水管网的日常维护及维修任务，服务面积63.44平方公里。<br /><br />
截至2021年底，供水能力5.5万立方米/日，年供水量1389.2万立方米，水质综合合格率100%，客户满意率100%。<br /><br />
“十四五”期间，公司将围绕水务一体化发展目标，以市场发展趋势为导向，以精细化管理、智能化管理为保障，以“保障与服务”为核心，着力保障供水安全，着力推进规范管理，着力提升服务质量，完善和延长水务产业链条。在确保安全稳定供水的基础上，探讨拓展中水回用、水质深度净化、水务工程建设等相关多元业务，实现可持续发展。<br /><br /><br />
通讯地址：青岛高新区河东路以南、岙东路以东<br /><br />
联系电话：0532-68687068`,
        },
        {
          name: "青岛百发海水淡化有限公司",
          content: `青岛百发海水淡化有限公司隶属于青岛水务海水淡化科技公司，是一家专业从事海水淡化处理的高科技企业。借助国家大力发展海水淡化战略新兴产业的契机，奉行“立足岛城、服务社会”的经营宗旨，秉承“规范管理、严格要求、务实高效、诚信发展”的经营理念，专业从事开 发、建造、拥有、运营和维护海水淡化水厂，生产和销售淡化水、海水淡化设备以及开发和经营与水务相关的副产品及业务。<br /><br />
公司成立于2009年，设计日产能20万立方米，是全国最大的膜法海水淡化项目、最大的市政供水海水淡化项目。公司注册资本人民币5.89亿元，占地面积6.6万平方米，现有员工62人，拥有专业齐全、经验丰富的工程技术运营团队。2015年取得ISO9001质量、ISO14001环境和ISO45001安全管理体系认证证书；2016、2019年被认定为高新技术企业；2016、2017、2018年连续三年被评为“青岛市安全生产先进单位”。<br /><br />
公司于2014年取得卫生许可证，是全国首家获得卫生许可证的海水淡化企业；2017年7月15日，单日产水量达到10.5万立方米，是全国唯一一家实现满负荷运行的海水淡化企业；截至目前，累计供水超过1亿立方米，已经成为青岛市重要水源，对保障青岛市城市供水及改善饮用水水质起到了重要作用。<br /><br />
公司是国内海水淡化头部企业，凭借丰富的设计、建设及运维经验，积极开展科研创新工作，参与制定国家、行业、团体标准4项，专利17项、软件著作4项，填补海水淡化标准空白，为海水淡化行业发展提供有力支撑。
今后，公司将一如既往地奉行企业经营宗旨，秉承经营理念，不断锐意进取，开拓创新，为建设半岛蓝色经济添砖加瓦，作出新的更大贡献。<br /><br /><br />
通讯地址：青岛市李沧区印江路2号甲<br /><br />
联系电话：0532-87050705`,
        },
        {
          name: "青岛青水津膜高新科技有限公司",
          content: `青岛青水津膜高新科技有限公司是青岛水务集团有限公司、天津膜天膜科技股份有限公司、美国净水技术有限公司（Clean Water Technology Holdings Co.）及上海联和科海材料科技有限公司共同合资成立的一家专业从事膜系统装备研发及制造，水处理高端装备制造及整体解决方案提供的中外合资高新技术公司，同时以膜应用技术为核心组建覆盖整个产业链的科研、制造、应用、销售一体化平台，打造全球一流膜装备及膜系统应用平台。<br /><br />
公司目前为客户提供的主要产品有：超滤/反渗透滤膜组件及装备系统、MBR及浸没式滤膜组件及装备系统、高端气浮设备、厌氧技术及设备、特种流体分离定制设备。同时依托在膜法水处理领域拥有丰富设计和工程经验的专业技术人员，提供大型水资源设备系统为基础的膜系统整体解决方案，面对大型膜法市政水厂建设市场、工业零排放市场、大型工业园区污水资源化市场、大型海水淡化市场等领域提供核心工艺包及技术服务。<br /><br />
公司厂区位于青岛市中德生态园，占地29亩，建设过滤膜成品组装产业化基地、膜处理装备及水处理系统装备制造基地。规划高性能过滤膜成品组装年产能200万平方米以上；水处理系统装备年制造能力500台套；海水淡化工程装备年承接能力30万吨/天；全膜法处理系统工程装备承接能力达到100万吨/天。全部达产后工程装备总产值可达3亿元，远期涉足污水资源化、工业零排放项目BOO设备投资、运营领域，总产值规模可达10亿元。<br /><br /><br />
通讯地址：青岛市黄岛区太白山路172号中德生态园双创中心241室<br /><br />
联系电话：0532-80983637`,
        },
        {
          name: "青岛水务碧水源科技发展有限公司",
          content: `青岛水务碧水源科技发展有限公司是由青岛水务集团有限公司与北京碧水源科技股份有限公司于2014年02月共同出资成立的合资公司，公司注册资本3亿元，其中青岛水务集团持股51%，北京碧水源持股49%。<br /><br />
公司主要以膜技术为依托，包括碧水源MBR微滤膜技术、浸没式/外置式MF超滤膜技术、选择性超低压纳滤DF膜技术、反渗透膜技术（海淡膜、苦咸水膜）等。主营污水厂、自来水厂设备系统集成，污水、污泥的资源化系统开发；再生水、海水淡化等双膜法新水源技术的研究与开发及工程应用；村镇污水及流域点源污水处理；水务项目及水环境综合治理投资建设运营；家用、商用净水器销售及农村惠民水站、社区健康水站等保障饮水安全。<br /><br />
公司结合碧水源领先的膜技术、水务集团丰富的建设、运营经验，先后承担了烟台套子湾污水厂二期工程、青岛世园会净化水厂、西海岸新区豆金河中水深度处理双膜法设备系统集成、青岛董家口经济区10万吨/天海水淡化PPP项目、乐陵市循环经济示范园污水处理厂BOT项目、李村河污水处理厂四期MBR系统集成、青岛海天中心酒店中水处理项目设备总包、利群股份胶州智能物流基地污水处理EPC+O、淄博市桓台县膜产业园污水处理设计/设备总承包、百发海淡二期超滤膜组器供货、烟台裕龙石化超滤膜组器供货等一批具有代表性的膜技术应用项目。<br /><br />
已经发展成为以膜技术为核心的技术企业，集“投、融、建、管”多项功能于一体，提供水处理的完整解决方案，为区域污水资源化、水资源短缺及饮用水安全提供全方位服务。<br /><br /><br />
通讯地址：青岛市市南区团岛三路8号5楼<br /><br />
联系电话：0532-83631891`,
        },
        {
          name: "青岛水务海水淡化科技公司",
          content: `青岛水务海水淡化科技公司成立于2020年3月，主要从事海水淡化项目设计、投资、建设、运营及海水淡化装备的研发制造，提供海水淡化咨询技术服务及整体解决方案。荣获国家高新技术企业、市“专精特新”企业等荣誉称号。<br /><br />
截至2021年底，公司管控资产总规模22.29亿元，职工总数170余人，淡化海水产能30万立方米/日，约占全国总产能的14%，累计供应淡化海水超2亿立方米，是全国最大的海水淡化运营企业。初步形成全国可复制、可推广的“青岛模式”，实现了应用场景多元化、厂网运营一体化、政府引导政策化、企业培育市场化、创新驱动平台化、产业发展链条化。<br /><br />
公司以“政府引领，企业主导，市场化运作”为原则，实施规模化海水淡化开源工程，搭建投资运营、科技研发、装备制造、工程建设、金融服务5大产业平台，获得实用新型专利授权54项，发明专利3项，参与标准编制6项，设立青岛市博士后创新实践基地。<br /><br />
“十四五”期间，公司将布局建设海水淡化规模化应用基地，推动建设海水淡化产业园，发展海水淡化装备制造产业；引入优质战略合作伙伴，拓展业务范围，打造成为集投资运营、科技研发、装备制造、提供总体解决方案于一体的具有国际竞争力的海水淡化领军企业，助力我市创建国家海水淡化示范城市。<br /><br /><br />
通讯地址：青岛市市南区宁夏路288号10号楼6楼<br /><br />
联系电话：0532-89017596`,
        },
      ],
      index: 0,
      maskTop: 0,
    };
  },
  mounted() {
    this.body = document.body;
    this.app = document.getElementById("app");
  },
  methods: {
    openMask(e) {
      this.maskShow = true;
      this.index = e;
      this.maskTop = -this.app.getBoundingClientRect().top;
      this.body.style.overflow = "hidden";
    },
    closeMask() {
      this.maskShow = false;
      this.body.style.overflow = "auto";
    },
    reload() {
      let url = location.href
      url =
        url.indexOf("#leadership") > 0
          ? url
          : url + "#leadership";
      location.href = url;
      location.reload(true);
    },
  },
}).mount("#app");