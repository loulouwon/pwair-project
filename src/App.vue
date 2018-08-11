<template>
  <div id="app" v-bind:style="appStyle">
    <router-view v-bind:appStyle="appStyle" v-bind:location="location"></router-view>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      appStyle: {
        height: '100%'
      },
      location: {
        xLat: undefined,
        yLng: undefined,
        sido: undefined,
        sigugun: undefined,
      },
    }
  },
  methods: {
		getLocation() {
      var self = this;
			this.$location.getLocation().then(coordinates => {
        console.log('========================================App: 2');
				console.log('getLocation - coordinates : ', coordinates);
				// // 좌표값 조회가 존재하면
				if( coordinates ) {
          // 실시간 미세먼지 조회
					this.geoInfoToDistrictName(coordinates.lat, coordinates.lng);
				} else {
          self.location = undefined
        }
			});
    },
		geoInfoToDistrictName(lat, lng) {
      // 나중에 주석처리
      lat = 37.4954841;
      lng = 127.0333574;

      var self = this;
			naver.maps.Service.reverseGeocode({
					location: new naver.maps.LatLng(lat, lng),
				}, function(status, response) {
					if (status !== naver.maps.Service.Status.OK) {
					return alert('Something wrong!');
				}

        var result = response.result; // 검색 결과의 컨테이너
        if( result ) {
          self.location.sido = result.items[0].addrdetail.sido;       // 시도 저장
          self.location.sigugun = result.items[0].addrdetail.sigugun; // 구군 저장
          self.location.xLat = lat;                                   // x좌표 저장
          self.location.yLng = lng;                                   // y좌표 저장
          console.log('========================================App: 3');
          console.log('result: ', result);
          console.log('location: ', self.location);
        } else {
          self.location = undefined
        }
			});
		},
  },
  created() {
    if ( !this.location.xLat || !this.location.yLng ) {
      console.log('========================================App: 1');
      console.log('xLat : ' + this.location.xLat)
      console.log('yLng : ' + this.location.yLng)
      // x좌표, y좌표값이 없을 경우 getLocation 조회 호출
      this.getLocation();
    }
  }
}
</script>

<style>
  body{
    height: 100%;
    text-align: center;
    background-color: #50C1E9;
    font-family: 'Roboto';
    font-weight: 400;
  }
  #app{
    height: 100%;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05)
  }
</style>
