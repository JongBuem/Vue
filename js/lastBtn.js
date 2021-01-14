// vue로 다시작성 (클래스 바인딩 사용)
new Vue({                           // 자동재생 버튼
    el:'.lastTile',
    data:{
        True : true,                // 이벤트 후 동작
        False : false,              // 이벤트 전엔 동작하지않음 
    },
    methods:{
        player (){
            this.False=!this.False;  // 토글처럼사용가능 생성과 삭제
        }
    }
})


{/* <div class="last_title lastTile">
<span> 다음동영상 </span>   
<span>
    자동재생
    <button v-bind:class="{'last_btn':True, rightMove:False}"  @click="player">
        <div class="last_btnsub">aa</div>
    </button>
</span>
</div> */}


//(스타일 바인딩과 v-if)
new Vue({                                               // 구독자 버튼
    el:'.channer',                  
    data:{                  
      True:true,                                        // 구독 or 구독중
      Gray:'gray',                                      // 구독 하기전 색상
      Red:'red',                                        // 구독 이후 색상
    },                  
    methods: {                  
        godok(){                                        // 구독할경우
            this.True=!this.True;                       // True 변경으로 '구독중' 노출
        },
        going(){                                        // '구독중' 취소시 팝업
            if (confirm("구독을 취소 하시겠습니까?")==true) {
                this.True = true;                       
            } else {
                this.True = false;     
            }
        }
    }
})

{/* <div class="channer">
<div class="channer_data">           
        <img src="img/my.jpg" alt="">
    <div class="channer_info">
        <span class="chenner_title">8전트</span>
        <span class="chenner_titi">구독자 43.8만명</span>
    </div>
</div>
    <button @click="godok" class="channer_bt">
    <span  v-if="True" v-bind:style="{color : Gray}">구독</span>
    <span v-else="True" v-bind:style="{color : Red}" >구독중</span>
    </button>
</button>
</div> */}


