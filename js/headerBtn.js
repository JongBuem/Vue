//vue로 다시작성 (v-if사용)
new Vue({                       // 해더 이미지 클릭 이벤트
    el: '.header',              // 해더 전체
    data: {
        number: 2,              // 처음화면
        True: true,

    },
    methods : {
        serchHeader(){          // 돋보기 클릭시
            this.number--;      // 숫자 낮추어 감추어진 화면등장
        },
        back(){                 // 뒤로가기 클릭시
             this.number=2;     // 처음화면으로 가는 값으로 변경
        },
        hambugMenu(){
            this.True=!this.True;
        }
    }
})


//수정한 HTML
{/* <div class="header">   
<header class="serchHeader" v-if="number==1">                   <!--상단 검색 메뉴-->   
    <button class="serch_bt1 serch_bt"  @click="back"> 
        <i class="fas fa-arrow-left"></i>
    </button>     
    <input type="text" class="serch_input" placeholder="YouTube검색">
    <button class="serch_bt2 serch_bt">
        <i class="fas fa-search fafa"></i>
    </button>
</header>
<header class="main_header" v-else-if="number==2">                   <!--상단 메뉴-->
    <div class="logo">
        <a class="logo_a" href="https://jongbuem.github.io/YouTube_Page_CSS/">
            <i class="fab fa-youtube"></i>
            <span class="title">YouTube</span>
        </a>
    </div>
    <div class="icons">
        <input type="text" class="icons_input">
        <button class="icons_bt1" @click="serchHeader">
            <i class="fas fa-search"></i>
        </button>
        <button class="icons_bt2"> 
            <i class="fas fa-ellipsis-v"></i>
        </button>
    </div>
</header>
</div>  */}

