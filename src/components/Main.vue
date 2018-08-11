<template>
  <div v-if="isShow" class="main-wrap">
    <!-- .air-container : S -->
    <section class="air-container">
      <div>
        <div class="far fa-grin-hearts"></div>
        <div class="air-score">{{ airData.IDEX_MVL }}</div>
        <div class="air-state">{{ airData.MSRSTE_NM }}의 대기는 지금 {{ airData.IDEX_NM }} !</div>
        <div class="date">기준 : {{ airData.MSRDT }}</div>  
      </div>
    </section>   
    <!-- //.air-container : E -->

    <!-- .air-info-wrap : S -->
    <ul class="air-info-wrap">
      <li class="info-box">
        <span class="tit">미세먼지</span>
        <span class="far fa-grin-hearts"></span>
        <span class="state">좋음</span>
        <span>{{ airData.PM10 }} ㎍/㎥</span>
      </li>
      <li class="info-box">
        <span class="tit">오존</span>
        <span class="far fa-grin"></span>
        <span class="state">보통</span>
        <span>{{ airData.O3 }} ppm</span>
      </li>
      <li class="info-box">
        <span class="tit">초미세먼지</span>
        <span class="far fa-dizzy"></span>
        <span class="state">나쁨</span>
        <span>{{ airData.PM25 }} ㎍/㎥</span>
      </li>
    </ul>  
    <!-- //.air-info-wrap : E -->        
  </div>
</template>

<script>
export default {
  props: {
		appStyle: {
			type: Object
		},
		location: {
			type: Object
		},
  },
  data() {
    return {
      airData: {},
      items: undefined,
      currentDistrict: null,
      isShow: false
    }
  },
  methods: {
		getApi() {
			var self = this;
			console.log('========================================Main: 2');
      console.log('location: ', this.location);
      var sigugun = undefined
      if( this.location ) {
        sigugun = this.location.sigugun;
        var url = 'http://openapi.seoul.go.kr:8088/746a5361636a6f7337336e4f656579/json/RealtimeCityAir/1/25/';
        this.$http.get(url).then((result) => {
          console.log(result)
          if (result.data.RealtimeCityAir.RESULT.CODE == "INFO-000") {
            var airData = result.data.RealtimeCityAir.row;
            airData.find((obj, i) => {
              if( obj.MSRSTE_NM === sigugun) {
                console.log('obj: ', obj);
                self.setAirData(obj);
              }
            })
          }
        })
      }
    },
    setAirData(obj) {
      this.airData.MSRDT = obj.MSRDT;
      this.airData.IDEX_NM = obj.IDEX_NM;
      this.airData.PM10 = obj.PM10;
      this.airData.PM25 = obj.PM25;
      this.airData.O3 = obj.O3;
      this.airData.MSRSTE_NM = obj.MSRSTE_NM;
      this.airData.IDEX_MVL = obj.IDEX_MVL;
      console.log('airData: ', this.airData);
      this.updateAppColor(obj.IDEX_NM);
      this.isShow = true;
    },
    updateAppColor(status) {
      switch (status) {
        case '나쁨':
        this.appStyle.background = '#FA4659';
        break;
        case '보통':
        this.appStyle.background = '#ffa020';
        break;
        case '좋음':
        this.appStyle.background = '#53dcbf';
        break;
        default:
      }
    }
	},
  created() {
		if ( this.location.xLat && this.location.yLng && this.location.sigugun ) {
			console.log(1111111111111111)
			console.log('========================================Main: 1');
			console.log('location : ', this.location)
			this.getApi();
		} else {
			console.log(2222222222222222)
		}
  }
}
</script>

<style scoped>
.main-wrap{
  height: 100%;
  text-align: center;
}
.main-wrap .air-container{
  display: flex;
  width: 100%;
  height: 72%;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.main-wrap .air-container .far{
  font-size: 7.5em;  
}
.main-wrap .air-container .air-score{
  font-size: 2.8em;
  font-weight: 300;
  margin-top: 20px;
}
.main-wrap .air-container .air-state{
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 35px;
}
.main-wrap .air-container .date{
  font-size: 1.15em;
  font-weight: 300;
  margin-top: 15px;
  opacity: .8;
}
.main-wrap .air-info-wrap{
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 30px 0;
  margin: 0;
  color: #fff;
  background: rgba(255, 255, 255, .2);   
}
.main-wrap .air-info-wrap li{
  list-style: none;
  flex: 1;
}
.main-wrap .air-info-wrap li span{
  display: block;
}
.main-wrap .air-info-wrap li span.tit{
  font-size: 1.15em;
  margin-bottom: 8px;
}
.main-wrap .air-info-wrap li span.far{
  font-size: 2em;
  margin-bottom: 2px;
}
</style>
