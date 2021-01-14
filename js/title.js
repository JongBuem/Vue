// vue로 다시작성 (클래스 바인딩 사용)
new Vue({                               // 타이틀제목과 화살표 버튼 이벤트
    el: '.title1',                      
    data: {
        False : false,                  // 클래스를 처음엔 숨기고
        True : true,                    // 보여줄 클래스
    },
    methods : {
        classPush(){                    // 제목과 화살표 버튼 클릭시
            this.False = !this.False;   // 클래스를 생성하게 하고 삭제시킴
        }
    }
})


//수정한 HTML
{/* <div class="title1">
<span v-bind:class="{text:False}" @click="classPush">
    승모씨와 임모씨가 술먹고?? 화제의 인물! 저기 누어있는 사람은 누구?!!
    [올해 주모상, 8전트 월드베스트 인간 제조기]
</span>
<button  @click="classPush" type="button" :class="{'title_bt':True, red:False}"  >
    <i class="fas fa-caret-down"></i>
</button>
</div> */}